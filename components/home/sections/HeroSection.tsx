"use client";

import Image from "next/image";
import { IoCarSport, IoCallSharp, IoStar, IoLocation } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/CountUp";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-[#256bae]/5 to-primary/10 pt-16 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center mt-12">
          {/* Left Image */}
          <div className="relative lg:col-span-2">
            <Image
              src="/home/hero.png"
              alt="Petras Rental Hero"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left lg:col-span-3">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight break-words">
              Your Journey Starts
              <span className="text-primary block bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">
                With Petras Rental
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 mx-auto lg:mx-0 leading-relaxed font-light break-words">
              Experience the ultimate freedom of the road with our premium car rental service. From economy to luxury,
              we have the perfect vehicle for every adventure across beautiful Crete.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90 shadow-xl"
              >
                <IoCarSport className="mr-2 size-6" />
                Our Cars
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-primary/30 hover:bg-primary/5"
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
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl border border-white/60 hover:border-primary/30 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/15 to-[#256bae]/15 rounded-2xl flex items-center justify-center mx-auto group-hover:from-primary/25 group-hover:to-[#256bae]/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IoStar className="text-xl sm:text-2xl text-primary group-hover:text-[#256bae] transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={500}
                    suffix="+"
                    duration={2500}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-[#256bae] transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-muted-foreground mt-2 group-hover:text-muted-foreground/90 transition-colors duration-300 font-medium">
                    Happy Customers
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-[#256bae]/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>

            {/* Premium Cars */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl border border-white/60 hover:border-[#256bae]/30 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#256bae]/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[#256bae]/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#256bae]/15 to-indigo-500/15 rounded-2xl flex items-center justify-center mx-auto group-hover:from-[#256bae]/25 group-hover:to-indigo-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IoCarSport className="text-xl sm:text-2xl text-[#256bae] group-hover:text-indigo-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={50}
                    suffix="+"
                    duration={2000}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-[#256bae] group-hover:to-indigo-500 transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-muted-foreground mt-2 group-hover:text-muted-foreground/90 transition-colors duration-300 font-medium">
                    Premium Cars
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#256bae]/20 via-indigo-500/20 to-[#256bae]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>

            {/* Locations */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl border border-white/60 hover:border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-2xl flex items-center justify-center mx-auto group-hover:from-emerald-500/25 group-hover:to-teal-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IoLocation className="text-xl sm:text-2xl text-emerald-500 group-hover:text-teal-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={15}
                    suffix="+"
                    duration={1500}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-muted-foreground mt-2 group-hover:text-muted-foreground/90 transition-colors duration-300 font-medium">
                    Locations
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>

            {/* Rating */}
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl border border-white/60 hover:border-yellow-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                {/* Multi-layer Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-2xl flex items-center justify-center mx-auto group-hover:from-yellow-500/25 group-hover:to-orange-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <IoStar className="text-xl sm:text-2xl text-yellow-500 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Enhanced Counter */}
                <div className="relative">
                  <CountUp
                    to={5}
                    suffix="★"
                    duration={1000}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-500"
                  />
                  <div className="text-sm sm:text-base text-muted-foreground mt-2 group-hover:text-muted-foreground/90 transition-colors duration-300 font-medium">
                    Rating
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
