
import { useEffect, useRef, useState } from "react";

type AnimationDirection = "up" | "down" | "left" | "right";

export const useScrollAnimation = (
  direction: AnimationDirection = "up",
  threshold: number = 0.1,
  delay: number = 0
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger the animation once
        if (entry.isIntersecting && !isVisible) {
          // Add a small delay if specified
          if (delay) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px" // Start animation a bit before element comes into view
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, isVisible, delay]);

  const getDirectionClasses = () => {
    // Initial translate values for the different directions
    const directionMap = {
      up: "translate-y-32",
      down: "-translate-y-32",
      left: "translate-x-32",
      right: "-translate-x-32",
    };

    return {
      initial: `opacity-0 ${directionMap[direction]}`,
      animate: "opacity-100 translate-y-0 translate-x-0",
    };
  };

  const { initial, animate } = getDirectionClasses();

  const animationClasses = `transform transition-all duration-1000 ease-out ${
    isVisible ? animate : initial
  }`;

  return { ref, animationClasses, isVisible };
};
