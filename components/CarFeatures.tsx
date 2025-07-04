"use client";

import {
  IoPeople,
  IoSettings,
  IoAccessibility,
  IoSnow,
  IoSpeedometer,
  IoCheckmarkCircle,
  IoExit,
} from "react-icons/io5";
import { Car } from "@/types/car";

interface CarFeaturesProps {
  car: Car;
}

export const CarFeatures = ({ car }: CarFeaturesProps) => {
  const features = [
    {
      icon: IoPeople,
      label: "Seating",
      value: `${car.features.seats} Passengers`,
      description: "Maximum seating capacity",
    },
    {
      icon: IoExit,
      label: "Access",
      value: `${car.features.doors} Doors`,
      description: "Entry and exit points",
    },
    {
      icon: IoSettings,
      label: "Transmission",
      value: car.features.transmission,
      description: "Gear system type",
    },
    {
      icon: IoAccessibility,
      label: "Fuel Type",
      value: car.features.fuel,
      description: "Engine fuel system",
    },
    {
      icon: IoSnow,
      label: "Climate Control",
      value: car.features.ac ? "Air Conditioning" : "No A/C",
      description: "Comfort features",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <IoSpeedometer className="text-lg text-primary" />
        </div>
        Features & Comfort
      </h3>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-white/80 rounded-xl border border-slate-200/30 hover:shadow-sm transition-all duration-300"
          >
            <div className="flex-shrink-0 p-2 bg-gradient-to-br from-primary/10 to-[#256bae]/10 rounded-lg">
              <feature.icon className="text-lg text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-800">{feature.value}</div>
              <div className="text-xs text-slate-500">{feature.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Specifications */}
      {car.specs && car.specs.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-4">Additional Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {car.specs.map((spec, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50/50 transition-colors duration-200"
              >
                <IoCheckmarkCircle className="text-green-500 text-lg flex-shrink-0" />
                <span className="text-slate-700">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-[#256bae]/5 rounded-xl border border-primary/10">
        <h4 className="font-semibold text-slate-800 mb-2">Performance Overview</h4>
        <div className="text-sm text-slate-600">
          This {car.category.toLowerCase()} offers excellent performance with its {car.features.cc}cc engine,
          {car.features.transmission.toLowerCase()} transmission, {car.features.doors}-door design and comfortable
          seating for {car.features.seats} passengers.
          {car.features.ac && " Climate control ensures a pleasant journey in any weather."}
        </div>
      </div>
    </div>
  );
};
