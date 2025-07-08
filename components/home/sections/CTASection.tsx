"use client";

import Image from "next/image";
import { IoArrowForward, IoCheckmarkCircle, IoCarSport, IoShield, IoCallSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#256bae]/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#256bae]/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <IoArrowForward className="text-base" />
            Explore More
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Ready to Hit{" "}
            <span className="bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">the Road?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover everything Petras Rental has to offer with our premium services and extensive fleet
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Our Fleet Card */}
          <div className="group">
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-primary/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/home/hero.png"
                  alt="Our Premium Fleet"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-primary/20 to-[#256bae]/20 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                  <IoCarSport className="text-lg text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Our Fleet
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Explore our extensive collection of premium vehicles, from economy cars to luxury models
                </p>

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90"
                >
                  View Fleet
                  <IoArrowForward className="ml-2 text-sm" />
                </Button>

                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* About Us Card */}
          <div className="group">
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-[#256bae]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#256bae]/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/home/sitia.jpg"
                  alt="About Petras Rental"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-[#256bae]/20 to-primary/20 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                  <IoShield className="text-lg text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#256bae] transition-colors duration-300">
                  About Us
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Learn about our story, values, and commitment to providing exceptional rental experiences
                </p>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-[#256bae]/30 hover:bg-[#256bae]/5 hover:border-[#256bae]/50"
                >
                  Learn More
                  <IoArrowForward className="ml-2 text-sm" />
                </Button>

                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#256bae] to-primary mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className="group">
            <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-primary/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/home/sitia.png"
                  alt="Contact Petras Rental"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-primary/20 to-[#256bae]/20 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                  <IoCallSharp className="text-lg text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Contact Us
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Get in touch with our friendly team for bookings, questions, or personalized assistance
                </p>

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#256bae] to-primary hover:from-[#256bae]/90 hover:to-primary/90"
                >
                  Get in Touch
                  <IoCallSharp className="ml-2 text-sm" />
                </Button>

                {/* Animated underline */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#256bae] to-primary mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-[#256bae]/10 backdrop-blur-lg border border-primary/20 rounded-2xl px-8 py-6 shadow-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Open Daily 09:00-20:00</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <IoCheckmarkCircle className="text-primary text-lg" />
              <span className="text-sm font-medium text-muted-foreground">Best rates guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
