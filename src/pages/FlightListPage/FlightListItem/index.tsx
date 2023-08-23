import { useState } from "react";
import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { PassengerClass } from "src/@types/PassengerClass";
import { H3, H4, P } from "src/components/Typography";
import Button from "src/components/Button";

import * as S from "./styled";

const FlighListItem = () => {
  const [selectedPassengerClass, setSelectedPassengerClass] = useState<
    PassengerClass | undefined
  >(undefined);

  const handleChange =
    (selectedClass: PassengerClass) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedPassengerClass(selectedClass);
    };

  return (
    <S.FlighListItem>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <S.FlightInformation>
            <div>
              <H3>01:15</H3>
              <H3>IST</H3>
              <P>istanbul</P>
            </div>
            <span />
            <div>
              <H3>02:45</H3>
              <H3>AYT</H3>
              <P>Antalya</P>
            </div>
            <div>
              <P>Uçuş Süresi</P>
              <H4>1h 30m</H4>
            </div>
          </S.FlightInformation>
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadioGroup value={selectedPassengerClass}>
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
                    <H3>TRY 274</H3>
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
                    <H3>TRY 274</H3>
                  </S.FlightPrice>
                </S.FlightClass>
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
      </Grid>
      {selectedPassengerClass !== undefined && (
        <S.FlightPriceTable>
          <ArrowDropUpIcon />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>EcoFly</H3>
                  <H3>
                    <sup>TRY</sup> 137
                  </H3>
                </div>
                <div>
                  <P>15 kg bagaj</P>
                </div>
                <Button>Uçuşunu Seç</Button>
              </S.FlightPriceTableItem>
            </Grid>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>ExtraFly</H3>
                  <H3>
                    <sup>TRY</sup> 137
                  </H3>
                </div>
                <div>
                  <P>20 kg bagaj</P>
                  <P>Standart koltuk seçimi</P>
                </div>
                <Button>Uçuşunu Seç</Button>
              </S.FlightPriceTableItem>
            </Grid>
            <Grid item xs={12} sm={4}>
              <S.FlightPriceTableItem>
                <div>
                  <H3>PrimeFly</H3>
                  <H3>
                    <sup>TRY</sup> 137
                  </H3>
                </div>
                <div>
                  <P>25 kg bagaj</P>
                  <P>Standart koltuk seçimi</P>
                  <P>Ücretsiz değişiklik</P>
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
