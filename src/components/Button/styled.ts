import styled, { css } from "styled-components";

import Link from "next/link";
import { ButtonVariantType } from ".";
import { colors } from "src/styles";

export const BaseButtonStyles = css`
  padding: 0px;
  border-radius: 4px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

export const PrimaryButtonStyles = css`
  background-color: ${colors.secondary};
  padding: 16px;
`;

type ButtonProps = {
  variant: ButtonVariantType;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const ButtonStyles = css<ButtonProps>`
  ${BaseButtonStyles}

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return PrimaryButtonStyles;

      default:
        break;
    }
  }}

  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `};
`;

// export as button element
export const Button = styled.button<ButtonProps>`
  ${ButtonStyles};
`;

// export as link element
export const ButtonLink = styled(Link)<ButtonProps>`
  ${ButtonStyles};
  text-decoration: none;
  padding: 0;

  img {
    margin-bottom: -6px;
  }

  &:hover {
    opacity: 0.75;
  }
`;
