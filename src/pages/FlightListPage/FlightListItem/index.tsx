import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { PassengerClass } from "src/@types/PassengerClass";
import { H3, H4, P } from "src/components/Typography";
import Button from "src/components/Button";
import { IFlight } from "src/model/FlightModel";

import * as S from "./styled";

type Props = {
  flightData: IFlight;
  index: number;
  isSelectedFlight: boolean;
  handleSelectFlight: (index: number) => void;
};

const FlighListItem: React.FC<Props> = ({
  flightData,
  isSelectedFlight,
  handleSelectFlight,
  index,
}) => {
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

  const handleChange =
    (selectedClass: PassengerClass) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedPassengerClass(selectedClass);
    };

  const handleOnSelectFlight = () => handleSelectFlight(index);

  useEffect(() => {
    if (!isSelectedFlight) {
      setSelectedPassengerClass(null);
    }
  }, [isSelectedFlight]);

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
                    <H3>
                      TRY{" "}
                      {fareCategories.ECONOMY?.subcategories[0].price.amount}
                    </H3>
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
                    <H3>
                      TRY{" "}
                      {fareCategories.BUSINESS?.subcategories[0].price.amount}
                    </H3>
                  </S.FlightPrice>
                </S.FlightClass>
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
      </Grid>
      {selectedPassengerClass !== null && isSelectedFlight && (
        <S.FlightPriceTable>
          <ArrowDropUpIcon />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>EcoFly</H3>
                  <H3>
                    <sup>TRY</sup>{" "}
                    {
                      fareCategories[selectedPassengerClass]?.subcategories[0]
                        .price.amount
                    }
                  </H3>
                </div>
                <div>
                  {fareCategories[
                    selectedPassengerClass
                  ]?.subcategories[0].rights.map((right) => (
                    <P>{right}</P>
                  ))}
                </div>
                <Button>Uçuşunu Seç</Button>
              </S.FlightPriceTableItem>
            </Grid>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>ExtraFly</H3>
                  <H3>
                    <sup>TRY</sup>{" "}
                    {
                      fareCategories[selectedPassengerClass]?.subcategories[1]
                        .price.amount
                    }
                  </H3>
                </div>
                <div>
                  {fareCategories[
                    selectedPassengerClass
                  ]?.subcategories[1].rights.map((right) => (
                    <P>{right}</P>
                  ))}
                </div>
                <Button>Uçuşunu Seç</Button>
              </S.FlightPriceTableItem>
            </Grid>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>PrimeFly</H3>
                  <H3>
                    <sup>TRY</sup>{" "}
                    {
                      fareCategories[selectedPassengerClass]?.subcategories[2]
                        .price.amount
                    }
                  </H3>
                </div>
                <div>
                  {fareCategories[
                    selectedPassengerClass
                  ]?.subcategories[2].rights.map((right) => (
                    <P>{right}</P>
                  ))}
                </div>
                <Button>Uçuşunu Seç</Button>
              </S.FlightPriceTableItem>
            </Grid>
          </Grid>
        </S.FlightPriceTable>
      )}
    </S.FlighListItem>
  );
};

export default FlighListItem;
