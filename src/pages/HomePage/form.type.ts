import * as yup from "yup";

export type AirportSelectionFormType = {
  originAirport: string;
  destinationAirport: string;
};

export const airportSelectionFormDefaultValues: AirportSelectionFormType = {
  originAirport: "Istanbul Airport",
  destinationAirport: "Antalya Airport",
};

export const AirportSelectionFormSchema: yup.ObjectSchema<AirportSelectionFormType> =
  yup.object().shape({
    originAirport: yup.string().required(),
    destinationAirport: yup.string().required(),
  });
