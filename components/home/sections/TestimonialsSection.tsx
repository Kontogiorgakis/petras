"use client";

import { IoStar } from "react-icons/io5";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 via-blue-50/30 to-indigo-50/50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Subtle floating elements */}
      <div className="absolute top-32 left-16 w-32 h-32 bg-gradient-to-br from-primary/4 to-[#256bae]/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-[#256bae]/3 to-indigo-500/3 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-emerald-500/3 to-teal-500/3 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-xl border border-primary/20 text-primary px-5 py-3 rounded-xl text-sm font-semibold mb-8 shadow-lg">
            <div className="w-7 h-7 bg-gradient-to-br from-primary/15 to-[#256bae]/15 rounded-lg flex items-center justify-center">
              <IoStar className="text-sm" />
            </div>
            <span>Customer Reviews</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">Customers</span>{" "}
            Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with
            Petras Rental.
          </p>
        </div>

        <TestimonialsCarousel />
      </div>
    </section>
  );
}
