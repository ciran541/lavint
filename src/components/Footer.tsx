
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-32 overflow-hidden">
      {/* Light mode background image */}
      <div className="absolute inset-0 bg-cover bg-center block dark:hidden" 
           style={{ backgroundImage: 'url(https://sgcondonewlaunch.com/wp-content/uploads/2025/04/white.png)' }} />
      
      {/* Dark mode background image */}
      <div className="absolute inset-0 bg-cover bg-center hidden dark:block" 
           style={{ backgroundImage: 'url(https://sgcondonewlaunch.com/wp-content/uploads/2025/04/dark_vibrant.png)' }} />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-secondary/70 dark:bg-black/70" />
      
      <div className="container-fluid mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-3xl font-sans font-bold mb-6 inline-block">
              LAVINT
            </Link>
            <p className="text-muted-foreground dark:text-gray-300 mt-4 text-sm font-sans">
              LAVINT is a premier interior design studio specializing in contemporary, 
              minimalist designs that transform spaces into functional works of art.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-sans font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4 font-sans">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-sans font-medium mb-6">Contact</h4>
            <ul className="space-y-6 font-sans">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-primary" />
                <span className="text-sm">123 Design Street, #01-01<br />Singapore 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:+6512345678" className="text-sm hover:text-primary transition-colors">+65 1234 5678</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@lavint.com" className="text-sm hover:text-primary transition-colors">info@lavint.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-sans font-medium mb-6">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
            <div className="mt-10">
              <p className="text-sm text-muted-foreground dark:text-gray-400 font-sans">
                © {new Date().getFullYear()} LAVINT Design Studio.<br />All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
