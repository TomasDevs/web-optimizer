import React, { useEffect, useState, useRef, useCallback } from "react";

const FadeInOnScroll = ({ children, className = "", threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect(); // Odpojení observeru
    };
  }, [handleIntersection, threshold]);

  return (
    <section
      ref={ref}
      className={`${className} ${isVisible ? "fade-in" : "fade-out"}`}>
      {children}
    </section>
  );
};

export default FadeInOnScroll;
