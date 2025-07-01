import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "./ThemeProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlClientProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
