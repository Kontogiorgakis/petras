import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>{t("title")}</h1>
    </div>
  );
}
