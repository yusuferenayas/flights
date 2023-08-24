import { PropsWithChildren } from "react";

import Container from "@mui/material/Container";

import Header from "../Header";

import * as S from "./styled";

type Props = PropsWithChildren<{ homeBg?: boolean }>;

const Layout: React.FC<Props> = ({ children, homeBg }) => {
  return (
    <S.Wrap $homeBg={homeBg}>
      <Header />
      <S.Main $homeBg={homeBg}>
        <Container>{children}</Container>
      </S.Main>
    </S.Wrap>
  );
};

export default Layout;
