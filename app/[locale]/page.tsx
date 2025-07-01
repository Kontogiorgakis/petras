"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/components/home/sections/HeroSection";
import DeliverySection from "@/components/home/sections/DeliverySection";
import CarBrandsSection from "@/components/home/sections/CarBrandsSection";
import ServicesSection from "@/components/home/sections/ServicesSection";
import TestimonialsSection from "@/components/home/sections/TestimonialsSection";
import BenefitsSection from "@/components/home/sections/BenefitsSection";
import CTASection from "@/components/home/sections/CTASection";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen">
      <HeroSection />
      <DeliverySection />
      <CarBrandsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
}
