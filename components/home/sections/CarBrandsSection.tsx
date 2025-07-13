"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { IoCarSport } from "react-icons/io5";

const CAR_BRANDS = [
  { name: "Kia", logo: "/brands/kia.svg", key: "kia" },
  { name: "Suzuki", logo: "/brands/suzuki.svg", key: "suzuki" },
  { name: "Hyundai", logo: "/brands/hyundai.svg", key: "hyundai" },
  { name: "Škoda", logo: "/brands/skoda.svg", key: "skoda" },
  { name: "Volkswagen", logo: "/brands/volkswagen-1-logo-svgrepo-com.svg", key: "volkswagen" },
  { name: "Toyota", logo: "/brands/toyota.svg", key: "toyota" },
] as const;

export default function CarBrandsSection() {
  const t = useTranslations("home.carBrands");

  return (
    <section className="hidden md:block py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-white to-blue-50/40"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Subtle floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/4 to-[#256bae]/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-[#256bae]/3 to-indigo-500/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-xl border border-primary/20 text-primary px-5 py-3 rounded-xl text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-7 h-7 bg-gradient-to-br from-primary/15 to-[#256bae]/15 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <IoCarSport className="text-sm" />
            </div>
            <span>{t("badge.title")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {t("title.main")}{" "}
            <span className="bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">
              {t("title.highlight")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Infinite Auto Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          <div className="flex animate-marquee space-x-16 whitespace-nowrap py-8">
            {/* First set of brands */}
            {CAR_BRANDS.map((brand, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <div className="relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/40 hover:border-primary/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-1 hover:scale-102 group min-w-[200px]">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-xl"></div>

                  <div className="relative text-center">
                    {/* SVG Logo */}
                    <div className="h-16 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={brand.logo}
                        alt={`${t(`brands.${brand.key}`)} logo`}
                        width={120}
                        height={64}
                        className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400"
                      />
                    </div>

                    {/* Brand Name */}
                    <div className="text-lg font-semibold text-muted-foreground/80 group-hover:text-primary transition-colors duration-300">
                      {t(`brands.${brand.key}`)}
                    </div>

                    {/* Animated underline */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mx-auto mt-3 group-hover:w-12 transition-all duration-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {CAR_BRANDS.map((brand, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <div className="relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/40 hover:border-primary/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-400 hover:-translate-y-1 hover:scale-102 group min-w-[200px]">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-xl"></div>

                  <div className="relative text-center">
                    {/* SVG Logo */}
                    <div className="h-16 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={brand.logo}
                        alt={`${t(`brands.${brand.key}`)} logo`}
                        width={120}
                        height={64}
                        className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-400"
                      />
                    </div>

                    {/* Brand Name */}
                    <div className="text-lg font-semibold text-muted-foreground/80 group-hover:text-primary transition-colors duration-300">
                      {t(`brands.${brand.key}`)}
                    </div>

                    {/* Animated underline */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mx-auto mt-3 group-hover:w-12 transition-all duration-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
