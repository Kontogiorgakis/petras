"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IoCarSport,
  IoPeople,
  IoSettings,
  IoAccessibility,
  IoSnow,
  IoCalendar,
  IoSpeedometer,
  IoCheckmarkCircle,
  IoFunnel,
  IoClose,
  IoChevronDown,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";
import carsData from "@/lib/data/cars.json";

const CATEGORIES = ["All", "Economy", "Compact", "Mid-size", "SUV"] as const;
const TRANSMISSIONS = ["All", "Manual", "Automatic"] as const;
const FUEL_TYPES = ["All", "Petrol", "Hybrid", "Diesel"] as const;
const SEATS_OPTIONS = ["All", "4", "5"] as const;
const DOORS_OPTIONS = ["All", "3", "5"] as const;
const AC_OPTIONS = ["All", "Yes", "No"] as const;
const YEAR_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "2023", min: 2023, max: 2023 },
  { label: "2022", min: 2022, max: 2022 },
  { label: "2021-2020", min: 2020, max: 2021 },
] as const;
const ENGINE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "< 1200cc", min: 0, max: 1200 },
  { label: "1200-1600cc", min: 1200, max: 1600 },
  { label: "1600-2000cc", min: 1600, max: 2000 },
  { label: "> 2000cc", min: 2000, max: Infinity },
] as const;
const PRICE_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "€20-30", min: 20, max: 30 },
  { label: "€31-45", min: 31, max: 45 },
  { label: "€46-60", min: 46, max: 60 },
  { label: "€61+", min: 61, max: Infinity },
] as const;

