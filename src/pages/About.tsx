import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex p-4 bg-gradient-earth rounded-3xl shadow-medium mb-6">
            <Leaf className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            About SmartShamba
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering Kenyan farmers with intelligent farming solutions
          </p>
        </div>

        <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="bg-card border rounded-2xl p-8 shadow-soft">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
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

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-xl p-6 shadow-soft">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Accurate Forecasts</h3>
              <p className="text-sm text-muted-foreground">
                Real-time weather data and 5-day forecasts tailored to your specific location in Kenya.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-soft">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground">
                Smart recommendations for crops, irrigation, and climate adaptation strategies.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-soft">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Built for Farmers</h3>
              <p className="text-sm text-muted-foreground">
                Simple, accessible tools designed specifically for Kenyan smallholder farmers.
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-soft">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why SmartShamba?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Climate change and unpredictable weather patterns pose significant challenges to farming communities across Kenya. SmartShamba bridges the technology gap by providing farmers with the same advanced tools and insights that large agricultural operations use.
              </p>
              <p>
                Our platform is free to use and requires no technical expertise. Simply enter your location, and receive instant recommendations based on current and forecasted weather conditions. We believe that every farmer deserves access to modern technology that can help improve yields and reduce crop losses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
