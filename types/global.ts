import { routing } from "@/lib/i18n/routing";
import messages from "@/lib/messages/en.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
