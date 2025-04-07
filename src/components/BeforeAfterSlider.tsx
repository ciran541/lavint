
import { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = moveEvent.clientX - rect.left;
        const position = (x / rect.width) * 100;
        
        setSliderPosition(Math.min(Math.max(position, 0), 100));
      }
    };
    
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    
    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = moveEvent.touches[0].clientX - rect.left;
        const position = (x / rect.width) * 100;
        
        setSliderPosition(Math.min(Math.max(position, 0), 100));
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
    
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div className="before-after-slider aspect-video max-w-full" ref={sliderRef}>
      {/* After image (full size) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1">
          {afterLabel}
        </span>
      </div>
      
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        />
        <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-2 py-1">
          {beforeLabel}
        </span>
      </div>
      
      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
          <div className="w-1 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
