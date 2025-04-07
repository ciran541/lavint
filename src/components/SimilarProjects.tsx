
import { Link } from "react-router-dom";
import { getProjectsByCategory } from "@/data/projects";
import type { Project } from "@/data/projects";

interface SimilarProjectsProps {
  category: Project["category"];
  currentProjectId: number;
}

const SimilarProjects = ({ category, currentProjectId }: SimilarProjectsProps) => {
  // Get projects in the same category, excluding the current one
  const similarProjects = getProjectsByCategory(category)
    .filter(project => project.id !== currentProjectId)
    .slice(0, 3); // Limit to 3 similar projects

  if (similarProjects.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-sans mb-6">Similar Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarProjects.map((project) => (
          <Link 
            key={project.id} 
            to={project.path} 
            className="group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] image-hover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="project-overlay">
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">{project.category} • {project.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarProjects;
