import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useRouter } from "next/router";

import { PassengerClass } from "src/@types/PassengerClass";
import { H3, H4, P } from "src/components/Typography";
import Button from "src/components/Button";
import { IFlight } from "src/model/FlightModel";
import { routes } from "src/constants/routes";
import { ResultPageQueryParams } from "src/pages/ResultPage";
import { ResultStatus } from "src/@types/ResultStatus";

import * as S from "./styled";

type Props = {
  flightData: IFlight;
  index: number;
  isSelectedFlight: boolean;
  handleSelectFlight: (index: number) => void;
  promoCodeCheck: boolean;
};

const FlighListItem: React.FC<Props> = ({
  flightData,
  isSelectedFlight,
  handleSelectFlight,
  index,
  promoCodeCheck,
}) => {
  const router = useRouter();
  const { passengerCount } = router.query;

  const {
    arrivalDateTimeDisplay,
    departureDateTimeDisplay,
    flightDuration,
    originAirport,
    destinationAirport,
    fareCategories,
  } = flightData;

  const [selectedPassengerClass, setSelectedPassengerClass] =
    useState<PassengerClass | null>(null);

  const selectedFareCategory = selectedPassengerClass
    ? fareCategories[selectedPassengerClass]
    : undefined;

  useEffect(() => {
    if (!isSelectedFlight) {
      setSelectedPassengerClass(null);
    }
  }, [isSelectedFlight]);

  const handleChange =
    (selectedClass: PassengerClass) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedPassengerClass(selectedClass);
    };

  const handleOnSelectFlight = () => handleSelectFlight(index);

  const getEcoFlyCalculatedPrice = (price: number) => {
    if (promoCodeCheck) {
      return price / 2;
    }

    return price;
  };

  const onSubmit = (status: ResultStatus, price: number) => (e: any) => {
    if (status === ResultStatus.AVAILABLE) {
      const calculatedPricePerPassenger = promoCodeCheck ? price / 2 : price;
      const totalPrice = Number(passengerCount) * calculatedPricePerPassenger;

      router.push({
        pathname: routes.result,
        query: { status, price: totalPrice } as ResultPageQueryParams,
      });
    } else {
      router.push({
        pathname: routes.result,
        query: { status } as ResultPageQueryParams,
      });
    }
  };

  return (
    <S.FlighListItem>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <S.FlightInformation>
            <div>
              <H3>{arrivalDateTimeDisplay}</H3>
              <H3>{originAirport.city.code}</H3>
              <P>{originAirport.city.name}</P>
            </div>
            <span />
            <div>
              <H3>{departureDateTimeDisplay}</H3>
              <H3>{destinationAirport.city.code}</H3>
              <P>{destinationAirport.city.name}</P>
            </div>
            <div>
              <P>Uçuş Süresi</P>
              <H4>{flightDuration}</H4>
            </div>
          </S.FlightInformation>
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadioGroup
            value={selectedPassengerClass}
            onChange={handleOnSelectFlight}
          >
            <Grid container alignItems="stretch" spacing={2}>
              <Grid item xs={12} sm={6}>
                <S.FlightClass>
                  <FormControlLabel
                    value={PassengerClass.Economy}
                    control={
                      <Radio onChange={handleChange(PassengerClass.Economy)} />
                    }
                    label="ECONOMY"
                  />
                  <S.FlightPrice>
                    <P>Yolcu başına</P>
                    <H4>
                      TRY{" "}
                      {getEcoFlyCalculatedPrice(
                        fareCategories.ECONOMY?.subcategories[0].price.amount!
                      )}
                    </H4>
                  </S.FlightPrice>
                </S.FlightClass>
              </Grid>
              <Grid item xs={12} sm={6}>
                <S.FlightClass>
                  <FormControlLabel
                    value={PassengerClass.Business}
                    control={
                      <Radio onChange={handleChange(PassengerClass.Business)} />
                    }
                    label="BUSINESS"
                  />
                  <S.FlightPrice>
                    <P>Yolcu başına</P>
                    <H4>
                      TRY{" "}
                      {getEcoFlyCalculatedPrice(
                        fareCategories.BUSINESS?.subcategories[0].price.amount!
                      )}
                    </H4>
                  </S.FlightPrice>
                </S.FlightClass>
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
      </Grid>
      {selectedFareCategory && isSelectedFlight && (
        <S.FlightPriceTable>
          <ArrowDropUpIcon />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>EcoFly</H3>
                  <H3>
                    <sup>TRY</sup>{" "}
                    {getEcoFlyCalculatedPrice(
                      selectedFareCategory.subcategories[0].price.amount
                    )}
                  </H3>
                </div>
                <div>
                  {selectedFareCategory.subcategories[0].rights.map((right) => (
                    <P>{right}</P>
                  ))}
                </div>
                <Button
                  onClick={onSubmit(
                    selectedFareCategory.subcategories[0].status,
                    selectedFareCategory.subcategories[0].price.amount
                  )}
                >
                  Uçuşunu Seç
                </Button>
              </S.FlightPriceTableItem>
            </Grid>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>ExtraFly</H3>
                  <H3>
                    <sup>TRY</sup>{" "}
                    {selectedFareCategory.subcategories[1].price.amount}
                  </H3>
                </div>
                <div>
                  {selectedFareCategory.subcategories[1].rights.map((right) => (
                    <P>{right}</P>
                  ))}
                </div>
                <Button
                  onClick={onSubmit(
                    selectedFareCategory.subcategories[1].status,
                    selectedFareCategory.subcategories[1].price.amount
                  )}
                  disabled={promoCodeCheck}
                >
                  Uçuşunu Seç
                </Button>
              </S.FlightPriceTableItem>
            </Grid>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>PrimeFly</H3>
                  <H3>
                    <sup>TRY</sup>{" "}
                    {selectedFareCategory.subcategories[2].price.amount}
                  </H3>
                </div>
                <div>
                  {selectedFareCategory.subcategories[2].rights.map((right) => (
                    <P>{right}</P>
                  ))}
                </div>
                <Button
                  onClick={onSubmit(
                    selectedFareCategory.subcategories[2].status,
                    selectedFareCategory.subcategories[2].price.amount
                  )}
                  disabled={promoCodeCheck}
                >
                  Uçuşunu Seç
                </Button>
              </S.FlightPriceTableItem>
            </Grid>
          </Grid>
        </S.FlightPriceTable>
      )}
    </S.FlighListItem>
  );
};

export default FlighListItem;
