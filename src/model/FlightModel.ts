export interface IFlightData {
  flights: Flight[];
}

export interface Flight {
  originAirport: OriginAirport;
  destinationAirport: OriginAirport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: FareCategories;
}

export interface FareCategories {
  BUSINESS?: {
    subcategories: Subcategory[];
  };
  ECONOMY?: {
    subcategories: Subcategory[];
  };
}

interface Subcategory {
  brandCode: string;
  price: {
    amount: number;
    currency: string;
  };
  order: number;
  status: string;
  rights: string[];
}

interface OriginAirport {
  name: string;
  code: string;
  city: City;
  country: City;
}

interface City {
  code: string;
  name: string;
}
