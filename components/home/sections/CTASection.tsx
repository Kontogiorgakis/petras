"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { IoArrowForward, IoCarSport, IoPeople, IoCallSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-xl border border-primary/20 text-primary px-5 py-3 rounded-xl text-sm font-semibold mb-8 shadow-lg">
            <div className="w-7 h-7 bg-gradient-to-br from-primary/15 to-[#256bae]/15 rounded-lg flex items-center justify-center">
              <FaCar className="text-sm" />
            </div>
            <span>{t("badge.title")}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            {t("title.main")}{" "}
            <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              {t("title.highlight")}
            </span>
          </h2>

          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">{t("description")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {/* Our Fleet Card */}
          <div className="group">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-[#256bae]/30 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl"></div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/home/moto/first.jpg"
                  alt="Our Reliable Fleet"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <IoCarSport className="text-xl text-white drop-shadow-lg" />
                </div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {t("cards.fleet.title")}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">{t("cards.fleet.description")}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 text-center">
                <p className="text-slate-600 leading-relaxed mb-6">{t("cards.fleet.content")}</p>

                <Link href="/cars">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10"
                  >
                    {t("cards.fleet.button")}
                    <IoArrowForward className="ml-2 text-base" />
                  </Button>
                </Link>

                {/* Animated underline */}
                <div className="w-0 h-1 bg-gradient-to-r from-primary to-[#256bae] mx-auto mt-6 group-hover:w-20 transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* About Us Card */}
          <div className="group">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#256bae]/20 to-emerald-500/20 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#256bae]/30 to-emerald-500/30 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl"></div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/home/sitia.jpg"
                  alt="Beautiful Sitia, Crete - Our Home"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <IoPeople className="text-xl text-white drop-shadow-lg" />
                </div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#256bae] transition-colors duration-300">
                      {t("cards.heritage.title")}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">{t("cards.heritage.description")}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 text-center">
                <p className="text-slate-600 leading-relaxed mb-6">{t("cards.heritage.content")}</p>

                <Link href="/about-us">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-slate-300 hover:bg-slate-50 hover:border-[#256bae]/50 text-slate-700 hover:text-[#256bae] shadow-xl transition-all duration-300"
                  >
                    {t("cards.heritage.button")}
                    <IoArrowForward className="ml-2 text-base" />
                  </Button>
                </Link>

                {/* Animated underline */}
                <div className="w-0 h-1 bg-gradient-to-r from-[#256bae] to-emerald-500 mx-auto mt-6 group-hover:w-20 transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className="group">
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl"></div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/home/moto/second.jpg"
                  alt="Get in Touch with Petras Rental"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <IoCallSharp className="text-xl text-white drop-shadow-lg" />
                </div>

                {/* Image Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      {t("cards.contact.title")}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">{t("cards.contact.description")}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 text-center">
                <p className="text-slate-600 leading-relaxed mb-6">{t("cards.contact.content")}</p>

                <Link href="/contact-us">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10"
                  >
                    {t("cards.contact.button")}
                    <IoCallSharp className="ml-2 text-base" />
                  </Button>
                </Link>

                {/* Animated underline */}
                <div className="w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 group-hover:w-20 transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
