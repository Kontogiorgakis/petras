export interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  color: string;
  features: {
    seats: number;
    fuel: string;
    transmission: string;
    ac: boolean;
    date: number;
    doors: number;
    cc: number;
  };
  specs: string[];
  available: boolean;
}
