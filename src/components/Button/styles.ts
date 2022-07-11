import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export type TypeProps = "primary" | "secondary";

type ButtonProps = {
  type: TypeProps;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ButtonProps>`
  flex: 1;
  max-height: ${RFValue(45)}px;
  min-height: ${RFValue(45)}px;

  justify-content: center;
  align-items: center;

  border-radius: 30px;

  ${({ theme, type }) => css`
    border-width: ${type === "primary" ? 0 : 2}px;
    border-color: ${type === "secondary" && theme.COLORS.TEXT_MAIN};
    background-color: ${type === "primary"
      ? theme.COLORS.BACKGROUND_PRIMARY
      : theme.COLORS.BACKGROUND_SECONDARY};
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_500};

  color: ${({ theme }) => theme.COLORS.TEXT_MAIN};
`;
