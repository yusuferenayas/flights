import type { NextPage } from "next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useRouter } from "next/router";

import Layout from "src/components/Layout";
import { H3, H4 } from "src/components/Typography";
import { ButtonLink } from "src/components/Button/styled";
import { routes } from "src/constants/routes";
import { ResultStatus } from "src/@types/ResultStatus";

import * as S from "./styled";

export type ResultPageQueryParams = {
  status: ResultStatus;
  price: number;
};

const ResultPage: NextPage = () => {
  const router = useRouter();
  const { status, price } = router.query;

  return (
    <Layout>
      <section>
        {status === ResultStatus.AVAILABLE ? (
          <S.ResultPageWrap>
            <div>
              <CheckCircleIcon />
              <H4>Kabin seçiminiz tamamlandı.</H4>
            </div>
            <hr />
            <div>
              <H3>Toplam tutar</H3>
              <H3>TRY {price}</H3>
            </div>
          </S.ResultPageWrap>
        ) : (
          <S.ResultPageErrorWrap>
            <div>
              <ErrorIcon />
              <H4>Kabin seçiminiz başarısız.</H4>
            </div>
            <hr />
            <div>
              <ButtonLink href={routes.index} $variant="primary">
                Başa Dön
              </ButtonLink>
            </div>
          </S.ResultPageErrorWrap>
        )}
      </section>
    </Layout>
  );
};

export default ResultPage;
