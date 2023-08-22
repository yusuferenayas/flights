import React from "react";

import * as S from "./styled";

export type ButtonVariantType = "primary";

type Props = {
  variant?: ButtonVariantType;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  icon,
  loading,
  ...props
}) => {
  return (
    <S.Button variant={variant} {...(props as any)}>
      {icon}
      <span>{children}</span>
    </S.Button>
  );
};

export default Button;
