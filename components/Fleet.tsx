"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { CarCard } from "./CarCard";
import { CarDetailsModal } from "./CarDetailsModal";
import { Car } from "@/types/car";
import { Button } from "@/components/ui/button";
import { IoCall, IoMail, IoLocation, IoTime } from "react-icons/io5";

interface FleetProps {
  cars: Car[];
}

const Fleet = ({ cars }: FleetProps) => {
  const t = useTranslations("fleet");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight mt-10">
            <span className="text-slate-900">{t("title.main")} </span>
            <span className="bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">
              {t("title.highlight")}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Cars Grid - 3x3 Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.length > 0 ? (
            cars.map((car) => <CarCard key={car.id} car={car} onCarClick={handleCarClick} />)
          ) : (
            <div className="md:col-span-2 lg:col-span-3 text-center py-20">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{t("noCars.title")}</h3>
              <p className="text-slate-600">{t("noCars.description")}</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

            {/* Floating Background Shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-[#256bae]/10 to-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-primary/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {t("cta.title")}
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">{t("cta.description")}</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IoCall className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t("cta.contact.mobile.label")}</div>
                    <div className="text-xs">{t("cta.contact.mobile.value")}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IoMail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t("cta.contact.email.label")}</div>
                    <div className="text-xs">{t("cta.contact.email.value")}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IoLocation className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t("cta.contact.location.label")}</div>
                    <div className="text-xs">{t("cta.contact.location.value")}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IoTime className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t("cta.contact.hours.label")}</div>
                    <div className="text-xs">{t("cta.contact.hours.value")}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+306936685610">
                  <Button className="bg-gradient-to-r from-primary to-[#256bae] text-white hover:from-primary/90 hover:to-[#256bae]/90 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <IoCall className="mr-2" />
                    {t("cta.buttons.call")}
                  </Button>
                </a>
                <Link href="/contact-us">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 hover:text-white px-8 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300"
                  >
                    <IoMail className="mr-2" />
                    {t("cta.buttons.quote")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Details Modal */}
      <CarDetailsModal car={selectedCar} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Fleet;
