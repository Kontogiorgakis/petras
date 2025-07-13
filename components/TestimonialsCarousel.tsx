"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { IoChevronBack, IoChevronForward, IoStar } from "react-icons/io5";
import Avatar from "react-avatar";

const TestimonialsCarousel = () => {
  const t = useTranslations("home.testimonials");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive layout
  const [isTablet, setIsTablet] = useState(false);

  // Get testimonials from translations
  const getTestimonials = () => {
    const testimonials = [];

    // We know we have exactly 8 testimonials based on our translation files
    const testimonialCount = 8;

    for (let index = 0; index < testimonialCount; index++) {
      try {
        const testimonial = {
          name: t(`data.${index}.name`),
          location: t(`data.${index}.location`),
          text: t(`data.${index}.text`),
          rating: 5, // All testimonials have 5 stars
          avatar: t(`data.${index}.name`).substring(0, 2).toUpperCase(),
        };
        testimonials.push(testimonial);
      } catch {
        // If we can't get a testimonial, stop here
        break;
      }
    }

    return testimonials;
  };

  const TESTIMONIALS = getTestimonials();

  // Set items per page based on screen size
  const getItemsPerPage = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4; // 2x2 grid on desktop
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  // Effect to detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
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
          <div
            className={`grid gap-6 lg:gap-8 ${
              isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
            }`}
          >
            {getCurrentTestimonials().map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="relative h-full">
                <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 md:p-8 shadow-lg h-full flex flex-col">
                  {/* Header */}
                  <div className="relative mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <Avatar
                          name={testimonial.name}
                          size="56"
                          round={true}
                          color="#3b82f6"
                          fgColor="#ffffff"
                          className="shadow-md"
                        />
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
