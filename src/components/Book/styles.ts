import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
  shadowColor: "#000",
})`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 20px 20px 20px 15px;

  border-radius: 5px;

  margin-bottom: 16px;
`;

export const Content = styled.View``;

export const Divider = styled.View`
  flex-direction: row;
`;

export const ImageBook = styled.Image`
  width: 81px;
  height: 122px;
  border-radius: 5px;
  margin-right: ${RFValue(18)}px;
`;

export const WrapperInfoBook = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_500};
  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
`;

export const Author = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
  color: ${({ theme }) => theme.COLORS.TEXT_MAIN};
  margin-bottom: 15px;
`;

export const InfoBook = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
  color: ${({ theme }) => theme.COLORS.LEGEND};
`;
