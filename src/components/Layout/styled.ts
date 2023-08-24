import styled from "styled-components";
import { colors } from "src/styles";

export const Wrap = styled.div<{ $homeBg?: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  header {
    border-color: ${({ $homeBg }) => ($homeBg ? "white" : colors.textGray)};

    h3 {
      color: ${({ $homeBg }) =>
        $homeBg ? colors.textAlternative : colors.textGray};
    }
  }
`;

export const Main = styled.main<{ $homeBg?: boolean }>`
  flex: 1;
  padding: 12px;

  background-color: ${({ $homeBg }) =>
    $homeBg ? colors.homeBg : colors.bodyBg};
`;
