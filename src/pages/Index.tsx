import { Leaf } from "lucide-react";
import { FarmAnalyzer } from "@/components/FarmAnalyzer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <header className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-4 bg-gradient-sky rounded-3xl shadow-medium">
              <Leaf className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-foreground">
            SmartFarm AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Real-time weather insights and AI-powered farming recommendations for Kenyan farmers
          </p>
        </header>

        <FarmAnalyzer />

        <footer className="mt-20 text-center text-sm text-muted-foreground animate-fade-in">
          <p className="max-w-2xl mx-auto leading-relaxed">
            <span className="font-medium text-foreground">Disclaimer:</span> SmartFarm AI provides educational insights based on weather data and AI analysis. Always consult local agricultural experts for critical farming decisions.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
