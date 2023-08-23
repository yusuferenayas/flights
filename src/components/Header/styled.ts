import styled from "styled-components";

export const Header = styled.header`
  margin: 0 24px;
  margin-bottom: 12px;
  padding: 12px;
  padding-bottom: 0px;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;

  h3 {
    color: white;
    font-weight: 700;

    &:last-child {
      font-weight: 400;
    }
  }
`;
