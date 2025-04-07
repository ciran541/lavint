
export interface Project {
  id: number;
  title: string;
  category: "HDB" | "Condo" | "Landed" | "Commercial";
  location: string;
  image: string;
  path: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
  videoSrc?: string;
  galleryImages?: string[];
  completedDate?: string;
  scope?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  // HDB Projects
  {
    id: 1,
    title: "Modern HDB Transformation",
    category: "HDB",
    location: "Tampines, Singapore",
    image: "https://picsum.photos/800/600?random=1",
    path: "/projects/modern-hdb-transformation",
    description: "This 4-room HDB flat was completely transformed from a dated space into a modern, minimalist home that maximizes functionality without compromising on style.",
    beforeImage: "https://picsum.photos/1200/800?random=55",
    afterImage: "https://picsum.photos/1200/800?random=56",
    videoSrc: "https://sgcondonewlaunch.com/wp-content/uploads/2025/04/3773486-hd_1920_1080_30fps.mp4",
    galleryImages: [
      "https://picsum.photos/800/800?random=41",
      "https://picsum.photos/800/800?random=42",
      "https://picsum.photos/800/800?random=43",
      "https://picsum.photos/800/800?random=44",
      "https://picsum.photos/800/800?random=45",
      "https://picsum.photos/800/800?random=46",
    ],
    completedDate: "June 2023",
    scope: [
      "Space planning",
      "Custom carpentry",
      "Flooring",
      "Electrical rewiring",
      "Painting",
      "Furniture selection",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Minimalist HDB Design",
    category: "HDB",
    image: "https://picsum.photos/800/600?random=2",
    path: "/projects/minimalist-hdb-design",
    location: "Punggol, Singapore",
    featured: false,
  },
  {
    id: 3,
    title: "Contemporary HDB Renovation",
    category: "HDB",
    image: "https://picsum.photos/800/600?random=3",
    path: "/projects/contemporary-hdb-renovation",
    location: "Ang Mo Kio, Singapore",
    featured: false,
  },
  // Condo Projects
  {
    id: 4,
    title: "Luxurious Condo Makeover",
    category: "Condo",
    image: "https://picsum.photos/800/600?random=4",
    path: "/projects/luxurious-condo-makeover",
    location: "River Valley, Singapore",
    featured: true,
  },
  {
    id: 5,
    title: "Urban Condo Design",
    category: "Condo",
    image: "https://picsum.photos/800/600?random=5",
    path: "/projects/urban-condo-design",
    location: "Orchard, Singapore",
    featured: false,
  },
  {
    id: 6,
    title: "Elegant Condo Renovation",
    category: "Condo",
    image: "https://picsum.photos/800/600?random=6",
    path: "/projects/elegant-condo-renovation",
    location: "Marine Parade, Singapore",
    featured: false,
  },
  // Landed Projects
  {
    id: 7,
    title: "Minimalist Landed Home",
    category: "Landed",
    image: "https://picsum.photos/800/600?random=7",
    path: "/projects/minimalist-landed-home",
    location: "Bukit Timah, Singapore",
    featured: true,
  },
  {
    id: 8,
    title: "Classic Landed Transformation",
    category: "Landed",
    image: "https://picsum.photos/800/600?random=8",
    path: "/projects/classic-landed-transformation",
    location: "East Coast, Singapore",
    featured: false,
  },
  // Commercial Projects
  {
    id: 9,
    title: "Boutique Retail Design",
    category: "Commercial",
    image: "https://picsum.photos/800/600?random=9",
    path: "/projects/boutique-retail-design",
    location: "Orchard Road, Singapore",
    featured: true,
  },
  {
    id: 10,
    title: "Modern Office Space",
    category: "Commercial",
    image: "https://picsum.photos/800/600?random=10",
    path: "/projects/modern-office-space",
    location: "CBD, Singapore",
    featured: false,
  },
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectByPath = (path: string) => {
  return projects.find(project => project.path === path);
};

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category'] | 'All') => {
  return category === 'All' ? projects : projects.filter(project => project.category === category);
};
