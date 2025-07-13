"use client";

import Image from "next/image";
import { IoCheckmarkCircle, IoStar, IoArrowForward, IoCarSport } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  "No hidden fees or charges",
  "Free cancellation up to 24 hours",
  "Clean and sanitized vehicles",
  "Flexible rental periods",
  "Local pickup and drop-off",
  "Competitive pricing",
] as const;

export default function BenefitsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Crete landscape */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="bg-gradient-to-l from-primary/20 to-transparent h-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <IoStar className="text-base" />
              Iconic Experience
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Experience Excellence
              <span className="text-primary block">In Every Mile</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With years of experience in the car rental industry, we understand what matters most to our customers.
              From reliable vehicles to exceptional service, we deliver the perfect rental experience.
            </p>

            <div className="grid gap-6 mb-8">
              {BENEFITS.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/50 backdrop-blur rounded-2xl p-4 hover:bg-white/70 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IoCheckmarkCircle className="text-lg text-white" />
                  </div>
                  <div>
                    <span className="text-lg text-foreground font-medium leading-relaxed">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-xl">
                Learn More About Us
                <IoArrowForward className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
                View Our Fleet
                <IoCarSport className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Main image container with Sitia */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/home/sitia.png" alt="Beautiful Crete landscape - Sitia" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Overlay content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Discover Crete</h3>
                <p className="text-white/90">Explore the island&apos;s hidden gems</p>
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -top-6 -right-6 bg-white backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-border/50 animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <IoStar className="text-xl text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <IoCarSport className="text-xl text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">€25+</div>
                  <div className="text-sm text-muted-foreground">Starting Price</div>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute top-1/2 -left-4 bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-4 shadow-xl text-white transform -translate-y-1/2">
              <div className="text-sm font-medium">Free Delivery</div>
              <div className="text-xs opacity-90">Island-wide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
