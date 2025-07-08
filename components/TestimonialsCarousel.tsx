"use client";

import { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward, IoStar } from "react-icons/io5";
import Avatar from "react-avatar";

const TESTIMONIALS = [
  {
    name: "Μαρινα Β.Σ",
    location: "Greece",
    rating: 5,
    text: "We rented a car — everything was great, and Soula was incredibly friendly and helpful! She’s definitely worth choosing if you’re looking to rent a vehicle and explore the beautiful places around the city of Sitia... the nearby villages and the amazing beaches! The prices were very good! Many kudos!",
    avatar: "MP",
  },
  {
    name: "Caroline Monnet",
    location: "France",
    rating: 5,
    text: "I got the contact details for Petras Rent a Car from the backpacker's guide. And indeed, I was glad to have done business with Soula twice this year! A brand-new car, very reasonable price, and Soula arranged my arrival in Heraklion. She is incredibly kind, and it's also a real pleasure to chat with her. I recommend it with my eyes closed!",
    avatar: "JA",
  },
  {
    name: "Mc Bourdieu",
    location: "France",
    rating: 5,
    text: "I’ve been going to Sitia for 10 years and I always rent my vehicle from Petras Car Rentals. The manager of this local agency, Soula, is a capable person who knows how to adapt to her clients’ needs. Efficient, available, always smiling, with attractive prices! Highly recommended 👍",
    avatar: "SM",
  },
  {
    name: "Blanc Cristophe",
    location: "France",
    rating: 5,
    text: "We rented a car from Soula in September 2019. She gave us a warm welcome, and we had no issues at all with the rental car. An added bonus is that the car is available upon arrival at the airport and can also be dropped off at the airport when departing from Heraklion. Highly recommended...",
    avatar: "AR",
  },
  {
    name: "Sandrine Garcin",
    location: "France",
    rating: 5,
    text: "For the past 4 years, I’ve been renting my cars from Soula.Reliable and well-maintained. Fair price and car as well. I had a flat tire this summer, and it was fixed within half an hour. I highly recommend her!",
    avatar: "ET",
  },
  {
    name: "Manolis Hatzidakis",
    location: "Germany",
    rating: 5,
    text: "Soula is always helpful and always kind. sI’m absolutely satisfied with the cars she provides, and I will continue renting cars from Petras Car.",
    avatar: "CR",
  },
  {
    name: "JML OKS",
    location: "England",
    rating: 5,
    text: "I had a warm welcome and was completely satisfied with Soula’s services! I was even given an upgrade!!!",
    avatar: "LW",
  },
  {
    name: "ΔΗΜΟΣΘΕΝΗΣ ΖΙΟΥΛΑΣ",
    location: "Greece",
    rating: 4,
    text: "The car we were given was a 2023 model. Kudos to the woman who runs the company — some of the best prices in town and very good cars.",
    avatar: "FD",
  },
] as const;

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive layout
  const [isTablet, setIsTablet] = useState(false);

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
