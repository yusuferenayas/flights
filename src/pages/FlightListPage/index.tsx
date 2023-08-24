import { useId, useMemo, useState } from "react";
import { NextPage } from "next/types";
import { useRouter } from "next/router";
import Switch from "@mui/material/Switch";

import Layout from "src/components/Layout";
import { H3, H4, P } from "src/components/Typography";
import Button from "src/components/Button";
import { SortByType, useFlightsData } from "src/hooks/useFlightsData";

import FlighListItem from "./FlightListItem";
import * as S from "./styled";

export type FlightListPageQueryParams = {
  originAirport: string;
  destinationAirport: string;
  passengerCount: number;
};

const FlightListPage: NextPage = () => {
  const id = useId();
  const router = useRouter();
  const { originAirport, destinationAirport, passengerCount } = router.query;

  const { getFlightsByLocationsSorted } = useFlightsData();

  const [sortBy, setSortBy] = useState<SortByType>("price");
  const [promoCodeCheck, setPromoCodeCheck] = useState<boolean>(false);
  const [selectedFlight, setSelectedFlight] = useState<number | undefined>();

  const flightsToRender = useMemo(() => {
    if (originAirport && destinationAirport) {
      return getFlightsByLocationsSorted({
        originAirport: originAirport.toString(),
        destinationAirport: destinationAirport.toString(),
        sortBy,
      });
    }

    return [];
  }, [originAirport, destinationAirport, sortBy]);

  const handlePromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCodeCheck(event.target.checked);
  };

  const handleSortByChange = (sortBy: SortByType) => (event: any) => {
    setSortBy(sortBy);
  };

  const handleSelectFlight = (index: number) => {
    setSelectedFlight(index);
  };

  if (flightsToRender?.length === 0) {
    return (
      <Layout>
        <section>
          <H3 style={{ paddingTop: 100 }}>
            Aradığınız kriterlere uygun sefer bulunmadı.
          </H3>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section>
        <S.FlightListPageWrap>
          <S.FlightListTitleWrap>
            <P>Uçuş</P>
            <H3>İstanbul - Antalya, 6 Yolcu</H3>
            <S.PromoSwitchWrap>
              <H4>Promosyon Kodu</H4>
              <Switch checked={promoCodeCheck} onChange={handlePromoChange} />
            </S.PromoSwitchWrap>
          </S.FlightListTitleWrap>
          <S.FlighListWrap>
            <S.FlighListSort>
              <P>Sıralama Kriteri</P>
              <Button
                variant="transparent"
                selected={sortBy === "price"}
                onClick={handleSortByChange("price")}
              >
                Ekonomi Ücreti
              </Button>
              <Button
                variant="transparent"
                selected={sortBy === "date"}
                onClick={handleSortByChange("date")}
              >
                Kalkış Saati
              </Button>
            </S.FlighListSort>
            <S.FlighList>
              {flightsToRender?.map((flight, index) => (
                <FlighListItem
                  key={`${id}-${index}`}
                  flightData={flight}
                  index={index}
                  isSelectedFlight={selectedFlight === index}
                  handleSelectFlight={handleSelectFlight}
                />
              ))}
            </S.FlighList>
          </S.FlighListWrap>
        </S.FlightListPageWrap>
      </section>
    </Layout>
  );
};

export default FlightListPage;
