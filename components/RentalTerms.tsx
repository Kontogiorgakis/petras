"use client";

import { IoDocumentText, IoCard, IoTime, IoShield, IoCheckmarkCircle, IoWarning } from "react-icons/io5";
import { useTranslations } from "next-intl";

export const RentalTerms = () => {
  const t = useTranslations("rentalTerms");

  const rentalConditions = [
    {
      icon: IoCard,
      title: t("sections.driverRequirements.title"),
      sectionKey: "driverRequirements",
    },
    {
      icon: IoTime,
      title: t("sections.rentalTerms.title"),
      sectionKey: "rentalTerms",
    },
    {
      icon: IoShield,
      title: t("sections.insurance.title"),
      sectionKey: "insurance",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <IoDocumentText className="text-lg text-primary" />
        </div>
        {t("title")}
      </h3>

      {/* Rental Conditions */}
      <div className="space-y-6 mb-6">
        {rentalConditions.map((condition, index) => (
          <div key={index} className="space-y-3">
            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
              <condition.icon className="text-primary text-lg" />
              {condition.title}
            </h4>
            <div className="grid grid-cols-1 gap-2 ml-6">
              {Array.from({ length: 4 })
                .map((_, itemIndex) => {
                  const itemKey = `sections.${condition.sectionKey}.items.${itemIndex}`;
                  try {
                    const item = t.raw(itemKey as never) as string;
                    return (
                      <div key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <IoCheckmarkCircle className="text-green-500 text-base flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    );
                  } catch {
                    return null;
                  }
                })
                .filter(Boolean)}
            </div>
          </div>
        ))}
      </div>

      {/* Important Notes */}
      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl">
        <h4 className="font-semibold text-slate-800 flex items-center gap-2 mb-3">
          <IoWarning className="text-amber-600 text-lg" />
          {t("importantNotes.title")}
        </h4>
        <div className="space-y-2">
          {Array.from({ length: 4 })
            .map((_, index) => {
              try {
                const note = t.raw(`importantNotes.items.${index}` as never) as string;
                return (
                  <div key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span>{note}</span>
                  </div>
                );
              } catch {
                return null;
              }
            })
            .filter(Boolean)}
        </div>
      </div>

      {/* Quick Info */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-[#256bae]/5 rounded-xl border border-primary/10">
        <p className="text-sm text-slate-600">
          <strong className="text-slate-800">{t("quickInfo.title")}</strong> {t("quickInfo.description")}
        </p>
      </div>
    </div>
  );
};
