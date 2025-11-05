import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, MapPin, CloudRain, Sprout } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface DailyForecast {
  date: string;
  temp: number;
  humidity: number;
  description: string;
  rainProbability: number;
  rainfall: number;
}

interface AnalysisResult {
  location: string;
  weather: {
    temp: number;
    humidity: number;
    description: string;
    forecast: DailyForecast[];
  };
  recommendations: string;
}

export const FarmAnalyzer = () => {
  const [location, setLocation] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!location.trim()) {
      toast.error("Please enter a location");
      return;
    }

    setIsAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke("analyze-farm", {
        body: { location: location.trim() },
      });

      if (error) throw error;

      setResult(data);
      toast.success("Analysis complete!");
    } catch (error: any) {
      console.error("Analysis error:", error);
      toast.error(error.message || "Failed to analyze farm. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="w-full mx-auto space-y-6 animate-fade-in">
      <Card className="p-8 shadow-soft border border-border/50 bg-card/50 backdrop-blur">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Enter Location</h2>
          </div>
          <div className="flex gap-3">
            <Input
              placeholder="City name (e.g., Nairobi, Nakuru, Kisumu)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
              className="flex-1 h-12 text-base border-border/50 bg-background/50"
              disabled={isAnalyzing}
            />
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              size="lg"
              className="px-8 h-12 shadow-soft"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing
                </>
              ) : (
                "Get Insights"
              )}
            </Button>
          </div>
        </div>
      </Card>

      {result && (
        <div className="space-y-6 animate-fade-in">
          <Card className="p-8 shadow-soft border border-border/50 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CloudRain className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Current Weather</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2 text-center p-4 rounded-lg bg-muted/30">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Temperature</p>
                <p className="text-3xl font-bold text-foreground">{result.weather.temp}°C</p>
              </div>
              <div className="space-y-2 text-center p-4 rounded-lg bg-muted/30">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Humidity</p>
                <p className="text-3xl font-bold text-foreground">{result.weather.humidity}%</p>
              </div>
              <div className="space-y-2 text-center p-4 rounded-lg bg-muted/30">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Conditions</p>
                <p className="text-base font-semibold text-foreground capitalize pt-2">
                  {result.weather.description}
                </p>
              </div>
            </div>
          </Card>

          {result.weather.forecast && result.weather.forecast.length > 0 && (
            <Card className="p-8 shadow-soft border border-border/50 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <CloudRain className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">5-Day Forecast</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {result.weather.forecast.map((day, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-muted/30 space-y-2">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">
                      Day {idx + 1}
                    </p>
                    <p className="text-2xl font-bold text-foreground">{day.temp}°C</p>
                    <p className="text-xs text-muted-foreground capitalize">{day.description}</p>
                    <div className="pt-2 border-t border-border/30">
                      <p className="text-xs text-muted-foreground">Rain: {day.rainProbability}%</p>
                      <p className="text-xs text-muted-foreground">Humidity: {day.humidity}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          <Card className="p-8 shadow-soft border border-border/50 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Sprout className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">AI Farming Recommendations</h3>
            </div>
            <div className="text-foreground/90 whitespace-pre-wrap leading-relaxed text-base">
              {result.recommendations}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
