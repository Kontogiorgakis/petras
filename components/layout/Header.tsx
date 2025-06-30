"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container mx-auto">
        <nav className="flex h-14 items-center">
          <div className="flex-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/assets/imgs/logo.png" alt="Kratisix" width={32} height={32} />
            </Link>
          </div>
          <div className="flex-1">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
