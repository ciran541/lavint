
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQSection = () => {
  const { ref, animationClasses } = useScrollAnimation("up");
  const [activeTab, setActiveTab] = useState("all");
  
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive interior design services including space planning, concept development, furniture selection, renovation management, and project coordination for residential and commercial spaces.",
      category: "services"
    },
    {
      question: "How much does interior design cost?",
      answer: "Our pricing varies based on project scope, size, and specific requirements. We offer transparent pricing with detailed quotes after an initial consultation to understand your needs and vision.",
      category: "pricing"
    },
    {
      question: "How long does a typical renovation take?",
      answer: "Project timelines vary depending on scope and complexity. A typical HDB renovation might take 8-12 weeks, while larger projects could extend to 3-6 months. We provide detailed timelines during the planning phase.",
      category: "process"
    },
    {
      question: "Do you provide 3D visualization of the design?",
      answer: "Yes, we provide detailed 3D renderings to help you visualize the final design before any work begins. This helps in making informed decisions and adjustments early in the process.",
      category: "services"
    },
    {
      question: "Can you work with my existing furniture?",
      answer: "Absolutely! We're happy to incorporate your existing furniture and belongings into the new design. We'll help you determine what works well with the new concept and what might need to be replaced.",
      category: "process"
    },
  ];

  const filteredFaqs = activeTab === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeTab);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-fluid mx-auto" ref={ref}>
        <div className={`${animationClasses} text-center max-w-3xl mx-auto mb-12`}>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground/90">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our services, process, and what to expect when working with us.
          </p>
        </div>
        
        <div className={`${animationClasses} max-w-3xl mx-auto mb-8 flex justify-center`}>
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-md"
          >
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Card className={`${animationClasses} max-w-3xl mx-auto bg-background/80 backdrop-blur-sm shadow-lg border-primary/10 p-6 rounded-lg`}>
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-primary/20 last:border-b-0 py-2"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;
