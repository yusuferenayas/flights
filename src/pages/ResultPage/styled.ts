import styled from "styled-components";
import { css } from "styled-components";
import { colors } from "src/styles";

const PageWrapStyles = css`
  padding-top: 100px;

  div:first-child {
    display: flex;
    align-items: center;
    padding-bottom: 12px;

    svg {
      stroke: green;
      fill: green;
      width: 50px;
      height: 50px;
      margin-right: 24px;
    }
  }

  hr {
    margin: 24px 0;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;

    h3:last-child {
      color: ${colors.primary};
    }
  }
`;

export const ResultPageWrap = styled.div`
  ${PageWrapStyles}
`;

export const ResultPageErrorWrap = styled.div`
  ${PageWrapStyles}

  div:first-child {
    svg {
      stroke: red;
      fill: red;
    }
  }

  div:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;
