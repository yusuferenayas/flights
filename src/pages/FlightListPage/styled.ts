import { colors } from "src/styles";
import styled from "styled-components";

export const FlightListPageWrap = styled.div``;

export const FlightListTitleWrap = styled.div`
  p {
    color: ${colors.textAlternative};
    display: inline;
    padding: 5px 45px;
    background: ${colors.secondary};
  }

  h3 {
    padding-top: 25px;
  }
`;

export const PromoSwitchWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  flex-wrap: wrap;

  h4 {
    padding-right: 15px;
  }

  p {
    font-size: 14px;
    display: block;
    width: 100%;
    background: transparent;
    color: ${colors.text};
    padding: 40px 0 0;
    line-height: 16px;
  }
`;

export const FlighListWrap = styled.div`
  padding-top: 60px;
  border-radius: 4px;
  overflow: hidden;
`;

export const FlighListSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.primary};
  padding: 8px;

  p {
    color: ${colors.textAlternative};
    padding-right: 16px;
  }

  button:last-child {
    margin-left: 8px;
  }
`;

export const FlighList = styled.div`
  background: #efefef;
  border: 1px solid #ccc;
  padding: 16px;
`;
