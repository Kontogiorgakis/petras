import Fleet from "@/components/Fleet";
import carsData from "@/lib/data/cars.json";

export default function CarsPage() {
  return <Fleet cars={carsData} />;
}
