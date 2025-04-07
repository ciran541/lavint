
import Layout from "@/components/Layout";
import ProjectsGrid from "@/components/ProjectsGrid";
import VideoHero from "@/components/VideoHero";

const Projects = () => {
  return (
    <Layout>
      <VideoHero 
        videoSrc="https://sgcondonewlaunch.com/wp-content/uploads/2025/04/7578552-hd_1920_1080_30fps.mp4"
        title="Our Portfolio"
        subtitle="Explore our collection of thoughtfully designed spaces and transformative renovations."
        height="70vh" // Reduced height
      />
      <ProjectsGrid />
    </Layout>
  );
};

export default Projects;
