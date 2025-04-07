
export interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Tan",
    position: "Homeowner",
    text: "Working with LAVINT Design Studio was an absolute pleasure. They transformed our HDB flat into a space that feels both luxurious and functional. Their attention to detail and ability to understand our needs was impressive.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Lim",
    position: "Business Owner",
    text: "LAVINT redesigned our retail space, and the results exceeded our expectations. Not only is the space visually stunning, but it has significantly enhanced our customers' shopping experience and boosted our sales.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Wong",
    position: "Condo Resident",
    text: "The team at LAVINT was professional from start to finish. They guided us through the entire renovation process with patience and expertise. Our condo now perfectly reflects our style while maximizing space.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "David Chen",
    position: "Landed Property Owner",
    text: "LAVINT's design team exceeded our expectations with their creativity and professionalism. They transformed our dated house into a modern masterpiece while respecting our budget and timeline.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    name: "Jasmine Teo",
    position: "Interior Design Enthusiast",
    text: "What sets LAVINT apart is their ability to listen. They took my vague ideas and transformed them into a cohesive, beautiful space that perfectly captures my personality and lifestyle needs.",
    image: "https://randomuser.me/api/portraits/women/91.jpg",
  },
];

export const getFeaturedTestimonials = (count: number = 3) => {
  return testimonials.slice(0, count);
};
