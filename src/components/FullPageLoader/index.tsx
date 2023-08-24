import React from "react";

import * as S from "./styled";
import { CircularProgress } from "@mui/material";

const FullPageLoader = () => {
  return (
    <S.FullPageLoaderWrap>
      <CircularProgress
        size={75}
        color="error"
        data-testid="full-page-loader"
      />
    </S.FullPageLoaderWrap>
  );
};

export default FullPageLoader;
