"use client";

import { IoLocation, IoArrowForward, IoCallSharp, IoCheckmarkCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const DELIVERY_LOCATIONS = [
  {
    name: "Heraklion Airport",
    description: "International Airport",
    icon: "✈️",
    coordinates: { lat: 35.3387, lng: 25.1803 },
  },
  {
    name: "Chania Airport",
    description: "International Airport",
    icon: "✈️",
    coordinates: { lat: 35.5317, lng: 24.1497 },
  },
  {
    name: "Sitia Airport",
    description: "Regional Airport",
    icon: "✈️",
    coordinates: { lat: 35.2166, lng: 26.1018 },
  },
  {
    name: "Heraklion Port",
    description: "Main Ferry Port",
    icon: "⚓",
    coordinates: { lat: 35.3442, lng: 25.1332 },
  },
  {
    name: "Chania Port",
    description: "Main Ferry Port",
    icon: "⚓",
    coordinates: { lat: 35.5178, lng: 24.0212 },
  },
  {
    name: "Sitia Port",
    description: "Main Ferry Port",
    icon: "⚓",
    coordinates: { lat: 35.2089, lng: 26.1049 },
  },
  {
    name: "Agios Nikolaos",
    description: "City Center",
    icon: "🏛️",
    coordinates: { lat: 35.1908, lng: 25.7164 },
  },
  {
    name: "Ierapetra",
    description: "Coastal Town",
    icon: "🏖️",
    coordinates: { lat: 35.0097, lng: 25.7397 },
  },
  {
    name: "Palekastro",
    description: "Beach Resort",
    icon: "🏖️",
    coordinates: { lat: 35.1972, lng: 26.2611 },
  },
  {
    name: "Xerokampos",
    description: "Remote Beach",
    icon: "🌊",
    coordinates: { lat: 35.1019, lng: 26.2397 },
  },
] as const;

export default function DeliverySection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-indigo-50/60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/8 to-[#256bae]/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-[#256bae]/6 to-primary/6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-500/4 to-teal-500/4 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-xl border border-primary/30 text-primary px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <IoLocation className="text-sm" />
            </div>
            <span>Island-Wide Delivery Service</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-foreground">We Deliver </span>
            <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              Anywhere
            </span>
            <br />
            <span className="text-foreground">You Are</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
              Experience ultimate convenience with our premium door-to-door delivery service
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              From major airports to hidden beaches, we bring your perfect rental car directly to you
            </p>
          </div>
        </div>

        {/* Modern Location Display */}
        <div className="relative mb-20">
          {/* Enhanced Location Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
            {DELIVERY_LOCATIONS.map((location, index) => {
              const handleLocationClick = () => {
                const googleMapsUrl = `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`;
                window.open(googleMapsUrl, "_blank");
              };

              return (
                <div
                  key={index}
                  onClick={handleLocationClick}
                  className="relative group cursor-pointer"
                  style={{
                    animationDelay: `${index * 120}ms`,
                    animation: "fade-in-scale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                  }}
                >
                  {/* Enhanced Badge */}
                  <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl border border-white/50 hover:border-primary/30 rounded-2xl px-5 sm:px-7 py-3 sm:py-4 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    {/* Multi-layer Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

                    <div className="relative flex items-center gap-3 sm:gap-4">
                      {/* Enhanced Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-[#256bae]/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <span className="text-lg sm:text-xl filter group-hover:brightness-110 transition-all duration-300">
                            {location.icon}
                          </span>
                        </div>
                      </div>

                      {/* Enhanced Text */}
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base whitespace-nowrap">
                          {location.name}
                        </span>
                        <span className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
                          {location.description}
                        </span>
                      </div>

                      {/* Click Indicator */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-6 h-6 bg-gradient-to-br from-primary to-[#256bae] rounded-lg flex items-center justify-center shadow-lg">
                          <IoArrowForward className="text-xs text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-[#256bae]/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Custom Location Request */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90 backdrop-blur-3xl rounded-[2rem] shadow-2xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-[#256bae]/5 to-indigo-500/10 rounded-[2.5rem] blur-2xl opacity-60"></div>

            <div className="relative border border-white/60 rounded-[2rem] p-8 md:p-12">
              {/* Header Section */}
              <div className="mb-8">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#256bae] rounded-2xl shadow-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#256bae] rounded-2xl animate-ping opacity-20"></div>
                  <IoCallSharp className="text-3xl text-white relative z-10" />
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  <span className="text-foreground">Need a </span>
                  <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                    Custom Location
                  </span>
                  <span className="text-foreground">?</span>
                </h3>

                <div className="max-w-3xl mx-auto space-y-3">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Don&apos;t see your location above? No problem! We deliver anywhere across Crete.
                  </p>
                  <p className="text-base text-muted-foreground/80">
                    From remote beaches to mountain villages, our team will bring your perfect rental car directly to
                    you.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 rounded-2xl group"
                >
                  <IoCallSharp className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  Call Us Now
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IoArrowForward className="text-sm" />
                  </div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 text-lg px-8 py-6 rounded-2xl backdrop-blur group transition-all duration-300"
                >
                  <IoLocation className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
                  Request Custom Location
                </Button>
              </div>

              {/* Enhanced Contact Info */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/20 to-transparent h-px top-0"></div>
                <div className="pt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-sm font-medium text-foreground">Available 24/7</span>
                      <span className="text-xs text-muted-foreground">Round-the-clock service</span>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <IoCheckmarkCircle className="text-primary text-xl" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Free Consultation</span>
                      <span className="text-xs text-muted-foreground">No hidden charges</span>
                    </div>

                    <div className="flex flex-col items-center text-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <IoLocation className="text-indigo-500 text-xl" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Island-Wide</span>
                      <span className="text-xs text-muted-foreground">Anywhere in Crete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
