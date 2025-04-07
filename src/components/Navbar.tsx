import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If we're already on the home page, just scroll to top
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Otherwise navigate to home page
      navigate("/");
      // Scroll to top after navigation
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm py-2" : "py-4 bg-transparent"
      }`}
    >
      <div className="container-fluid mx-auto flex justify-between items-center">
        <a href="/" onClick={handleLogoClick} className="flex items-center">
          <img 
            src="https://sgcondonewlaunch.com/wp-content/uploads/2025/04/lavint_logo.png" 
            alt="LAVINT Logo" 
            className="h-20 md:h-24 lg:h-28 dark:hidden"
          />
          <img 
            src="https://sgcondonewlaunch.com/wp-content/uploads/2025/04/lavint_logo_white.png" 
            alt="LAVINT Logo" 
            className="h-20 md:h-24 lg:h-28 hidden dark:block"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-wider hover:text-primary transition-colors ${
                location.pathname === link.path ? "font-medium text-primary" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-2">
            <a href="tel:+6512345678" className="flex items-center space-x-2 text-sm">
              <Phone size={16} />
              <span>+65 1234 5678</span>
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background shadow-md md:hidden">
            <div className="container-fluid py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-wider py-2 ${
                    location.pathname === link.path ? "font-medium text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+6512345678" className="flex items-center space-x-2 text-sm py-2">
                <Phone size={16} />
                <span>+65 1234 5678</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;