import axios, { AxiosInstance } from "axios";
import { apiRoutes } from "src/constants/routes";
import { IFlightData } from "src/model/FlightModel";
import { notifyError } from "src/utils/notification";

class ApiClient {
  axiosApi: AxiosInstance;

  constructor() {
    const axiosApi = axios.create({
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      timeout: 20000,
    });

    axiosApi.interceptors.response.use(
      (response) => response,
      (error) => {
        notifyError(error.response.data);
        return error;
      }
    );

    this.axiosApi = axiosApi;
  }

  fetchFlights = async (): Promise<IFlightData | null> => {
    const response = await this.axiosApi.get<IFlightData>(apiRoutes.flights);

    return response?.data;
  };
}

export { ApiClient };
