import React from "react";

import * as S from "./styled";
import { H3 } from "../Typography";

const Header: React.FC = () => {
  return (
    <S.Header>
      <H3>turkishairlines.com</H3>
      <H3>
        search<b>Flight Challenge</b>
      </H3>
    </S.Header>
  );
};

export default Header;
