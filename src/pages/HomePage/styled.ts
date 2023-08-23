import { P } from "src/components/Typography";
import { colors } from "src/styles";
import styled from "styled-components";

export const HomePageWrap = styled.div`
  padding-top: 72px;

  h1,
  h2 {
    color: white;
    text-align: center;
  }
`;

export const FlightForm = styled.form`
  margin-top: 32px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.2);

  display: inline-flex;

  .MuiFormControl-root {
    width: 300px;
    margin-right: 5px;

    &:nth-child(3) {
      width: 150px;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const FlightFormWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const PassengerPickerWrap = styled.div`
  position: relative;
`;

export const PassengerPickerButton = styled.div`
  background-color: ${colors.alternative};
  width: 150px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;
  height: 100%;
  position: relative;

  > svg {
    stroke: white;
    fill: white;
    width: 40px;
    height: 40px;
  }
`;

export const PassengerPickerCount = styled(P)`
  color: white;
  position: absolute;
  right: 3px;
  top: 3px;
`;

export const PassengerPanel = styled.div`
  position: absolute;
  padding: 16px;
  background: white;
  bottom: -15px;
  right: 50%;
  width: 400px;
  border-radius: 4px;
  transform: translateX(50%) translateY(100%);

  > svg {
    position: absolute;
    top: -20px;
    left: 50%;
    width: 40px;
    height: 40px;
    stroke: white;
    fill: white;
  }

  p,
  .MuiFormControlLabel-label {
    color: #aaa;
  }

  .MuiFormGroup-root {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
  }
`;

export const PassengerCounter = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: black;
  }
`;

export const PassengerCounterControls = styled.div`
  display: flex;
  align-items: center;

  h4 {
    padding: 0 14px;
  }
`;
