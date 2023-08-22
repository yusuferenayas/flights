import styled from "styled-components";
import { colors } from "src/styles";

export const Wrap = styled.div<{ homeBg?: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  background-color: ${({ homeBg }) => (homeBg ? colors.homeBg : colors.bodyBg)};
`;

export const Main = styled.main`
  flex: 1;
  padding: 12px;
`;
