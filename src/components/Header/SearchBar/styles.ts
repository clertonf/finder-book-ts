import { TextInput } from "react-native";
import { AnyStyledComponent } from "styled-components";
import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${RFValue(17)}px;
`;

export const Content = styled.View`
  flex: 1;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_PRIMARY};
  padding: 0px 20px;
  height: ${RFValue(48)}px;

  border-radius: 5px;

  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
`;

export const FormInput = styled(TextInput)`
  height: 100%;
  font-size: ${RFValue(14)}px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY_500};
    color: ${theme.COLORS.TEXT_DARK};
  `}
`;

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
`;

export const Icon = styled(Ionicons as unknown as AnyStyledComponent).attrs(
  () => ({})
)`
  opacity: 0.6;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
`;

export const WrapperModal = styled.View`
  padding: 0 10px;

  justify-content: center;
`;

export const ButtonOpenModal = styled.TouchableOpacity`
  left: 10px;
`;
