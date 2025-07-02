import "./globals.css";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { Providers } from "@/components/Providers";
import { BaseLayoutProps } from "@/types/pageprops";
import Header from "@/components/layout/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function MainLayout({ children, params }: BaseLayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
