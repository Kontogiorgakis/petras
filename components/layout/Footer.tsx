"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IoCarSport,
  IoCallSharp,
  IoMail,
  IoLocation,
  IoTime,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoShield,
  IoCard,
  IoCheckmarkCircle,
} from "react-icons/io5";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Our Cars" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact" },
] as const;

const SERVICES = [
  { icon: IoCarSport, label: "Premium Fleet" },
  { icon: IoShield, label: "Fully Insured" },
  { icon: IoCard, label: "Easy Booking" },
  { icon: IoCheckmarkCircle, label: "Clean & Sanitized" },
] as const;

const LOCATIONS = [
  "Heraklion Airport",
  "Chania Airport",
  "Heraklion City",
  "Rethymno",
  "Agios Nikolaos",
  "Sitia",
] as const;

export const Footer = () => {
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
                <Image
                  src="/logo/car.svg"
                  height={50}
                  width={50}
                  alt="Petras Rental Logo"
                  className="h-[50px] w-auto"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Petras Rental
                </span>
              </div>

              <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">
                Your trusted car rental partner in Crete. Experience the freedom of the road with our premium vehicles
                and exceptional service across the beautiful island.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <IoLogoFacebook className="text-lg text-white/70 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <IoLogoInstagram className="text-lg text-white/70 group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://wa.me/306912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <IoLogoWhatsapp className="text-lg text-white/70 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Quick Links
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mt-2 rounded-full"></div>
              </h3>

              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm sm:text-base inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Services List */}
              <h4 className="text-base font-semibold text-white mt-8 mb-4">Our Services</h4>
              <ul className="space-y-2">
                {SERVICES.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <li key={index} className="flex items-center gap-2 text-white/60 text-sm">
                      <IconComponent className="text-primary text-sm flex-shrink-0" />
                      <span>{service.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Contact Info
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mt-2 rounded-full"></div>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoCallSharp className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">+30 691 234 5678</p>
                    <p className="text-white/60 text-xs sm:text-sm">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoMail className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">info@petrasrental.gr</p>
                    <p className="text-white/60 text-xs sm:text-sm">Get in Touch</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoLocation className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">Heraklion, Crete</p>
                    <p className="text-white/60 text-xs sm:text-sm">Main Office</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <IoTime className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium text-sm sm:text-base">Always Available</p>
                    <p className="text-white/60 text-xs sm:text-sm">24/7 Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 relative">
                Our Locations
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mt-2 rounded-full"></div>
              </h3>

              <div className="grid grid-cols-1 gap-2">
                {LOCATIONS.map((location, index) => (
                  <div
                    key={index}
                    className="text-white/70 text-sm sm:text-base hover:text-white transition-colors duration-300 flex items-center gap-2 py-1"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    {location}
                  </div>
                ))}
              </div>

              {/* CTA Box */}
              <div className="mt-8 p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
                <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Ready to Drive?</h4>
                <p className="text-white/70 text-xs sm:text-sm mb-3 leading-relaxed">
                  Book your perfect vehicle today and explore Crete with confidence.
                </p>
                <Link
                  href="/cars"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#256bae] text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-primary/90 hover:to-[#256bae]/90 transition-all duration-300 transform hover:scale-105"
                >
                  <IoCarSport className="text-sm" />
                  View Cars
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
                © 2024 Petras Rental. All rights reserved.
              </div>

              <div className="flex items-center gap-6 text-xs sm:text-sm">
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <span className="text-white/40">|</span>
                <span className="text-white/60">Made in Crete 🏛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
