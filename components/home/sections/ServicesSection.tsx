"use client";

import { IoCarSport, IoShield, IoTime, IoCard, IoCheckmarkCircle, IoStar } from "react-icons/io5";

const SERVICES = [
  {
    icon: IoCarSport,
    title: "Premium Fleet",
    description: "Choose from our collection of well-maintained, modern vehicles for every occasion and adventure.",
  },
  {
    icon: IoShield,
    title: "Fully Insured",
    description: "All our vehicles come with comprehensive insurance coverage for your complete peace of mind.",
  },
  {
    icon: IoTime,
    title: "24/7 Support",
    description: "Round-the-clock customer support and roadside assistance whenever you need it most.",
  },
  {
    icon: IoCard,
    title: "Easy Booking",
    description: "Simple online booking process with transparent pricing and absolutely no hidden fees.",
  },
  {
    icon: IoCheckmarkCircle,
    title: "Clean & Sanitized",
    description: "Every vehicle is thoroughly cleaned and sanitized before each rental for your safety.",
  },
  {
    icon: IoStar,
    title: "Best Rates",
    description: "Competitive pricing with price-match guarantee to ensure you get the best value possible.",
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#256bae]/5 to-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/3 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#256bae]/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <IoShield className="text-base" />
            Premium Services
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">
              Petras Rental?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide exceptional car rental services with a focus on quality, reliability, and customer satisfaction
            across beautiful Crete.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-primary/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  <div className="relative text-center h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-[#256bae]/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="text-3xl text-primary group-hover:text-[#256bae] transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">{service.description}</p>

                    {/* Animated underline */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mx-auto mt-6 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
