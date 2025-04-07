
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const animation = useScrollAnimation("up", 0.1);

  return (
    <section className="relative py-20 bg-secondary">
      <div className="container-fluid mx-auto">
        <div 
          ref={animation.ref} 
          className={`flex flex-col items-center text-center max-w-3xl mx-auto ${animation.animationClasses}`}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Let's bring your vision to life. Our team of expert designers is ready to help you create the perfect space that reflects your style and needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-sans group">
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-500" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