export default function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedSeats, setSelectedSeats] = useState("All");
  const [selectedDoors, setSelectedDoors] = useState("All");
  const [selectedAC, setSelectedAC] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedEngine, setSelectedEngine] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [selectedColors, setSelectedColors] = useState<{ [carId: number]: string }>({});
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filter cars based on selected criteria
  const filteredCars = carsData.filter((car) => {
    const categoryMatch = selectedCategory === "All" || car.category === selectedCategory;
    const transmissionMatch = selectedTransmission === "All" || car.features.transmission === selectedTransmission;
    const fuelMatch = selectedFuel === "All" || car.features.fuel === selectedFuel;
    const seatsMatch = selectedSeats === "All" || car.features.seats.toString() === selectedSeats;
    const doorsMatch = selectedDoors === "All" || car.features.doors.toString() === selectedDoors;
    const acMatch = selectedAC === "All" || (selectedAC === "Yes" ? car.features.ac : !car.features.ac);

    const yearRange = YEAR_RANGES.find((range) => range.label === selectedYear);
    const yearMatch = !yearRange || (car.features.date >= yearRange.min && car.features.date <= yearRange.max);

    const engineRange = ENGINE_RANGES.find((range) => range.label === selectedEngine);
    const engineMatch = !engineRange || (car.features.cc >= engineRange.min && car.features.cc <= engineRange.max);

    const priceRange = PRICE_RANGES.find((range) => range.label === selectedPriceRange);
    const priceMatch = !priceRange || (car.price >= priceRange.min && car.price <= priceRange.max);

    const availabilityMatch = !showAvailableOnly || car.available;

    return (
      categoryMatch &&
      transmissionMatch &&
      fuelMatch &&
      seatsMatch &&
      doorsMatch &&
      acMatch &&
      yearMatch &&
      engineMatch &&
      priceMatch &&
      availabilityMatch
    );
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedTransmission("All");
    setSelectedFuel("All");
    setSelectedSeats("All");
    setSelectedDoors("All");
    setSelectedAC("All");
    setSelectedYear("All");
    setSelectedEngine("All");
    setSelectedPriceRange("All");
    setShowAvailableOnly(false);
  };

  const handleColorSelect = (carId: number, color: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [carId]: color,
    }));
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedTransmission !== "All" ||
    selectedFuel !== "All" ||
    selectedSeats !== "All" ||
    selectedDoors !== "All" ||
    selectedAC !== "All" ||
    selectedYear !== "All" ||
    selectedEngine !== "All" ||
    selectedPriceRange !== "All" ||
    showAvailableOnly;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-slate-900">Our </span>
            <span className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 bg-clip-text text-transparent drop-shadow-sm">
              Fleet
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
            Choose from our extensive collection of premium vehicles, from economy cars to luxury SUVs
          </p>
        </div>

        {/* Dropdown Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 bg-white/95 backdrop-blur-xl border border-slate-200/80 px-4 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <IoFunnel className="text-slate-600" />
                <span className="text-sm font-medium text-slate-900">Filters</span>
                {hasActiveFilters && (
                  <span className="bg-slate-900 text-white text-xs px-2 py-0.5 rounded-full">
                    {[
                      selectedCategory,
                      selectedTransmission,
                      selectedFuel,
                      selectedSeats,
                      selectedDoors,
                      selectedAC,
                      selectedYear,
                      selectedEngine,
                      selectedPriceRange,
                    ].filter((f) => f !== "All").length + (showAvailableOnly ? 1 : 0)}
                  </span>
                )}
                <IoChevronDown
                  className={`text-slate-400 transition-transform duration-300 ${filtersOpen ? "rotate-180" : ""}`}
                />
              </button>

              {hasActiveFilters && (
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  size="sm"
                  className="text-xs border-slate-300 hover:bg-slate-50 text-slate-600"
                >
                  <IoClose className="w-3 h-3 mr-1" />
                  Reset All
                </Button>
              )}
            </div>

            <p className="text-slate-600">
              Showing <span className="font-semibold text-slate-900">{filteredCars.length}</span> of{" "}
              <span className="font-semibold text-slate-900">{carsData.length}</span> vehicles
            </p>
          </div>

          {filtersOpen && (
            <div className="bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-6 shadow-xl shadow-slate-200/20 animate-in slide-in-from-top-2 duration-300">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Category</h4>
                  <div className="space-y-1">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedCategory === category
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seats Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Seats</h4>
                  <div className="space-y-1">
                    {SEATS_OPTIONS.map((seats) => (
                      <button
                        key={seats}
                        onClick={() => setSelectedSeats(seats)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedSeats === seats
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {seats}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Fuel Type</h4>
                  <div className="space-y-1">
                    {FUEL_TYPES.map((fuel) => (
                      <button
                        key={fuel}
                        onClick={() => setSelectedFuel(fuel)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedFuel === fuel
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {fuel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transmission Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Transmission</h4>
                  <div className="space-y-1">
                    {TRANSMISSIONS.map((transmission) => (
                      <button
                        key={transmission}
                        onClick={() => setSelectedTransmission(transmission)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedTransmission === transmission
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {transmission}
                      </button>
                    ))}
                  </div>
                </div>

                {/* A/C Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Air Conditioning</h4>
                  <div className="space-y-1">
                    {AC_OPTIONS.map((ac) => (
                      <button
                        key={ac}
                        onClick={() => setSelectedAC(ac)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedAC === ac
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {ac}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Model Year</h4>
                  <div className="space-y-1">
                    {YEAR_RANGES.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedYear(range.label)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedYear === range.label
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Engine Size Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Engine Size</h4>
                  <div className="space-y-1">
                    {ENGINE_RANGES.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedEngine(range.label)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedEngine === range.label
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Price Range</h4>
                  <div className="space-y-1">
                    {PRICE_RANGES.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPriceRange(range.label)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          selectedPriceRange === range.label
                            ? "bg-slate-900 text-white shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="md:col-span-3 lg:col-span-4 xl:col-span-5">
                  <h4 className="font-medium text-slate-800 mb-3 text-sm">Availability</h4>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showAvailableOnly}
                      onChange={(e) => setShowAvailableOnly(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                        showAvailableOnly ? "bg-slate-900 border-slate-900" : "border-slate-300"
                      }`}
                    >
                      {showAvailableOnly && <IoCheckmarkCircle className="text-white text-sm" />}
                    </div>
                    <span className="text-sm font-medium text-slate-800">Show available cars only</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cars Grid - 3x3 Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="group">
              <div
                className={`relative bg-white/95 backdrop-blur-xl border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
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

                {/* Color selector */}
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  {car.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(car.id, color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                        selectedColors[car.id] === color || (!selectedColors[car.id] && color === car.colors[0])
                          ? "border-white shadow-lg scale-110"
                          : "border-white/60 hover:border-white"
                      }`}
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
                            : color.toLowerCase(),
                      }}
                      title={color}
                    />
                  ))}
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
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">
                        {car.name}
                      </h3>
                      <p className="text-sm text-slate-500">{car.category}</p>
                      <p className="text-xs text-slate-400 mt-1">
                        {selectedColors[car.id] || car.colors[0]} • {car.features.date}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-slate-800">€{car.price}</div>
                      <div className="text-xs text-slate-500">per day</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <IoPeople className="text-slate-500" />
                      <span>{car.features.seats} seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <IoSettings className="text-slate-500" />
                      <span>{car.features.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <IoAccessibility className="text-slate-500" />
                      <span>{car.features.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <IoSnow className="text-slate-500" />
                      <span>{car.features.ac ? "A/C" : "No A/C"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <IoCarSport className="text-slate-500" />
                      <span>{car.features.doors} doors</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <IoSpeedometer className="text-slate-500" />
                      <span>{car.features.cc}cc</span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {car.specs.slice(0, 3).map((spec, index) => (
                        <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                      {car.specs.length > 3 && (
                        <span className="text-xs text-slate-500">+{car.specs.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Animated underline */}
                  <div className="w-0 h-0.5 bg-slate-700 mx-auto group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <IoCarSport className="text-3xl text-slate-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No vehicles found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your filters to see more options</p>
            <Button onClick={resetFilters} className="bg-slate-900 hover:bg-slate-800 text-white">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
