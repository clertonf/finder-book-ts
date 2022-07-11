import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { AnyStyledComponent } from "styled-components";

export type InputProps = {
  isFocused: boolean;
};

export const Container = styled.View<InputProps>`
  margin-bottom: ${RFValue(17)}px;
  border-radius: 8px;
  padding: 0px 20px;
  height: ${RFValue(60)}px;
  background-color: rgba(0, 0, 0, 0.32);

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-width: 1px;
      border-color: ${theme.COLORS.BACKGROUND_PRIMARY};
    `}
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
  font-size: ${RFValue(13)}px;
  color: #fde999;

  bottom: 10px;
  margin-bottom: 4px;
  padding: 0 20px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
  font-size: ${RFValue(12)}px;
  margin-top: 8px;
  color: #bf93a7;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
`;

export const FormInput = styled(TextInput)`
  flex: 1;
  height: 100%;
  font-size: ${RFValue(14)}px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY_400};
    color: ${theme.COLORS.BACKGROUND_PRIMARY};
  `}
`;

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
`;

export const Icon = styled(
  Ionicons as unknown as AnyStyledComponent
).attrs<InputProps>(({ theme, isFocused }) => ({
  size: 24,
}))`
  opacity: 0.6;
  bottom: 5px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;
