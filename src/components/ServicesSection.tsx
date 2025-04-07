
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const headerAnimation = useScrollAnimation("up");
  
  // Create separate animations for each service card with increasing delays
  const serviceAnimations = [
    useScrollAnimation("up", 0.1, 100),
    useScrollAnimation("up", 0.1, 300),
    useScrollAnimation("up", 0.1, 500),
  ];

  const services = [
    {
      title: "Residential Design",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
      image: "https://sgcondonewlaunch.com/wp-content/uploads/2025/04/resi.jpg",
    },
    {
      title: "Commercial Design",
      description: "Create impactful commercial spaces that enhance your brand identity and improve workflow efficiency.",
      image: "https://sgcondonewlaunch.com/wp-content/uploads/2025/04/com.jpg",
    },
    {
      title: "Renovation",
      description: "Breathe new life into existing spaces with our expert renovation services, from minor updates to major overhauls.",
      image: "https://sgcondonewlaunch.com/wp-content/uploads/2025/04/reno1.jpg",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-fluid mx-auto">
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-12 ${headerAnimation.animationClasses}`}>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            We offer comprehensive design solutions tailored to your unique needs and vision,
            delivered with exceptional craftsmanship and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={serviceAnimations[index].ref}
              className={`group relative overflow-hidden ${serviceAnimations[index].animationClasses}`}
            >
              <div className="aspect-[3/4] image-hover">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                <p className="text-sm text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <Link 
                  to="/contact" 
                  className="flex items-center text-primary hover:underline transition-all text-sm opacity-0 group-hover:opacity-100 duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
