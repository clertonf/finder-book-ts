import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const WrapperLogoAndTitle = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  margin-left: 17px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY_400};
    color: ${theme.COLORS.TEXT_DARK};
  `}
`;
