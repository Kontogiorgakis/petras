"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoCarSport, IoPeople, IoSend, IoMenu, IoDocumentText, IoStar } from "react-icons/io5";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import LanguageSelector from "../LanguageSelector";

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

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-br from-[#256bae]/10 to-primary/10 rounded-full blur-2xl opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo and Brand */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#256bae]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src="/logo/car.svg"
                height={70}
                alt="logo"
                className="relative h-[70px] w-auto transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                style={{ height: "70px", width: "auto" }}
              />
            </div>
            <Link href="/" className="relative">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent hover:from-primary hover:to-[#256bae] transition-all duration-500 transform hover:scale-105">
                Petras Rental
              </h1>
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-[#256bae]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAVIGATION_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="group relative">
                      <div className="flex items-center gap-2 text-lg font-semibold text-foreground/90 hover:text-primary transition-all duration-300 transform hover:scale-105">
                        {/* Icon with gradient background */}
                        <div className="relative p-2 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/15 group-hover:to-[#256bae]/15 transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="text-xl group-hover:text-primary transition-colors duration-300" />
                          {/* Icon glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-[#256bae]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
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

            {/* Enhanced Language Selector */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-[#256bae]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              <div className="relative">
                <LanguageSelector />
              </div>
            </div>

            {/* Enhanced Contact Button */}
            <div className="relative group">
              {/* Button glow background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[#256bae] to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <Button
                onClick={handleContactClick}
                className="relative ml-4 px-8 py-3 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden bg-gradient-to-r from-primary to-[#256bae] hover:from-[#256bae] hover:to-primary text-primary-foreground shadow-xl border border-primary/20"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon with enhanced styling */}
                <div className="relative p-1 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <IoSend className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="relative font-bold">Contact Us</span>

                {/* Floating sparkle effect */}
                <div className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
                  className="h-12 w-12 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 hover:from-primary/15 hover:to-[#256bae]/15 transition-all duration-300 hover:scale-105 border border-border/50"
                >
                  <IoMenu className="text-2xl" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 mt-2 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl"
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
                          className="flex items-center gap-3 w-full p-3 hover:bg-primary/10 transition-all duration-300 group"
                        >
                          <div className="p-2 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/15 group-hover:to-[#256bae]/15 transition-all duration-300">
                            <IconComponent className="text-lg group-hover:text-primary transition-colors duration-300" />
                          </div>
                          <span className="font-medium group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuItem asChild className="rounded-xl mx-2 my-1">
                    <button
                      onClick={handleContactClick}
                      className="flex items-center gap-3 w-full p-3 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 group-hover:from-primary/15 group-hover:to-[#256bae]/15 transition-all duration-300">
                        <IoSend className="text-lg group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors duration-300">
                        Contact Us
                      </span>
                    </button>
                  </DropdownMenuItem>
                  <div className="border-t border-border/50 mt-2 pt-2 mx-2">
                    <div className="px-2 py-3">
                      <LanguageSelector />
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
