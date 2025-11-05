import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, MapPin, CloudRain, Sprout } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface AnalysisResult {
  location: string;
  weather: {
    temp: number;
    humidity: number;
    description: string;
    rainfall?: string;
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
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      <Card className="p-8 shadow-medium border-2 border-primary/10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Farm Location</h2>
          </div>
          <div className="flex gap-3">
            <Input
              placeholder="Enter city name (e.g., Nairobi, Nakuru)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
              className="flex-1 text-lg"
              disabled={isAnalyzing}
            />
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              size="lg"
              className="px-8"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Farm"
              )}
            </Button>
          </div>
        </div>
      </Card>

      {result && (
        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 shadow-medium bg-gradient-to-br from-secondary/5 to-secondary/10 border-2 border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <CloudRain className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-semibold text-foreground">Weather Conditions</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="text-2xl font-bold text-secondary">{result.weather.temp}°C</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Humidity</p>
                <p className="text-2xl font-bold text-secondary">{result.weather.humidity}%</p>
              </div>
              <div className="space-y-1 col-span-2 md:col-span-1">
                <p className="text-sm text-muted-foreground">Conditions</p>
                <p className="text-lg font-semibold text-foreground capitalize">
                  {result.weather.description}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-medium bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Sprout className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">AI Farming Recommendations</h3>
            </div>
            <div className="prose prose-sm max-w-none">
              <div className="text-foreground whitespace-pre-wrap leading-relaxed">
                {result.recommendations}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
