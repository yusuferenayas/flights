import { useContext } from "react";
import { appContext } from "src/store/provider";
import { convertHoursToDate } from "src/utils/date";

export type SortByType = "price" | "date";

export const useFlightsData = () => {
  const {
    contextState: { flightData },
  } = useContext(appContext);

  const getFlightsByLocationsSorted = (params: {
    originAirport: string;
    destinationAirport: string;
    sortBy: SortByType;
  }) => {
    const filteredFlights = flightData?.flights.filter(
      (flight) =>
        flight.originAirport.name === params.originAirport &&
        flight.destinationAirport.name === params.destinationAirport
    );

    if (filteredFlights) {
      if (params.sortBy === "price") {
        return filteredFlights.sort(
          (flightA, flightB) =>
            (flightA.fareCategories?.ECONOMY?.subcategories[0]?.price?.amount ||
              0) -
            (flightB.fareCategories?.ECONOMY?.subcategories[0]?.price?.amount ||
              0)
        );
      } else {
        return filteredFlights.sort(
          (flightA, flightB) =>
            convertHoursToDate(flightA.arrivalDateTimeDisplay) -
            convertHoursToDate(flightB.arrivalDateTimeDisplay)
        );
      }
    }
  };

  const checkRoutesValid = (params: {
    originAirport: string;
    destinationAirport: string;
  }) => {
    const originIndex = flightData?.flights.findIndex(
      ({ originAirport }) => originAirport.name === params.originAirport
    );

    const destinatioIndex = flightData?.flights.findIndex(
      ({ destinationAirport }) =>
        destinationAirport.name === params.destinationAirport
    );

    if (originIndex !== -1 && destinatioIndex !== -1) {
      return true;
    }

    return false;
  };

  return {
    checkRoutesValid,
    getFlightsByLocationsSorted,
  };
};
