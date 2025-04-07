
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const headerAnimation = useScrollAnimation("up");
  const testimonialAnimation = useScrollAnimation("up", 0.1, 300);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-fluid mx-auto">
        <div ref={headerAnimation.ref} className={`text-center max-w-3xl mx-auto mb-12 ${headerAnimation.animationClasses}`}>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Hear what our clients have to say about their experience
            working with LAVINT Design Studio.
          </p>
        </div>
        
        {/* Testimonials carousel for all screen sizes */}
        <div ref={testimonialAnimation.ref} className={testimonialAnimation.animationClasses}>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/3">
                  <div className="bg-background p-6 md:p-8 relative flex flex-col h-full min-h-[300px]">
                    <Quote 
                      size={30} 
                      className="text-primary/20 absolute top-4 right-4" 
                    />
                    
                    <p className="mb-6 text-muted-foreground">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="mt-auto flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative inset-auto left-auto -translate-y-0 mr-2" />
              <CarouselNext className="relative inset-auto right-auto -translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
