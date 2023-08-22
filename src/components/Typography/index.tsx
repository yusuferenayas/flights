import styled, { css } from "styled-components";

// Heading 1
export const H1Styles = css`
  font-size: 48px;
  line-height: normal;
`;

export const H1 = styled.h1`
  ${H1Styles};
`;

// Heading 2
export const H2Styles = css`
  font-size: 36px;
  line-height: normal;
`;
export const H2 = styled.h2`
  ${H2Styles};
`;

// Heading 3
export const H3Styles = css`
  font-size: 24px;
  line-height: normal;
`;
export const H3 = styled.h3`
  ${H3Styles};
`;

// Heading 4
export const H4Styles = css`
  font-size: 20px;
  line-height: normal;
`;
export const H4 = styled.h4`
  ${H4Styles};
`;

// Paragraph
interface IPProps {
  variant?: "p2" | "p3";
}
export const P1Styles = css`
  font-size: 16px;
  line-height: 22px;
`;

export const P = styled.p<IPProps>`
  ${P1Styles};
`;
