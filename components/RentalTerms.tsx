"use client";

import { IoDocumentText, IoCard, IoTime, IoShield, IoCheckmarkCircle, IoWarning } from "react-icons/io5";

export const RentalTerms = () => {
  const rentalConditions = [
    {
      icon: IoCard,
      title: "Driver Requirements",
      items: [
        "Valid driving license (minimum 1 year)",
        "Age 21+ (additional fees for under 25)",
        "Credit card for security deposit",
        "International license for non-EU residents",
      ],
    },
    {
      icon: IoTime,
      title: "Rental Terms",
      items: [
        "Minimum rental period: 24 hours",
        "Pick-up/drop-off times: 8 AM - 8 PM",
        "Late return fee: €20 per hour",
        "Free cancellation up to 24h before",
      ],
    },
    {
      icon: IoShield,
      title: "Insurance Coverage",
      items: [
        "Comprehensive insurance included",
        "Collision damage waiver available",
        "Theft protection included",
        "Third-party liability covered",
      ],
    },
  ];

  const importantNotes = [
    "Security deposit: €200-500 (varies by vehicle)",
    "Fuel policy: Return with same fuel level",
    "Mileage: Unlimited within Crete",
    "Additional driver fee: €10 per day",
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <IoDocumentText className="text-lg text-primary" />
        </div>
        Rental Terms & Conditions
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
              {condition.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                  <IoCheckmarkCircle className="text-green-500 text-base flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Important Notes */}
      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 rounded-xl">
        <h4 className="font-semibold text-slate-800 flex items-center gap-2 mb-3">
          <IoWarning className="text-amber-600 text-lg" />
          Important Notes
        </h4>
        <div className="space-y-2">
          {importantNotes.map((note, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-slate-700">
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
              <span>{note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Info */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-[#256bae]/5 rounded-xl border border-primary/10">
        <p className="text-sm text-slate-600">
          <strong className="text-slate-800">Need help?</strong> Our team is available daily (09:00-20:00) to assist you
          with your rental needs. Contact us for personalized service and special offers.
        </p>
      </div>
    </div>
  );
};
