"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { CarGallery } from "@/components/CarGallery";
import { CarFeatures } from "@/components/CarFeatures";
import { RentalTerms } from "@/components/RentalTerms";
import { IoSpeedometer, IoColorPalette, IoCar } from "react-icons/io5";
import { Car } from "@/types/car";

interface CarDetailsModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CarDetailsModal = ({ car, isOpen, onClose }: CarDetailsModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!car) return null;

  const carImages = [car.image, car.image, car.image, car.image];

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
            <div className="text-right">
              <div className="text-3xl font-bold text-slate-800">€{car.price}</div>
              <div className="text-sm text-slate-500">per day</div>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="h-[calc(95vh-140px)]">
          <div className="p-8 space-y-8">
            {/* Car Gallery */}
            <CarGallery
              images={carImages}
              carName={car.name}
              selectedIndex={selectedImageIndex}
              onImageSelect={setSelectedImageIndex}
            />

            {/* Car Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Features */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IoSpeedometer className="text-lg text-primary" />
                    </div>
                    Vehicle Specifications
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-500">Engine</span>
                      <span className="font-semibold text-slate-800">{car.features.cc}cc</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-500">Doors</span>
                      <span className="font-semibold text-slate-800">{car.features.doors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoColorPalette className="text-lg text-primary" />
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-500">Color</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-800">{car.color}</span>
                          <div
                            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
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
                                  : car.color.toLowerCase(),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-slate-500">Year</span>
                      <span className="font-semibold text-slate-800">{car.features.date}</span>
                    </div>
                  </div>
                </div>

                <CarFeatures car={car} />
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-6">
                {/* Rental Terms */}
                <RentalTerms />

                {/* Availability Status */}
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Availability</h3>
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full font-semibold ${
                      car.available
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {car.available ? "Available for Rental" : "Currently Rented"}
                  </div>
                  {car.available && (
                    <p className="text-slate-600 mt-3">
                      This vehicle is available for immediate rental. Contact us to book now!
                    </p>
                  )}
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-br from-primary/5 to-[#256bae]/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Ready to Rent?</h3>
                  <p className="text-slate-600 mb-4">
                    Contact us to reserve this vehicle or get more information about rental terms.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-primary to-[#256bae] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                      Book Now
                    </button>
                    <button className="flex-1 border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
