
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface VideoHeroProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
  showScrollArrow?: boolean;
  ctaButton?: {
    text: string;
    link: string;
  };
  height?: string; // Added height prop
}

const VideoHero = ({ 
  videoSrc, 
  title, 
  subtitle, 
  showScrollArrow = true, 
  ctaButton,
  height = "100vh" // Default to full height if not specified
}: VideoHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mount with a slight delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden" style={{ height }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="video-overlay"></div>
      
      <div className="relative h-full container-fluid mx-auto flex flex-col items-center justify-center text-center text-white z-10">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 
          transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
          {title}
        </h1>
        
        {subtitle && (
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 
            transform transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            {subtitle}
          </p>
        )}
        
        {ctaButton && (
          <div className={`transform transition-all duration-1000 ease-out delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            <Link to={ctaButton.link}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 py-6 text-base">
                {ctaButton.text}
              </Button>
            </Link>
          </div>
        )}
        
        {showScrollArrow && (
          <button
            onClick={scrollToContent}
            aria-label="Scroll down"
            className={`absolute bottom-8 bg-transparent text-white border-none
              transform transition-all duration-1000 ease-out delay-1000 ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0'}`}
          >
            <ArrowDown size={32} />
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoHero;
