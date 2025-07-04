"use client";

import { useState, useMemo } from "react";
import { CarCard } from "./CarCard";
import { CarFilters } from "./CarFilters";
import { CarDetailsModal } from "./CarDetailsModal";
import { Car } from "@/types/car";

interface FleetProps {
  cars: Car[];
}

const Fleet = ({ cars }: FleetProps) => {
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
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter cars based on selected criteria
  const filteredCars = useMemo(() => {
    const YEAR_RANGES = [
      { label: "All", min: 0, max: Infinity },
      { label: "2025", min: 2025, max: 2025 },
      { label: "2024", min: 2024, max: 2024 },
      { label: "2022", min: 2022, max: 2022 },
      { label: "2020", min: 2020, max: 2020 },
    ];
    const ENGINE_RANGES = [
      { label: "All", min: 0, max: Infinity },
      { label: "< 1200cc", min: 0, max: 1200 },
      { label: "1200-1600cc", min: 1200, max: 1600 },
      { label: "1600-2000cc", min: 1600, max: 2000 },
      { label: "> 2000cc", min: 2000, max: Infinity },
    ];
    const PRICE_RANGES = [
      { label: "All", min: 0, max: Infinity },
      { label: "€20-35", min: 20, max: 35 },
      { label: "€36-50", min: 36, max: 50 },
      { label: "€51-70", min: 51, max: 70 },
      { label: "€71+", min: 71, max: Infinity },
    ];

    return cars.filter((car) => {
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
  }, [
    cars,
    selectedCategory,
    selectedTransmission,
    selectedFuel,
    selectedSeats,
    selectedDoors,
    selectedAC,
    selectedYear,
    selectedEngine,
    selectedPriceRange,
    showAvailableOnly,
  ]);

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

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-slate-900">Our </span>
            <span className="bg-gradient-to-r from-primary via-[#256bae] to-primary bg-clip-text text-transparent drop-shadow-sm">
              Fleet
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
            Choose from our extensive collection of premium vehicles, from economy cars to luxury SUVs
          </p>
        </div>

        {/* Dropdown Filters */}
        <CarFilters
          cars={cars}
          filteredCount={filteredCars.length}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedTransmission={selectedTransmission}
          onTransmissionChange={setSelectedTransmission}
          selectedFuel={selectedFuel}
          onFuelChange={setSelectedFuel}
          selectedSeats={selectedSeats}
          onSeatsChange={setSelectedSeats}
          selectedDoors={selectedDoors}
          onDoorsChange={setSelectedDoors}
          selectedAC={selectedAC}
          onACChange={setSelectedAC}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          selectedEngine={selectedEngine}
          onEngineChange={setSelectedEngine}
          selectedPriceRange={selectedPriceRange}
          onPriceRangeChange={setSelectedPriceRange}
          showAvailableOnly={showAvailableOnly}
          onAvailableOnlyChange={setShowAvailableOnly}
          filtersOpen={filtersOpen}
          onFiltersToggle={() => setFiltersOpen(!filtersOpen)}
          onResetFilters={resetFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Cars Grid - 3x3 Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => <CarCard key={car.id} car={car} onCarClick={handleCarClick} />)
          ) : (
            <div className="md:col-span-2 lg:col-span-3 text-center py-20">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No cars found</h3>
              <p className="text-slate-600">Try adjusting your filters to see more options.</p>
            </div>
          )}
        </div>
      </div>

      {/* Car Details Modal */}
      <CarDetailsModal car={selectedCar} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Fleet;
