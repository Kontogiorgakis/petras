"use client";

import Image from "next/image";
import { IoPeople, IoSnow } from "react-icons/io5";
import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";
import { PiEngineBold } from "react-icons/pi";
import { useTranslations } from "next-intl";

import { BsFillFuelPumpFill } from "react-icons/bs";
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
  const t = useTranslations("carCard");
  const tData = useTranslations("carData");

  // Helper function to safely get translated values
  const getTranslatedValue = (namespace: string, key: string): string => {
    try {
      return (tData.raw(`${namespace}.${key}` as never) as string) || key;
    } catch {
      return key;
    }
  };

  return (
    <div onClick={() => onCarClick(car)} className="group cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
        {/* Car Image */}
        <div className="relative h-70 overflow-hidden">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Car Info */}
        <div className="p-5">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-slate-900 truncate mb-1">{car.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                {Array.isArray(car.color) ? (
                  <div className="flex items-center gap-1">
                    {car.color.map((colorName, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 rounded-full border border-slate-300"
                        style={{ backgroundColor: getColorValue(colorName) }}
                        title={colorName}
                      />
                    ))}
                    <span className="text-sm text-slate-500 ml-1">
                      {car.color.map((color) => getTranslatedValue("colors", color)).join(" / ")}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full border border-slate-300"
                      style={{ backgroundColor: getColorValue(car.color) }}
                      title={car.color}
                    />
                    <span className="text-sm text-slate-500">{getTranslatedValue("colors", car.color)}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="text-right ml-3">
              <div className="text-lg font-bold text-slate-800">{car.features.date}</div>
            </div>
          </div>

          {/* Key Features - Complete Grid */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
              <IoPeople className="text-lg text-primary mb-1" />
              <span className="text-xs font-medium text-slate-700">{car.features.seats}</span>
              <span className="text-xs text-slate-500">{t("labels.seats")}</span>
            </div>

            <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
              <BsFillFuelPumpFill className="text-lg text-primary mb-1" />
              <span className="text-xs font-medium text-slate-700">
                {getTranslatedValue("fuel", car.features.fuel)}
              </span>
              <span className="text-xs text-slate-500">{t("labels.fuel")}</span>
            </div>

            <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
              <GiGearStickPattern className="text-lg text-primary mb-1" />
              <span className="text-xs font-medium text-slate-700">
                {getTranslatedValue("transmission", car.features.transmission)}
              </span>
              <span className="text-xs text-slate-500">{t("labels.transmission")}</span>
            </div>

            <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
              <GiCarDoor className="text-lg text-primary mb-1" />
              <span className="text-xs font-medium text-slate-700">{car.features.doors}</span>
              <span className="text-xs text-slate-500">{t("labels.doors")}</span>
            </div>

            <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
              <PiEngineBold className="text-lg text-primary mb-1" />
              <span className="text-xs font-medium text-slate-700">{car.features.cc}cc</span>
              <span className="text-xs text-slate-500">{t("labels.engine")}</span>
            </div>

            {car.features.ac ? (
              <div className="flex flex-col items-center p-2 bg-slate-50 rounded-lg">
                <IoSnow className="text-lg text-primary mb-1" />
                <span className="text-xs font-medium text-slate-700">{t("labels.ac")}</span>
                <span className="text-xs text-slate-500">{t("labels.climate")}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center p-2 bg-slate-50/50 rounded-lg opacity-50">
                <IoSnow className="text-lg text-slate-400 mb-1" />
                <span className="text-xs font-medium text-slate-500">{t("labels.noAc")}</span>
                <span className="text-xs text-slate-400">{t("labels.climate")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
