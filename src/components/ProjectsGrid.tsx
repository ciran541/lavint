
import { useState } from "react";
import { Link } from "react-router-dom";
import { Project, getProjectsByCategory } from "@/data/projects";

type ProjectCategory = "All" | "HDB" | "Condo" | "Landed" | "Commercial";

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  
  const filters: ProjectCategory[] = ["All", "HDB", "Condo", "Landed", "Commercial"];
  
  const filteredProjects = getProjectsByCategory(activeFilter);

  return (
    <div className="container-fluid mx-auto pt-24 pb-20">
      <div className="text-center mb-12">
        <div className="flex flex-wrap justify-center mt-8 gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-primary/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
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
    </div>
  );
};

export default ProjectsGrid;
