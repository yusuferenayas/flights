import { useState } from "react";
import { NextPage } from "next/types";
import Switch from "@mui/material/Switch";

import Layout from "src/components/Layout";
import { H3, H4, P } from "src/components/Typography";
import Button from "src/components/Button";

import FlighListItem from "./FlightListItem";
import * as S from "./styled";

const FlightListPage: NextPage = () => {
  const [promoCodeCheck, setPromoCodeCheck] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCodeCheck(event.target.checked);
  };

  return (
    <Layout>
      <section>
        <S.FlightListPageWrap>
          <S.FlightListTitleWrap>
            <P>Uçuş</P>
            <H3>İstanbul - Antalya, 6 Yolcu</H3>
            <S.PromoSwitchWrap>
              <H4>Promosyon Kodu</H4>
              <Switch
                checked={promoCodeCheck}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </S.PromoSwitchWrap>
          </S.FlightListTitleWrap>
          <S.FlighListWrap>
            <S.FlighListSort>
              <P>Sıralama Kriteri</P>
              <Button variant="transparent">Ekonomi Ücreti</Button>
              <Button variant="transparent">Kalkış Saati</Button>
            </S.FlighListSort>
            <S.FlighList>
              <FlighListItem />
            </S.FlighList>
          </S.FlighListWrap>
        </S.FlightListPageWrap>
      </section>
    </Layout>
  );
};

export default FlightListPage;
