
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturedProjects = () => {
  const projects = getFeaturedProjects();
  const headerAnimation = useScrollAnimation("up");
  const projectsAnimation = useScrollAnimation("up", 0.1, 300);

  return (
    <section className="section-padding">
      <div className="container-fluid mx-auto">
        <div ref={headerAnimation.ref} className={`flex flex-col md:flex-row md:items-end justify-between mb-12 ${headerAnimation.animationClasses}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our showcase of transformative designs that reflect our commitment to quality, 
              innovation, and attention to detail.
            </p>
          </div>
          
          <Link to="/projects" className="btn-outline mt-4 md:mt-0 inline-block whitespace-nowrap">
            View All Projects
          </Link>
        </div>
        
        <div ref={projectsAnimation.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${projectsAnimation.animationClasses}`}>
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={project.path} 
              className="group relative overflow-hidden"
            >
              <div className="aspect-video image-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <span className="text-xs uppercase tracking-wider mb-1 text-primary">
                  {project.category} • {project.location}
                </span>
                <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
