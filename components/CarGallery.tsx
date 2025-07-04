"use client";

import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface CarGalleryProps {
  images: string[];
  carName: string;
  selectedIndex: number;
  onImageSelect: (index: number) => void;
}

export const CarGallery = ({ images, carName, selectedIndex, onImageSelect }: CarGalleryProps) => {
  const nextImage = () => {
    onImageSelect((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    onImageSelect(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative group">
        <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={images[selectedIndex]}
            alt={`${carName} - Image ${selectedIndex + 1}`}
            fill
            className="object-cover"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <IoChevronBack className="text-xl text-slate-700" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <IoChevronForward className="text-xl text-slate-700" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              selectedIndex === index ? "border-primary shadow-md" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <Image src={image} alt={`${carName} thumbnail ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
