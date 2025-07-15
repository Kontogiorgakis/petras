"use client";

import Image from "next/image";
import Link from "next/link";
import { IoShield, IoStar, IoHeart, IoGlobe, IoCall, IoMail, IoLocation } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const COMPANY_VALUES = [
  {
    icon: IoShield,
    key: "trust",
    color: "from-blue-500 to-primary",
  },
  {
    icon: IoHeart,
    key: "customerFirst",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: IoStar,
    key: "quality",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: IoGlobe,
    key: "local",
    color: "from-green-500 to-emerald-600",
  },
] as const;

const COMPANY_STATS = [
  {
    key: "experience",
    gradient: "from-primary to-[#256bae]",
  },
  {
    key: "customers",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    key: "vehicles",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    key: "support",
    gradient: "from-violet-600 to-purple-600",
  },
] as const;

export default function AboutUs() {
  const t = useTranslations("aboutUs");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 mt-12">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-slate-900">{t("hero.title.main")}</span>
                <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                  {t("hero.title.highlight")}
                </span>
                <span className="text-slate-900">{t("hero.title.sub")}</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">{t("hero.description")}</p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <IoCall className="mr-2" />
                    {t("hero.buttons.contactUs")}
                  </Button>
                </Link>
                <Link href="/cars">
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-3 rounded-2xl"
                  >
                    {t("hero.buttons.viewFleet")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/about/store.jpg"
                  alt="Beautiful Crete landscape"
                  fill
                  className="object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">{t("story.title.main")}</span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                {t("story.title.highlight")}
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">{t("story.description1")}</p>
            <p className="text-lg text-slate-600 leading-relaxed">{t("story.description2")}</p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">{t("values.title.main")}</span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                {t("values.title.highlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{t("values.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center h-full relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative`}
                  >
                    <value.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{t(`values.list.${value.key}.title`)}</h3>
                  <p className="text-slate-600 leading-relaxed relative">{t(`values.list.${value.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">{t("stats.title.main")}</span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                {t("stats.title.highlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{t("stats.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden">
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent relative`}
                  >
                    {t(`stats.list.${stat.key}.number`)}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-2 relative">
                    {t(`stats.list.${stat.key}.label`)}
                  </div>
                  <div className="text-sm text-slate-600 relative">{t(`stats.list.${stat.key}.description`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IoCall className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t("cta.contact.mobile.title")}</div>
                    <div className="text-sm">{t("cta.contact.mobile.value")}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IoMail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t("cta.contact.email.title")}</div>
                    <div className="text-sm">{t("cta.contact.email.value")}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-white/70">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <IoLocation className="text-2xl text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t("cta.contact.location.title")}</div>
                    <div className="text-sm">{t("cta.contact.location.value")}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+306936685610">
                  <Button className="bg-gradient-to-r from-primary to-[#256bae] text-white hover:from-primary/90 hover:to-[#256bae]/90 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <IoCall className="mr-2" />
                    {t("cta.buttons.callNow")}
                  </Button>
                </a>
                <a href="mailto:info@petras-rentals.gr">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 hover:text-white px-8 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300"
                  >
                    <IoMail className="mr-2" />
                    {t("cta.buttons.sendEmail")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
