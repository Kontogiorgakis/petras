"use client";

import Image from "next/image";
import { IoPeople, IoSettings, IoAccessibility, IoSnow, IoSpeedometer, IoExit } from "react-icons/io5";
import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
  onCarClick: (car: Car) => void;
}

const getColorValue = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    silver: "#C0C0C0",
    grey: "#808080",
    gray: "#808080",
    yellow: "#FFD700",
    orange: "#FFA500",
    white: "#FFFFFF",
    black: "#000000",
    red: "#FF0000",
    blue: "#0000FF",
    green: "#008000",
    pencil: "#D3D3D3", // Light gray for pencil color
    sea: "#20B2AA", // Sea green/teal color
  };

  return colorMap[colorName.toLowerCase()] || colorName.toLowerCase();
};

export const CarCard = ({ car, onCarClick }: CarCardProps) => {
  return (
    <div className="group">
      <div
        onClick={() => onCarClick(car)}
        className={`relative bg-white/95 backdrop-blur-xl border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${
          car.available ? "border-slate-200/80 hover:border-slate-300" : "border-red-200/60 opacity-75"
        }`}
      >
        {/* Availability Badge */}
        <div
          className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
            car.available
              ? "bg-green-500/20 text-green-700 border border-green-500/30"
              : "bg-red-500/20 text-red-700 border border-red-500/30"
          }`}
        >
          {car.available ? "Available" : "Rented"}
        </div>

        {/* Car Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Car Info */}
        <div className="relative p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">
                {car.name}
              </h3>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-md text-slate-500">{car.category}</p>
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: getColorValue(car.color) }}
                  title={car.color}
                />
              </div>
              <p className="text-md text-slate-400">{car.features.date}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-2xl font-bold text-slate-800">€{car.price}</div>
              <div className="text-xs text-slate-500">per day</div>
            </div>
          </div>

          {/* Enhanced Features Section */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wide">Key Features</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/50 hover:shadow-sm transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <IoPeople className="text-lg text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{car.features.seats} Seats</div>
                  <div className="text-xs text-slate-500">Passenger capacity</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/50 hover:shadow-sm transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <IoExit className="text-lg text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{car.features.doors} Doors</div>
                  <div className="text-xs text-slate-500">Entry points</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/50 hover:shadow-sm transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <IoSettings className="text-lg text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{car.features.transmission}</div>
                  <div className="text-xs text-slate-500">Transmission</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/50 hover:shadow-sm transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <IoAccessibility className="text-lg text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{car.features.fuel}</div>
                  <div className="text-xs text-slate-500">Fuel type</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/50 hover:shadow-sm transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <IoSnow className="text-lg text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{car.features.ac ? "A/C" : "No A/C"}</div>
                  <div className="text-xs text-slate-500">Climate control</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl border border-slate-200/50 hover:shadow-sm transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <IoSpeedometer className="text-lg text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{car.features.cc}cc</div>
                  <div className="text-xs text-slate-500">Engine size</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated underline */}
          <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-[#256bae] mx-auto group-hover:w-16 transition-all duration-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
