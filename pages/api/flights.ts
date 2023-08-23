import { NextApiRequest, NextApiResponse } from "next";

import { IFlightData } from "src/model/FlightModel";
import flights from "./flights.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IFlightData>
) {
  res.status(200).json(flights);
}
