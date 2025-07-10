"use client";

import Image from "next/image";
import { IoCarSport, IoCallSharp, IoStar, IoLocation, IoLibrary } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/CountUp";
import { useState, useEffect } from "react";

const CAROUSEL_IMAGES = [
  { src: "/home/moto/first.jpg", alt: "Premium Car 1" },
  { src: "/home/moto/second.jpg", alt: "Premium Car 2" },
  { src: "/home/moto/third.jpg", alt: "Premium Car 3" },
  { src: "/home/moto/forth.jpg", alt: "Premium Car 4" },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-[#256bae]/5 to-primary/10 pt-16 pb-16 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
        {/* Color overlay to maintain brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#256bae]/15 to-primary/25"></div>
        {/* Glass-morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125 shadow-lg" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-full blur-3xl opacity-30 z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-[#256bae]/20 to-primary/20 rounded-full blur-2xl opacity-40 z-10"></div>

      <div className="relative z-20 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-12 items-center mt-12">
          {/* Content with Light Decorations */}
          <div className="text-center lg:text-left lg:col-span-3 relative">
            {/* Subtle floating elements */}
            <div className="absolute -top-4 -left-2 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
            <div className="absolute top-8 -right-2 w-1 h-1 bg-[#256bae]/50 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse delay-500"></div>

            {/* Title with subtle enhancements */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight break-words drop-shadow-2xl relative">
                Your Journey Starts
                <span className="text-primary block bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent drop-shadow-lg relative">
                  With Petras Rental
                  {/* Simple accent line */}
                  <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-primary to-[#256bae] rounded-full opacity-70"></div>
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 mx-auto lg:mx-0 leading-relaxed font-light break-words drop-shadow-lg relative">
              Experience the ultimate freedom of the road with our premium car rental service. From economy to luxury,
              we have the perfect vehicle for every adventure across beautiful Crete.
              {/* Simple side accent */}
              <div className="absolute -left-2 top-0 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90 shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                <IoCarSport className="mr-2 size-6" />
                Our Cars
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-white/40 hover:bg-white/10 text-white hover:text-white shadow-xl backdrop-blur-sm bg-white/5 hover:border-white/60 transform hover:scale-105 transition-all duration-300"
              >
                <IoCallSharp className="mr-2 size-6" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Happy Customers */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xs border border-white/20 hover:border-primary/50 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 to-[#256bae]/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:from-primary/30 group-hover:to-[#256bae]/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border border-white/20">
                    <IoStar className="text-xl sm:text-2xl text-white drop-shadow-lg group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={500}
                    suffix="+"
                    duration={2500}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-[#256bae] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-white/90 mt-2 group-hover:text-white transition-colors duration-300 font-medium drop-shadow-lg">
                    Happy Customers
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-[#256bae]/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>

            {/* Premium Cars */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-[#256bae]/50 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#256bae]/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#256bae]/15 to-indigo-500/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:from-[#256bae]/30 group-hover:to-indigo-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border border-white/20">
                    <IoCarSport className="text-xl sm:text-2xl text-white drop-shadow-lg group-hover:text-[#256bae] transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={12}
                    suffix="+"
                    duration={2000}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl group-hover:bg-gradient-to-br group-hover:from-[#256bae] group-hover:to-indigo-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-white/90 mt-2 group-hover:text-white transition-colors duration-300 font-medium drop-shadow-lg">
                    Premium Cars
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#256bae]/20 via-indigo-500/20 to-[#256bae]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>

            {/* Locations */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border border-white/20">
                    <IoLocation className="text-xl sm:text-2xl text-white drop-shadow-lg group-hover:text-emerald-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={10}
                    suffix="+"
                    duration={1500}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-white/90 mt-2 group-hover:text-white transition-colors duration-300 font-medium drop-shadow-lg">
                    Locations
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>

            {/* Years History */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-primary/50 rounded-3xl p-6 sm:p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 to-[#256bae]/15 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:from-primary/30 group-hover:to-[#256bae]/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 border border-white/20">
                    <IoLibrary className="text-xl sm:text-2xl text-white drop-shadow-lg group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={100}
                    suffix="+"
                    duration={1000}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-[#256bae] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-white/90 mt-2 group-hover:text-white transition-colors duration-300 font-medium drop-shadow-lg">
                    Years History
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-[#256bae]/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
