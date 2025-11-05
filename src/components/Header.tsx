import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <Link to="/" className="font-semibold text-lg text-foreground hover:text-primary transition-colors">
            SmartShamba
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="mailto:info@smartshamba.com" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline text-xs sm:text-sm">info@smartshamba.com</span>
            </a>
            <a href="tel:+254700000000" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline text-xs sm:text-sm">+254 700 000 000</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
