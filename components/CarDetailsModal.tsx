"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { RentalTerms } from "@/components/RentalTerms";
import { IoSpeedometer, IoColorPalette, IoCar } from "react-icons/io5";
import { Car } from "@/types/car";
import Link from "next/link";

interface CarDetailsModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CarDetailsModal = ({ car, isOpen, onClose }: CarDetailsModalProps) => {
  if (!car) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-6xl p-0 gap-0 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-3xl shadow-2xl max-h-[95vh]">
        <DialogHeader className="px-8 py-6 border-b border-slate-200/50 bg-gradient-to-r from-slate-50 to-white rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-primary to-[#256bae] rounded-xl text-white shadow-lg">
                <IoCar className="text-2xl" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-slate-800">{car.name}</DialogTitle>
                <DialogDescription className="text-slate-600 mt-1">
                  {car.category} - {car.features.date}
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(95vh-140px)]">
          <div className="p-8 space-y-6">
            {/* Car Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Small Image */}
              <div className="lg:col-span-1 space-y-4">
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-br from-primary/5 to-[#256bae]/5 border border-primary/20 rounded-2xl p-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Ready to Rent?</h3>
                  <p className="text-slate-600 mb-3 text-sm">
                    Contact us to reserve this vehicle or get more information.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/contact-us"
                      className="border border-primary text-primary px-4 py-2 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300 text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Features */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IoSpeedometer className="text-lg text-primary" />
                      </div>
                      Vehicle Specifications
                    </h3>

                    <div className="grid grid-cols-1 gap-6">
                      {/* Main specs in 2x2 grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-slate-100">
                          <span className="text-sm text-slate-500">Passengers</span>
                          <div className="text-lg font-semibold text-slate-800">{car.features.seats} seats</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-100">
                          <span className="text-sm text-slate-500">Transmission</span>
                          <div className="text-lg font-semibold text-slate-800">{car.features.transmission}</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-100">
                          <span className="text-sm text-slate-500">Fuel Type</span>
                          <div className="text-lg font-semibold text-slate-800">{car.features.fuel}</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-slate-100">
                          <span className="text-sm text-slate-500">Engine</span>
                          <div className="text-lg font-semibold text-slate-800">{car.features.cc}cc</div>
                        </div>
                      </div>

                      {/* Secondary specs */}
                      <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                        <div className="text-center">
                          <span className="text-sm text-slate-500">Doors</span>
                          <div className="text-lg font-semibold text-slate-800">{car.features.doors}</div>
                        </div>

                        <div className="text-center">
                          <span className="text-sm text-slate-500">Year</span>
                          <div className="text-lg font-semibold text-slate-800">{car.features.date}</div>
                        </div>

                        <div className="text-center">
                          <span className="text-sm text-slate-500">A/C</span>
                          <div className="text-lg font-semibold text-slate-800">{car.features.ac ? "Yes" : "No"}</div>
                        </div>
                      </div>

                      {/* Colors section */}
                      <div className="bg-white rounded-lg p-4 border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <IoColorPalette className="text-lg text-primary" />
                          <span className="text-sm text-slate-500">Available Colors</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-800">
                            {Array.isArray(car.color) ? car.color.join(" / ") : car.color}
                          </span>
                          {Array.isArray(car.color) ? (
                            <div className="flex gap-2">
                              {car.color.map((color, index) => (
                                <div
                                  key={index}
                                  className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                                  style={{
                                    backgroundColor:
                                      color.toLowerCase() === "silver"
                                        ? "#C0C0C0"
                                        : color.toLowerCase() === "grey"
                                        ? "#808080"
                                        : color.toLowerCase() === "yellow"
                                        ? "#FFD700"
                                        : color.toLowerCase() === "orange"
                                        ? "#FFA500"
                                        : color.toLowerCase() === "white"
                                        ? "#FFFFFF"
                                        : color.toLowerCase() === "black"
                                        ? "#000000"
                                        : color.toLowerCase() === "pencil"
                                        ? "#D3D3D3"
                                        : color.toLowerCase() === "sea"
                                        ? "#20B2AA"
                                        : color.toLowerCase(),
                                  }}
                                />
                              ))}
                            </div>
                          ) : (
                            <div
                              className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                              style={{
                                backgroundColor:
                                  car.color.toLowerCase() === "silver"
                                    ? "#C0C0C0"
                                    : car.color.toLowerCase() === "grey"
                                    ? "#808080"
                                    : car.color.toLowerCase() === "yellow"
                                    ? "#FFD700"
                                    : car.color.toLowerCase() === "orange"
                                    ? "#FFA500"
                                    : car.color.toLowerCase() === "white"
                                    ? "#FFFFFF"
                                    : car.color.toLowerCase() === "black"
                                    ? "#000000"
                                    : car.color.toLowerCase() === "pencil"
                                    ? "#D3D3D3"
                                    : car.color.toLowerCase() === "sea"
                                    ? "#20B2AA"
                                    : car.color.toLowerCase(),
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Additional Info */}
                <div className="space-y-6">
                  {/* Rental Terms */}
                  <RentalTerms />
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
