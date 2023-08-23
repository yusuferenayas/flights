import styled, { css } from "styled-components";

export const FlighListItem = styled.div`
  .MuiFormGroup-root {
    flex-direction: row;
    height: 100%;
  }
`;

const FlightListCardStyles = css`
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`;

export const FlightInformation = styled.div`
  ${FlightListCardStyles}

  div:nth-child(3) {
    text-align: right;
  }

  div:nth-child(4) {
    text-align: center;
    width: 35%;

    h4 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }

  span {
    display: block;
    width: 60%;
    height: 1px;
    background-color: black;
  }
`;

export const FlightClass = styled.div`
  ${FlightListCardStyles}
  height: 100%;
`;

export const FlightPrice = styled.div``;

export const FlightPriceTable = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: white;
  position: relative;

  > svg {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    stroke: white;
    fill: white;
  }
`;

export const FlightPriceTableItem = styled.div`
  div:first-child {
    background-color: #ddd;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 24px;
  }

  div:nth-child(2) {
    height: 200px;

    border: 1px solid #ccc;

    p {
      padding: 8px;
      border-bottom: 1px solid #ccc;
    }
  }

  button {
    width: 100%;
  }
`;
