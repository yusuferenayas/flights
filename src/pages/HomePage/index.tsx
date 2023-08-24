import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useFlightsData } from "src/hooks/useFlightsData";
import { routes } from "src/constants/routes";
import { notifyError } from "src/utils/notification";
import { PASSENGER_COUNT_STORAGE_KEY } from "src/constants/config";
import { getLocalStorage, setLocalStorage } from "src/utils/localStorage";

import { FlightListPageQueryParams } from "../FlightListPage";

import {
  AirportSelectionFormSchema,
  AirportSelectionFormType,
  airportSelectionFormDefaultValues,
} from "./form.type";
import * as S from "./styled";

const HomePage: NextPage = () => {
  const { checkRoutesValid } = useFlightsData();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AirportSelectionFormType>({
    resolver: yupResolver(AirportSelectionFormSchema),
    defaultValues: airportSelectionFormDefaultValues,
  });

  const [showPassengerPanel, setShowPassengerPanel] = useState(false);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [selectedPassengerClass, setSelectedPassengerClass] =
    useState<PassengerClass>(PassengerClass.Economy);

  const passengerPanelRef = useOutsideClick(() => {
    setShowPassengerPanel(false);
  });

  useEffect(() => {
    // Local storage management
    const savedPassengerCount = getLocalStorage(PASSENGER_COUNT_STORAGE_KEY);

    if (savedPassengerCount) {
      setPassengerCount(Number(savedPassengerCount));
    }
  }, []);

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

  const handleFormSubmit = async ({
    originAirport,
    destinationAirport,
  }: AirportSelectionFormType) => {
    const isRoutesValid = checkRoutesValid({
      originAirport,
      destinationAirport,
    });

    if (isRoutesValid) {
      setLocalStorage(PASSENGER_COUNT_STORAGE_KEY, passengerCount.toString());

      router.push({
        pathname: routes.flightList,
        query: {
          originAirport,
          destinationAirport,
          passengerCount,
        } as FlightListPageQueryParams,
      });
    } else {
      notifyError(
        "Lütfen geçerli rotalarımızdan arama yapınız! (ipucu: başlangıçtaki değerler)"
      );
    }
  };

  return (
    <Layout homeBg>
      <section>
        <S.HomePageWrap>
          <H1>Merhaba</H1>
          <H2>Nereyi keşfetmek istersiniz?</H2>
          <S.FlightFormWrap>
            <S.FlightForm onSubmit={handleSubmit(handleFormSubmit)}>
              <InputTextField
                placeholder="Nereden"
                InputProps={{
                  startAdornment: <FlightTakeoffIcon />,
                }}
                error={!!errors?.originAirport}
                {...register("originAirport")}
              />
              <InputTextField
                placeholder="Nereye"
                InputProps={{
                  startAdornment: <FlightLandIcon />,
                }}
                error={!!errors?.destinationAirport}
                {...register("destinationAirport")}
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
