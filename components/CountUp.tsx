"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export const CountUp = ({ from = 0, to, duration = 2000, className = "", suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = from;
    const endValue = to;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = startValue + (endValue - startValue) * easeOutQuart;
      setCount(Math.floor(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, from, to, duration]);

  return (
    <div ref={elementRef} className={className}>
      {count}
      {suffix}
    </div>
  );
};
