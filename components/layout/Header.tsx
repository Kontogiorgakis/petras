"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { IoCarSport, IoPeople, IoSend, IoMenu, IoDocumentText, IoHome } from "react-icons/io5";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";

const NAVIGATION_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: IoHome,
  },
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
  { code: "en", name: "English", shortName: "EN" },
  { code: "el", name: "Ελληνικά", shortName: "GR" },
  { code: "fr", name: "Français", shortName: "FR" },
  { code: "de", name: "Deutsch", shortName: "DE" },
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isMounted ? "animate-fade-in-down" : ""}`}>
      {/* Clean Background */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 group">
            <div className="relative ">
              <Image src="/logo/logo.png" height={60} width={60} alt="logo" className="object-contain" />
            </div>
            <Link href="/" className="text-base">
              <h1 className="bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent text-2xl font-bold">
                Car Rental Petras
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAVIGATION_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="group relative">
                      <div className="flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-300">
                        <div className="p-1.5 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                          <IconComponent className="text-lg group-hover:text-primary transition-colors duration-300" />
                        </div>
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Language Selector */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 px-3 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/50 transition-colors duration-300 text-xs font-medium"
                  >
                    {currentLanguage.shortName}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-32 mt-2 bg-background/95 backdrop-blur-xl border border-border/50 shadow-lg rounded-xl overflow-hidden p-1"
                >
                  {LANGUAGES.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center justify-start p-2 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-primary/10 ${
                        language.code === locale ? "bg-primary/15" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">{language.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Contact Button */}
            <div className="ml-4">
              <Button
                onClick={handleContactClick}
                className="px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 transition-colors duration-300 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <IoSend className="text-base" />
                <span>Contact Us</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors duration-300 border border-border/50"
                >
                  <IoMenu className="text-xl" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 mt-2 bg-background/95 backdrop-blur-xl border border-border/50 shadow-lg rounded-xl"
              >
                <div className="p-2">
                  {NAVIGATION_ITEMS.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <DropdownMenuItem key={item.href} asChild className="rounded-lg my-1">
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 w-full p-2 hover:bg-primary/10 transition-colors duration-300 group"
                        >
                          <div className="p-1.5 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                            <IconComponent className="text-base group-hover:text-primary transition-colors duration-300" />
                          </div>
                          <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuItem asChild className="rounded-lg my-1">
                    <button
                      onClick={handleContactClick}
                      className="flex items-center gap-3 w-full p-2 hover:bg-primary/10 transition-colors duration-300 group"
                    >
                      <div className="p-1.5 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                        <IoSend className="text-base group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                        Contact Us
                      </span>
                    </button>
                  </DropdownMenuItem>

                  <div className="border-t border-border/50 mt-2 pt-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                      <span className="text-xs font-medium text-muted-foreground">Language</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs font-medium rounded-full">
                            {currentLanguage.shortName}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32 p-1">
                          {LANGUAGES.map((language) => (
                            <DropdownMenuItem
                              key={language.code}
                              onClick={() => handleLanguageChange(language.code)}
                              className={`flex items-center justify-start p-1.5 rounded cursor-pointer transition-colors duration-300 ${
                                language.code === locale ? "bg-primary/10" : ""
                              }`}
                            >
                              <span className="text-sm font-medium">{language.name}</span>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
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
