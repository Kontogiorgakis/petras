import { ReactNode } from "react";

export type Locale = "en" | "el";

export interface BasePageProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export interface BaseLayoutProps extends BasePageProps {
  children?: ReactNode;
}
