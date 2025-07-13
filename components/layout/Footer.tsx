"use client";

import Link from "next/link";
import { IoCarSport, IoCallSharp, IoMail, IoLocation, IoLogoGithub } from "react-icons/io5";
import { useTranslations } from "next-intl";

const QUICK_LINKS = [
  { href: "/", key: "home" },
  { href: "/cars", key: "cars" },
  { href: "/about-us", key: "aboutUs" },
  { href: "/terms-and-conditions", key: "termsAndConditions" },
  { href: "/contact-us", key: "contactUs" },
] as const;

const MAIN_OFFICE = {
  mapsUrl: "https://maps.google.com/?q=Papandreou+Andrea+10,+72300+Sitia,+Crete",
} as const;

export const Footer = () => {
  const t = useTranslations("layout.footer");

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      {/* Floating Background Shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#256bae]/10 to-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {t("brand")}
                </span>
              </div>

              <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">{t("description")}</p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 relative">
                {t("sections.quickLinks")}
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mt-2 rounded-full"></div>
              </h3>

              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm sm:text-base inline-block"
                    >
                      {t(`navigation.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 relative">
                {t("sections.contactInfo")}
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mt-2 rounded-full"></div>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoCallSharp className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">{t("contact.mobile.value")}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{t("contact.mobile.label")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoMail className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">{t("contact.email.value")}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{t("contact.email.label")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoCallSharp className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">{t("contact.landline.value")}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{t("contact.landline.label")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 relative">
                {t("sections.location")}
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mt-2 rounded-full"></div>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoLocation className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">{t("location.name")}</p>
                    <p className="text-white/70 text-xs sm:text-sm mb-2">{t("location.address")}</p>
                    <a
                      href={MAIN_OFFICE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors duration-300 text-xs sm:text-sm font-medium"
                    >
                      {t("location.viewOnMaps")}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="mt-8 p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">{t("sections.readyToDrive")}</h4>
                <p className="text-white/70 text-xs sm:text-sm mb-3 leading-relaxed">{t("cta.description")}</p>
                <Link
                  href="/cars"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#256bae] text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-primary/90 hover:to-[#256bae]/90 transition-all duration-300 transform hover:scale-105"
                >
                  <IoCarSport className="text-sm" />
                  {t("cta.button")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left">{t("bottom.copyright")}</div>

              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <IoLogoGithub className="mttext-sm" />
                <span className="text-white/60">
                  Made by{" "}
                  <a
                    href="https://github.com/Kontogiorgakis"
                    className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-300"
                  >
                    Konto
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
