// Deno edge function

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
  name: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { location } = await req.json();

    if (!location) {
      throw new Error("Location is required");
    }

    console.log("Analyzing farm for location:", location);

    // Get API keys from environment
    const openWeatherKey = Deno.env.get("OPENWEATHER_API_KEY");
    const groqKey = Deno.env.get("GROQ_API_KEY");

    if (!openWeatherKey || !groqKey) {
      throw new Error("API keys not configured");
    }

    // Fetch weather data from OpenWeatherMap
    console.log("Fetching weather data...");
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      location
    )},KE&units=metric&appid=${openWeatherKey}`;

    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) {
      const errorText = await weatherResponse.text();
      console.error("Weather API error:", errorText);
      throw new Error("Failed to fetch weather data. Please check the location name.");
    }

    const weatherData: WeatherData = await weatherResponse.json();
    console.log("Weather data received:", weatherData);

    // Prepare weather summary
    const weatherSummary = {
      location: weatherData.name,
      temp: Math.round(weatherData.main.temp),
      humidity: weatherData.main.humidity,
      description: weatherData.weather[0].description,
    };

    // Create AI prompt for farming recommendations
    const aiPrompt = `You are SmartFarm AI, a digital assistant helping smallholder farmers in Kenya.

Based on the following current weather conditions for ${weatherSummary.location}, generate practical farming recommendations.

Weather Data:
- Temperature: ${weatherSummary.temp}°C
- Humidity: ${weatherSummary.humidity}%
- Conditions: ${weatherSummary.description}

IMPORTANT: Provide your response in plain text format with clear sections. Use numbers and line breaks for organization, but DO NOT use markdown formatting like asterisks, bold, or italics. Keep it simple and readable.

Provide recommendations in 3 clear sections:

1. Crop Recommendations
List which crops are suitable for these current conditions.

2. Water & Soil Management
Provide irrigation advice and soil care tips based on current weather.

3. Climate Resilience Tips
Give practical advice to prepare for weather changes.

Keep the response concise, practical, and actionable for smallholder farmers.`;

    console.log("Calling Groq AI...");
    // Call Groq AI for recommendations
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "You are SmartFarm AI, an expert agricultural advisor for Kenyan smallholder farmers. Provide practical, actionable advice.",
          },
          {
            role: "user",
            content: aiPrompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error("Groq API error:", errorText);
      throw new Error("Failed to generate AI recommendations");
    }

    const groqData = await groqResponse.json();
    console.log("AI recommendations generated");

    const recommendations = groqData.choices[0].message.content;

    // Return combined result
    const result = {
      location: weatherSummary.location,
      weather: weatherSummary,
      recommendations: recommendations,
    };

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error in analyze-farm function:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "An error occurred during analysis",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
