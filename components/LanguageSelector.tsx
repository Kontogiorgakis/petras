"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { IoLanguage, IoChevronDown } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
] as const;

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const currentLanguage = LANGUAGES.find((lang) => lang.code === locale) || LANGUAGES[0];

  const handleLanguageChange = (langCode: string) => {
    // Replace the current locale in the pathname
    const segments = pathname.split("/");
    segments[1] = langCode; // Replace locale segment
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-3 py-2">
          <IoLanguage className="text-lg" />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
          <IoChevronDown className="text-sm" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 cursor-pointer ${language.code === locale ? "bg-primary/10" : ""}`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
