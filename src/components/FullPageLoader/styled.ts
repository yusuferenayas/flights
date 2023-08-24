import styled from "styled-components";
import { colors } from "src/styles";

export const FullPageLoaderWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;
