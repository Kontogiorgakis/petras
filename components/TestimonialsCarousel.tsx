"use client";

import { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward, IoStar } from "react-icons/io5";

const TESTIMONIALS = [
  {
    name: "Maria Papadopoulos",
    location: "Athens, Greece",
    rating: 5,
    text: "Excellent service! The car was spotless and exactly as described. The staff was incredibly helpful and made the whole process seamless.",
    avatar: "MP",
  },
  {
    name: "John Anderson",
    location: "London, UK",
    rating: 5,
    text: "Amazing experience with Petras Rental. Great prices, clean vehicles, and outstanding customer service.",
    avatar: "JA",
  },
  {
    name: "Sophie Martin",
    location: "Paris, France",
    rating: 5,
    text: "Professional and reliable service. I needed a car last minute and they accommodated me perfectly.",
    avatar: "SM",
  },
  {
    name: "Alessandro Rossi",
    location: "Rome, Italy",
    rating: 5,
    text: "Top-quality rental experience! The car was delivered on time, clean, and well-maintained.",
    avatar: "AR",
  },
  {
    name: "Emma Thompson",
    location: "Manchester, UK",
    rating: 5,
    text: "Fantastic service from start to finish. The team went above and beyond to ensure I had everything I needed.",
    avatar: "ET",
  },
  {
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Outstanding car rental experience! The vehicle was in perfect condition and the staff was very professional.",
    avatar: "CR",
  },
  {
    name: "Lisa Weber",
    location: "Berlin, Germany",
    rating: 5,
    text: "Reliable and efficient service. Great selection of cars and competitive prices. Highly recommended!",
    avatar: "LW",
  },
  {
    name: "François Dubois",
    location: "Lyon, France",
    rating: 5,
    text: "Superb customer service and clean, modern vehicles. Made our vacation trip absolutely perfect!",
    avatar: "FD",
  },
  {
    name: "Anna Kowalski",
    location: "Warsaw, Poland",
    rating: 5,
    text: "Smooth booking process and excellent condition cars. Will definitely use Petras Rental again!",
    avatar: "AK",
  },
] as const;

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  // Effect to detect screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return TESTIMONIALS.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="relative px-2 md:px-6 lg:px-8">
      {/* Carousel Container */}
      <div className="overflow-hidden py-4">
        <div className="transition-all duration-500 ease-in-out">
          <div className={`grid gap-6 lg:gap-8 ${isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {getCurrentTestimonials().map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="relative h-full">
                <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 md:p-8 shadow-lg h-full flex flex-col">
                  {/* Header */}
                  <div className="relative mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-2xl flex items-center justify-center">
                          <span className="text-foreground font-bold text-lg">{testimonial.avatar}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground/80">{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                        <div key={starIndex} className="relative">
                          <IoStar className="text-yellow-400 text-lg" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex-1">
                    <p className="text-foreground/90 leading-relaxed text-base">&ldquo;{testimonial.text}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute -left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl z-10 flex items-center justify-center"
        onClick={prevPage}
      >
        <IoChevronBack className="text-lg md:text-xl text-muted-foreground" />
      </button>

      <button
        className="absolute -right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl z-10 flex items-center justify-center"
        onClick={nextPage}
      >
        <IoChevronForward className="text-lg md:text-xl text-muted-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-12">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`relative w-3 h-3 rounded-full ${
              currentIndex === pageIndex
                ? "bg-gradient-to-r from-primary to-[#256bae] shadow-lg"
                : "bg-muted-foreground/30"
            }`}
            onClick={() => goToPage(pageIndex)}
          >
            {currentIndex === pageIndex && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#256bae] rounded-full animate-ping opacity-30"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
