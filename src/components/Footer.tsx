import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">SmartShamba</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering Kenyan farmers with AI-powered insights for better yields and sustainable farming practices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@smartshamba.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                info@smartshamba.com
              </a>
              <a href="tel:+254700000000" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +254 700 000 000
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#analyzer" className="block text-muted-foreground hover:text-primary transition-colors">Farm Analyzer</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SmartShamba. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
