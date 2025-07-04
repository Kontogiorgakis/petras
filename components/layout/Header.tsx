"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { IoCarSport, IoPeople, IoSend, IoMenu, IoDocumentText } from "react-icons/io5";
import ReactCountryFlag from "react-country-flag";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";

const NAVIGATION_ITEMS = [
  {
    href: "/cars",
    label: "Cars",
    icon: IoCarSport,
  },
  {
    href: "/about-us",
    label: "About Us",
    icon: IoPeople,
  },
  {
    href: "/terms-and-conditions",
    label: "Terms and Conditions",
    icon: IoDocumentText,
  },
] as const;

const LANGUAGES = [
  { code: "en", name: "English", countryCode: "US" },
  { code: "el", name: "Ελληνικά", countryCode: "GR" },
] as const;

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentLanguage = LANGUAGES.find((lang) => lang.code === locale) || LANGUAGES[0];

  const handleLanguageChange = (langCode: string) => {
    const segments = pathname.split("/");
    segments[1] = langCode;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const handleContactClick = () => {
    router.push("/contact-us");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isMounted ? "animate-fade-in-down" : ""}`}>
      {/* Modern Glass-morphism Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        {/* Floating background elements */}
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-0 right-1/4 w-20 h-20 bg-gradient-to-br from-[#256bae]/10 to-primary/10 rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo and Brand */}
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#256bae]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/logo/car.svg"
                height={56}
                alt="logo"
                className="relative h-[56px] w-auto transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                style={{ height: "56px", width: "auto" }}
              />
            </div>
            <Link href="/" className="relative">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent hover:from-primary hover:to-[#256bae] transition-all duration-500 transform hover:scale-105">
                Petras Rental
              </h1>
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-[#256bae]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-4">
              {NAVIGATION_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="group relative">
                      <div className="flex items-center gap-2 text-base font-semibold text-foreground/90 hover:text-primary transition-all duration-300 transform hover:scale-105">
                        {/* Icon with gradient background */}
                        <div className="relative p-1.5 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/15 group-hover:to-[#256bae]/15 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="text-lg group-hover:text-primary transition-colors duration-300" />
                          {/* Icon glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#256bae]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                        </div>
                        <span className="relative">
                          {item.label}
                          {/* Enhanced underline effect */}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-[#256bae] transition-all duration-300 group-hover:w-full rounded-full"></span>
                          {/* Subtle text glow */}
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 to-[#256bae]/0 group-hover:from-primary/20 group-hover:to-[#256bae]/20 transition-all duration-300 blur-sm -z-10"></span>
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Flag Icons Language Selector */}
            <div className="relative group">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full bg-gradient-to-r from-muted/50 to-muted/30 hover:from-primary/15 hover:to-[#256bae]/15 border border-border/50 transition-all duration-300 hover:scale-110 group p-1"
                  >
                    <ReactCountryFlag
                      countryCode={currentLanguage.countryCode}
                      svg
                      style={{
                        width: "18px",
                        height: "14px",
                      }}
                      className="group-hover:scale-110 transition-transform duration-300 rounded-sm"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-14 mt-2 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl overflow-hidden p-1"
                >
                  {LANGUAGES.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center justify-center p-2 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary/10 group ${
                        language.code === locale ? "bg-primary/15" : ""
                      }`}
                    >
                      <ReactCountryFlag
                        countryCode={language.countryCode}
                        svg
                        style={{
                          width: "18px",
                          height: "14px",
                        }}
                        className="group-hover:scale-110 transition-transform duration-300 rounded-sm"
                      />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Simplified Contact Button */}
            <div className="relative">
              <Button
                onClick={handleContactClick}
                className="ml-3 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-[#256bae] hover:shadow-lg text-primary-foreground"
              >
                <IoSend className="text-base" />
                <span>Contact Us</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 hover:from-primary/15 hover:to-[#256bae]/15 transition-all duration-300 hover:scale-105 border border-border/50"
                >
                  <IoMenu className="text-xl" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 mt-2 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl"
              >
                {/* Mobile menu gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#256bae]/5 rounded-2xl"></div>

                <div className="relative">
                  {NAVIGATION_ITEMS.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <DropdownMenuItem key={item.href} asChild className="rounded-xl mx-2 my-1">
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 w-full p-2 hover:bg-primary/10 transition-all duration-300 group"
                        >
                          <div className="p-1.5 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/15 group-hover:to-[#256bae]/15 transition-all duration-300">
                            <IconComponent className="text-base group-hover:text-primary transition-colors duration-300" />
                          </div>
                          <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuItem asChild className="rounded-xl mx-2 my-1">
                    <button
                      onClick={handleContactClick}
                      className="flex items-center gap-2 w-full p-2 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="p-1.5 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/15 group-hover:to-[#256bae]/15 transition-all duration-300">
                        <IoSend className="text-base group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                        Contact Us
                      </span>
                    </button>
                  </DropdownMenuItem>

                  <div className="border-t border-border/50 mt-2 pt-2 mx-2">
                    <div className="px-2 py-1">
                      {/* Mobile Flag Icons Language Selector */}
                      <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-muted/30 to-muted/20">
                        <span className="text-xs font-medium text-muted-foreground">Language</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0.5 rounded-full">
                              <ReactCountryFlag
                                countryCode={currentLanguage.countryCode}
                                svg
                                style={{
                                  width: "14px",
                                  height: "10px",
                                }}
                                className="rounded-sm"
                              />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-12 p-1">
                            {LANGUAGES.map((language) => (
                              <DropdownMenuItem
                                key={language.code}
                                onClick={() => handleLanguageChange(language.code)}
                                className={`flex items-center justify-center p-1.5 rounded cursor-pointer ${
                                  language.code === locale ? "bg-primary/10" : ""
                                }`}
                              >
                                <ReactCountryFlag
                                  countryCode={language.countryCode}
                                  svg
                                  style={{
                                    width: "14px",
                                    height: "10px",
                                  }}
                                  className="rounded-sm"
                                />
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
