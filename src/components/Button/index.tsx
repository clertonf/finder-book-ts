import React from "react";

import * as S from "./styles";

type ButtonProps = {
  title: string;
  type?: S.TypeProps;
  onPress?: () => void;
};

export function Button({
  title,
  type = "primary",
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <S.Container onPress={onPress} type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
