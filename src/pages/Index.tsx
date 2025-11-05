import { Leaf } from "lucide-react";
import { FarmAnalyzer } from "@/components/FarmAnalyzer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary rounded-2xl shadow-medium">
              <Leaf className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SmartFarm AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get real-time, AI-powered farming insights for Kenyan smallholder farmers
          </p>
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <p className="text-sm font-medium text-accent">
              Powered by OpenWeather & Groq AI
            </p>
          </div>
        </header>

        <FarmAnalyzer />

        <footer className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
          <p className="max-w-2xl mx-auto">
            <span className="font-semibold text-foreground">Important:</span> SmartFarm AI is an
            educational tool designed to provide farming insights based on current weather data and
            AI analysis. It is not a substitute for expert agricultural advice. Always consult with
            local agricultural experts for critical farming decisions.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
