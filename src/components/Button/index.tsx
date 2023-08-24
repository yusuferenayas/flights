import React from "react";

import * as S from "./styled";

export type ButtonVariantType = "primary" | "transparent";

type Props = {
  variant?: ButtonVariantType;
  icon?: React.ReactNode;
  loading?: boolean;
  selected?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  icon,
  loading,
  selected,
  ...props
}) => {
  return (
    <S.Button
      $variant={variant}
      $disabled={props.disabled}
      $selected={selected}
      {...(props as any)}
    >
      {icon}
      <span>{children}</span>
    </S.Button>
  );
};

export default Button;
