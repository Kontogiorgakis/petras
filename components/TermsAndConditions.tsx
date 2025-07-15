"use client";

import {
  IoCarSport,
  IoShield,
  IoTime,
  IoCard,
  IoWarning,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoCallSharp,
  IoMail,
} from "react-icons/io5";
import { useTranslations } from "next-intl";

const TERMS_SECTIONS = [
  {
    icon: IoCarSport,
    key: "vehicleRental",
  },
  {
    icon: IoShield,
    key: "driverRequirements",
  },
  {
    icon: IoTime,
    key: "rentalTerms",
  },
] as const;

export const TermsAndConditions = () => {
  const t = useTranslations("termsAndConditions");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50 pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>

      {/* Floating Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#256bae]/5 to-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-[#256bae]/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <IoShield className="text-base" />
            {t("header.badge.title")}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {t("header.title.main")}{" "}
            <span className="bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">
              {t("header.title.highlight")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("header.description")}
          </p>
        </div>

        {/* Main Terms Sections */}
        <div className="grid gap-8 mb-16">
          {TERMS_SECTIONS.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-primary/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-[#256bae]/20 transition-all duration-300">
                      <IconComponent className="text-2xl text-primary group-hover:text-[#256bae] transition-colors duration-300" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                        {t(`sections.${section.key}.title`)}
                      </h3>

                      <ul className="space-y-3">
                        {t.raw(`sections.${section.key}.items`).map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Charges Section */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-primary/10 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-2xl flex items-center justify-center">
                <IoCard className="text-2xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("extraCharges.title")}</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {t.raw("extraCharges.items").map((charge: { service: string; price: string }, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200"
                >
                  <span className="font-medium text-foreground">{charge.service}</span>
                  <span className="text-primary font-bold">{charge.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <IoCheckmarkCircle className="text-green-600 text-xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-800 mb-2">{t("extraCharges.coverage.title")}</h4>
                  <p className="text-green-700 leading-relaxed">{t("extraCharges.coverage.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Not Covered Section */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-red-50/90 to-orange-50/70 backdrop-blur-lg border border-red-200 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <IoWarning className="text-2xl text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-800">{t("notCovered.title")}</h3>
            </div>

            <p className="text-red-700 mb-6 leading-relaxed">{t("notCovered.description")}</p>

            <ul className="space-y-3">
              {t.raw("notCovered.items").map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-red-700 leading-relaxed">
                  <IoCloseCircle className="text-red-500 text-lg flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cancellation Policy */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-lg border border-primary/10 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-2xl flex items-center justify-center">
                <IoTime className="text-2xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("cancellation.title")}</h3>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">{t("cancellation.description")}</p>
              <ul className="space-y-2 text-muted-foreground">
                {t.raw("cancellation.items").map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">{t("contact.title")}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">{t("contact.description")}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+306936685610"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-[#256bae] text-white px-6 py-3 rounded-xl font-medium hover:from-primary/90 hover:to-[#256bae]/90 transition-all duration-300 transform hover:scale-105"
              >
                <IoCallSharp className="text-lg" />
                +30 693 668 5610
              </a>

              <a
                href="mailto:info@petras-rentals.gr"
                className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <IoMail className="text-lg" />
                info@petras-rentals.gr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
