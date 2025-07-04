"use client";

import { IoFunnel, IoClose, IoChevronDown, IoCheckmarkCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Car } from "@/types/car";

const CATEGORIES = ["All", "A-segment", "B-segment", "SUV", "Mini SUV"] as const;
const TRANSMISSIONS = ["All", "Manual", "Automatic"] as const;
const FUEL_TYPES = ["All", "Petrol", "Hybrid", "Diesel"] as const;
const SEATS_OPTIONS = ["All", "4", "5"] as const;
const DOORS_OPTIONS = ["All", "3", "5"] as const;
const AC_OPTIONS = ["All", "Yes", "No"] as const;
const YEAR_RANGES = [
  { label: "All", min: 0, max: Infinity },
  { label: "2025", min: 2025, max: 2025 },
  { label: "2024", min: 2024, max: 2024 },
  { label: "2022", min: 2022, max: 2022 },
  { label: "2020", min: 2020, max: 2020 },
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
  { label: "€20-35", min: 20, max: 35 },
  { label: "€36-50", min: 36, max: 50 },
  { label: "€51-70", min: 51, max: 70 },
  { label: "€71+", min: 71, max: Infinity },
] as const;

interface CarFiltersProps {
  cars: Car[];
  filteredCount: number;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTransmission: string;
  onTransmissionChange: (transmission: string) => void;
  selectedFuel: string;
  onFuelChange: (fuel: string) => void;
  selectedSeats: string;
  onSeatsChange: (seats: string) => void;
  selectedDoors: string;
  onDoorsChange: (doors: string) => void;
  selectedAC: string;
  onACChange: (ac: string) => void;
  selectedYear: string;
  onYearChange: (year: string) => void;
  selectedEngine: string;
  onEngineChange: (engine: string) => void;
  selectedPriceRange: string;
  onPriceRangeChange: (priceRange: string) => void;
  showAvailableOnly: boolean;
  onAvailableOnlyChange: (available: boolean) => void;
  filtersOpen: boolean;
  onFiltersToggle: () => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
}

export const CarFilters = ({
  cars,
  filteredCount,
  selectedCategory,
  onCategoryChange,
  selectedTransmission,
  onTransmissionChange,
  selectedFuel,
  onFuelChange,
  selectedSeats,
  onSeatsChange,
  selectedDoors,
  onDoorsChange,
  selectedAC,
  onACChange,
  selectedYear,
  onYearChange,
  selectedEngine,
  onEngineChange,
  selectedPriceRange,
  onPriceRangeChange,
  showAvailableOnly,
  onAvailableOnlyChange,
  filtersOpen,
  onFiltersToggle,
  onResetFilters,
  hasActiveFilters,
}: CarFiltersProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onFiltersToggle}
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
              onClick={onResetFilters}
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
          Showing <span className="font-semibold text-slate-900">{filteredCount}</span> of{" "}
          <span className="font-semibold text-slate-900">{cars.length}</span> vehicles
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
                    onClick={() => onCategoryChange(category)}
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
                    onClick={() => onSeatsChange(seats)}
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

            {/* Doors Filter */}
            <div>
              <h4 className="font-medium text-slate-800 mb-3 text-sm">Doors</h4>
              <div className="space-y-1">
                {DOORS_OPTIONS.map((doors) => (
                  <button
                    key={doors}
                    onClick={() => onDoorsChange(doors)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      selectedDoors === doors
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    {doors}
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
                    onClick={() => onFuelChange(fuel)}
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
                    onClick={() => onTransmissionChange(transmission)}
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
                    onClick={() => onACChange(ac)}
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
                    onClick={() => onYearChange(range.label)}
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
                    onClick={() => onEngineChange(range.label)}
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
                    onClick={() => onPriceRangeChange(range.label)}
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
                  onChange={(e) => onAvailableOnlyChange(e.target.checked)}
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
  );
};
