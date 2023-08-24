import styled, { css } from "styled-components";

import Link from "next/link";
import { ButtonVariantType } from ".";
import { colors } from "src/styles";

export const BaseButtonStyles = css`
  border-radius: 4px;
  text-align: center;
  color: white;
  cursor: pointer;
  padding: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

export const PrimaryButtonStyles = css`
  background-color: ${colors.secondary};
`;

export const TransparentButtonStyles = css`
  background-color: transparent;
  border: 1px solid white;
`;

type ButtonProps = {
  $variant?: ButtonVariantType;
  $disabled?: boolean;
  $selected?: boolean;
};

export const ButtonStyles = css<ButtonProps>`
  ${BaseButtonStyles}

  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return PrimaryButtonStyles;

      case "transparent":
        return TransparentButtonStyles;

      default:
        break;
    }
  }}

  ${({ $selected }) => {
    if ($selected) {
      return `background-color: ${colors.secondary};`;
    }
  }}

  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ $disabled }) =>
    $disabled &&
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

  img {
    margin-bottom: -6px;
  }

  &:hover {
    opacity: 0.75;
  }
`;
