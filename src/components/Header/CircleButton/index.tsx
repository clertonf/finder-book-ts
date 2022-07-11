import React from "react";

import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";

type CircleButtonProps = {
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  onPress?: () => void;
};

export function CircleButton({
  iconName,
  onPress,
  ...rest
}: CircleButtonProps) {
  return (
    <S.CircleButton onPress={onPress} {...rest}>
      <S.Icon name={iconName} />
    </S.CircleButton>
  );
}
