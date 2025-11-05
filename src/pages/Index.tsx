import { Leaf } from "lucide-react";
import { FarmAnalyzer } from "@/components/FarmAnalyzer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import tomatoesImg from "@/assets/tomatoes.png";
import cropsImg from "@/assets/crops.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <header className="text-center mb-16 space-y-6 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background rounded-3xl" />
          <div className="relative py-12">
            <div className="flex items-center justify-center gap-6 mb-6">
              <img src={tomatoesImg} alt="Fresh tomatoes" className="h-24 w-24 object-contain drop-shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }} />
              <div className="p-4 bg-gradient-earth rounded-3xl shadow-medium">
                <Leaf className="h-16 w-16 text-white" />
              </div>
              <img src={cropsImg} alt="Farm crops" className="h-24 w-24 object-contain drop-shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }} />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
              SmartShamba
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real weather forecasts and AI-powered crop recommendations for Kenyan farmers
            </p>
          </div>
        </header>

        <section id="about" className="mb-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-soft">
            <h2 className="text-3xl font-bold text-foreground mb-6">About SmartShamba</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SmartShamba is revolutionizing agriculture in Kenya by bringing cutting-edge AI technology to smallholder farmers. Our platform combines real-time weather data with advanced machine learning to provide actionable farming insights.
              </p>
              <p>
                Whether you're planning your next crop cycle, optimizing irrigation, or preparing for seasonal changes, SmartShamba delivers personalized recommendations based on your location's unique climate patterns. Our 5-day weather forecasts help you make informed decisions about planting, harvesting, and crop protection.
              </p>
              <p className="font-medium text-foreground">
                Empowering farmers with knowledge for better yields and sustainable farming practices.
              </p>
            </div>
          </div>
        </section>

        <section id="analyzer">
          <FarmAnalyzer />
        </section>

        <div className="mt-20 text-center text-sm text-muted-foreground animate-fade-in">
          <p className="max-w-2xl mx-auto leading-relaxed">
            <span className="font-medium text-foreground">Disclaimer:</span> SmartShamba provides educational insights based on weather data and AI analysis. Always consult local agricultural experts for critical farming decisions.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
