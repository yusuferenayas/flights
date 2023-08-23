import { useEffect, useState } from "react";
import type { NextPage } from "next";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HailIcon from "@mui/icons-material/Hail";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import GroupsIcon from "@mui/icons-material/Groups";

import { PassengerClass } from "src/@types/PassengerClass";
import { useOutsideClick } from "src/hooks/useOnClickOutside";
import Button from "src/components/Button";
import Layout from "src/components/Layout";
import { H1, H2, H4, P } from "src/components/Typography";
import { InputTextField } from "src/components/Input/styled";

import * as S from "./styled";
import { useApiClient } from "src/api";
import { IFlightData } from "src/model/FlightModel";

const HomePage: NextPage = () => {
  const { fetchFlights } = useApiClient();
  const [showPassengerPanel, setShowPassengerPanel] = useState(false);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [selectedPassengerClass, setSelectedPassengerClass] =
    useState<PassengerClass>(PassengerClass.Economy);
  const [flightData, setFlightData] = useState<IFlightData | undefined>();

  useEffect(() => {
    const getFlightsData = async () => {
      const response = await fetchFlights();

      if (response) {
        setFlightData(response);
      }
    };

    getFlightsData();
  }, []);

  const passengerPanelRef = useOutsideClick(() => {
    setShowPassengerPanel(false);
  });

  const handleChange =
    (selectedClass: PassengerClass) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedPassengerClass(selectedClass);
    };

  const togglePassengerPanel = () => {
    setShowPassengerPanel((prevState) => !prevState);
  };

  const addPassenger = () => {
    setPassengerCount((prevCount) => ++prevCount);
  };

  const removePassenger = () => {
    if (passengerCount > 1) {
      setPassengerCount((prevCount) => --prevCount);
    }
  };

  return (
    <Layout homeBg>
      <section>
        <S.HomePageWrap>
          <H1>Merhaba</H1>
          <H2>Nereyi keşfetmek istersiniz?</H2>
          <S.FlightFormWrap>
            <S.FlightForm>
              <InputTextField
                placeholder="Nereden"
                InputProps={{
                  startAdornment: <FlightTakeoffIcon />,
                }}
              />
              <InputTextField
                placeholder="Nereye"
                InputProps={{
                  startAdornment: <FlightLandIcon />,
                }}
              />
              <InputTextField
                disabled
                placeholder="Tarih"
                InputProps={{
                  endAdornment: <CalendarMonthIcon />,
                }}
              />
              <S.PassengerPickerWrap>
                <S.PassengerPickerButton onClick={togglePassengerPanel}>
                  {passengerCount > 1 ? <GroupsIcon /> : <HailIcon />}
                  <S.PassengerPickerCount>
                    {passengerCount}
                  </S.PassengerPickerCount>
                </S.PassengerPickerButton>
                {showPassengerPanel && (
                  <S.PassengerPanel ref={passengerPanelRef}>
                    <ArrowDropUpIcon />
                    <P>Kabin ve yolcu seçimi</P>
                    <RadioGroup value={selectedPassengerClass}>
                      <FormControlLabel
                        value={PassengerClass.Economy}
                        control={
                          <Radio
                            onChange={handleChange(PassengerClass.Economy)}
                          />
                        }
                        label="Economy Class"
                      />
                      <FormControlLabel
                        value={PassengerClass.Business}
                        control={
                          <Radio
                            onChange={handleChange(PassengerClass.Business)}
                          />
                        }
                        label="Business Class"
                      />
                    </RadioGroup>
                    <S.PassengerCounter>
                      <H4>Yolcu</H4>
                      <S.PassengerCounterControls>
                        <Button onClick={removePassenger} type="button">
                          -
                        </Button>
                        <H4>{passengerCount}</H4>
                        <Button onClick={addPassenger} type="button">
                          +
                        </Button>
                      </S.PassengerCounterControls>
                    </S.PassengerCounter>
                  </S.PassengerPanel>
                )}
              </S.PassengerPickerWrap>
              <Button type="submit">
                <ArrowForwardIosIcon fontSize="large" />
              </Button>
            </S.FlightForm>
          </S.FlightFormWrap>
        </S.HomePageWrap>
      </section>
    </Layout>
  );
};

export default HomePage;
