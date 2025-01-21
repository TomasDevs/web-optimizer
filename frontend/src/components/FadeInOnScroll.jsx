import React, { useEffect, useState, useRef } from "react";

const FadeInOnScroll = ({ children, className = "", threshold = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <section
      ref={ref}
      className={`${className} ${isVisible ? "fade-in" : "fade-out"}`}>
      {children}
    </section>
  );
};

export default FadeInOnScroll;
