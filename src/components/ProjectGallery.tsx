
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-square cursor-pointer image-hover"
            onClick={() => openImage(image, index)}
          >
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 z-10 p-2 bg-black/50 text-white rounded-full"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
          
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged project image"
                className="w-full h-auto"
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute top-1/2 left-2 z-10 p-2 bg-black/50 text-white rounded-full transform -translate-y-1/2"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 z-10 p-2 bg-black/50 text-white rounded-full transform -translate-y-1/2"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded text-xs">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectGallery;
