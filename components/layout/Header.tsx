"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoCarSport, IoImages, IoPeople, IoSend, IoMenu } from "react-icons/io5";
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
    <nav
      className={`fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 border-b border-border transition-all duration-500 ${
        isMounted ? "animate-fade-in-down" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img src="/logo/car.svg" height={70} alt="logo" className="h-[70px] w-auto" />
            <Link href="/" className="text-3xl font-bold text-foreground hover:text-primary transition-colors">
              Petras Rental
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NAVIGATION_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="group">
                      <div className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors">
                        <IconComponent className="text-xl" />
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Contact Button */}
            <Button
              onClick={handleContactClick}
              className="ml-4 px-6 py-3 rounded-full shadow-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg flex items-center gap-2 transition-all duration-300 hover:shadow-xl"
            >
              <IoSend className="text-lg" />
              <span>Contact Us</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <IoMenu className="text-2xl" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 mt-2">
                {NAVIGATION_ITEMS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="flex items-center gap-3 w-full">
                        <IconComponent className="text-lg" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuItem asChild>
                  <button onClick={handleContactClick} className="flex items-center gap-3 w-full">
                    <IoSend className="text-lg" />
                    <span className="font-medium">Contact Us</span>
                  </button>
                </DropdownMenuItem>
                <div className="border-t border-border mt-2 pt-2">
                  <div className="px-2 py-1">
                    <LanguageSelector />
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
