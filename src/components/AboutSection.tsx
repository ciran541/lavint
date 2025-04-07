
import { useState } from "react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const [stats] = useState([
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ]);

  const benefits = [
    "Custom designs tailored to your lifestyle",
    "Premium materials and craftsmanship",
    "Transparent pricing with no hidden costs",
    "Dedicated project manager for seamless execution",
  ];

  const textAnimation = useScrollAnimation("left");
  const statsAnimation = useScrollAnimation("right", 0.1, 300);

  return (
    <section className="section-padding">
      <div className="container-fluid mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textAnimation.ref} className={textAnimation.animationClasses}>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Singapore's Trusted Interior Design Studio
            </h2>
            
            <p className="text-muted-foreground mb-6">
              LAVINT Design Studio has been transforming residential and commercial spaces 
              across Singapore for over 15 years. We combine innovative design with flawless 
              execution to create spaces that inspire.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-3 text-primary">
                    <Check size={20} />
                  </span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <a href="/contact" className="btn-primary inline-block">
              Get a Free Consultation
            </a>
          </div>
          
          <div ref={statsAnimation.ref} className={`grid grid-cols-1 sm:grid-cols-3 gap-6 ${statsAnimation.animationClasses}`}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-secondary p-6 text-center flex flex-col items-center justify-center"
              >
                <span className="text-4xl font-serif text-primary mb-2">
                  {stat.number}
                </span>
                <span className="text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
            
            <div className="sm:col-span-3 aspect-video relative image-hover">
              <img 
                src="https://picsum.photos/800/450?random=1" 
                alt="LAVINT Design Studio workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
