import { ResultStatus } from "src/@types/ResultStatus";

export interface IFlightData {
  flights: IFlight[];
}

export interface IFlight {
  originAirport: IOriginAirport;
  destinationAirport: IOriginAirport;
  arrivalDateTimeDisplay: string;
  departureDateTimeDisplay: string;
  flightDuration: string;
  fareCategories: IFareCategories;
}

export interface IFareCategories {
  BUSINESS?: {
    subcategories: ISubCategory[];
  };
  ECONOMY?: {
    subcategories: ISubCategory[];
  };
}

interface ISubCategory {
  brandCode: string;
  price: {
    amount: number;
    currency: string;
  };
  order: number;
  status: ResultStatus;
  rights: string[];
}

interface IOriginAirport {
  name: string;
  code: string;
  city: ICity;
  country: ICity;
}

interface ICity {
  code: string;
  name: string;
}
