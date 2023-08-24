import { IFlightData } from "src/model/FlightModel";
import { IAppContextActionTypes } from "./actions";

export interface IAppContextState {
  flightData: IFlightData | undefined;
  loading: boolean;
}

export const appContextInitialStates: IAppContextState = {
  flightData: undefined,
  loading: false,
};

export const appContextReducer = (
  state: IAppContextState,
  action: IAppContextActionTypes
): IAppContextState => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.state,
      };
    }
    case "SET_FLIGHT_DATA": {
      return {
        ...state,
        flightData: action.flightData,
      };
    }

    default:
      return state;
  }
};
