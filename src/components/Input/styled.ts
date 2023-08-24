import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { colors, fontFamily } from "src/styles";

export const InputTextField = styled(TextField)`
  background: white;
  border-radius: 4px;
  width: 100%;

  .MuiInputBase-input {
    padding: 16px;
  }

  .MuiInputLabel-root,
  .MuiInputBase-root {
    padding: 0 12px;
  }

  .MuiInputBase-input {
    font-family: ${fontFamily.primary};
    color: ${colors.primary};
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }

  svg {
    fill: ${colors.primary};
    stroke: ${colors.primary};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiOutlinedInput-root.Mui-error {
    border: 2px solid red;
  }
`;
