import { IFlightData } from "src/model/FlightModel";

export type IAppContextActionTypes =
  | {
      type: "SET_LOADING";
      state: boolean;
    }
  | {
      type: "SET_FLIGHT_DATA";
      flightData: IFlightData;
    };

export const setLoading = (state: boolean): IAppContextActionTypes => ({
  type: "SET_LOADING",
  state,
});

export const setFlightData = (
  flightData: IFlightData
): IAppContextActionTypes => ({
  type: "SET_FLIGHT_DATA",
  flightData,
});
