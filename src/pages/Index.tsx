
import VideoHero from "@/components/VideoHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <VideoHero 
        videoSrc="https://sgcondonewlaunch.com/wp-content/uploads/2025/04/3773486-hd_1920_1080_30fps.mp4"
        title="Transform Your Space"
        subtitle="Singapore's premier interior design studio specializing in bespoke renovations and transformations."
        ctaButton={{
          text: "Get Started",
          link: "/contact"
        }}
      />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <Testimonials />
      <FAQSection />
    </Layout>
  );
};

export default Index;
