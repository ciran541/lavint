
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectGallery from "@/components/ProjectGallery";
import SimilarProjects from "@/components/SimilarProjects";
import { getProjectByPath, getProjectsByCategory } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  // Find the project by path
  const projectPath = "/" + (id ? `projects/${id}` : "");
  const project = getProjectByPath(projectPath);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Redirect to 404 if project not found after loading
  useEffect(() => {
    if (!loading && !project) {
      navigate("/not-found");
    }
  }, [loading, project, navigate]);

  const handleBackClick = () => {
    navigate("/projects");
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-fluid mx-auto pt-24 pb-20 min-h-screen flex items-center justify-center">
          <div className="animate-pulse space-y-8 w-full">
            <div className="h-8 bg-secondary rounded w-3/4"></div>
            <div className="h-64 bg-secondary rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-secondary rounded w-5/6"></div>
              <div className="h-4 bg-secondary rounded w-full"></div>
              <div className="h-4 bg-secondary rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return null; // Will redirect to 404 via useEffect
  }

  return (
    <Layout>
      <div className="container-fluid mx-auto pt-24 pb-20">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground"
          onClick={handleBackClick}
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Button>
        
        {/* Project header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.location}</span>
            {project.completedDate && (
              <>
                <span>•</span>
                <span>Completed: {project.completedDate}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-sans mb-6">{project.title}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        {/* Before & After - Full width on desktop */}
        {project.beforeImage && project.afterImage && (
          <div className="mb-12 w-full">
            <h2 className="text-2xl font-sans mb-4 max-w-4xl mx-auto">Before & After</h2>
            <div className="max-w-[1600px] mx-auto">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
              />
            </div>
          </div>
        )}

        {/* Project Video - Full width on desktop */}
        {project.videoSrc && (
          <div className="mb-12 w-full">
            <h2 className="text-2xl font-sans mb-4 max-w-4xl mx-auto">Project Video</h2>
            <div className="max-w-[1600px] mx-auto aspect-video">
              <video 
                controls 
                className="w-full h-full object-cover"
              >
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Project Gallery - Full width on desktop */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-20 w-full">
            <h2 className="text-2xl font-sans mb-4 max-w-4xl mx-auto">Project Gallery</h2>
            <div className="max-w-[1600px] mx-auto">
              <ProjectGallery images={project.galleryImages} />
            </div>
          </div>
        )}

        {/* Similar Projects */}
        {project.category && (
          <div className="max-w-[1600px] mx-auto">
            <SimilarProjects category={project.category} currentProjectId={project.id} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetail;
