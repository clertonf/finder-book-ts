import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { AnyStyledComponent } from "styled-components";

export const Container = styled(
  LinearGradient as unknown as AnyStyledComponent
).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 1, y: 0 },
  end: { x: 1, y: 0.5 },
}))`
  flex-grow: 1;
  padding: 0 24px;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: getBottomSpace() + 20,
    justifyContent: "center",
    flexDirection: "column",
  },
})`
  width: 100%;
`;

export const WrapperLogoAndTitle = styled.View`
  width: 100%;

  flex-direction: row;
  margin-bottom: ${getBottomSpace() + 20}px;
`;

export const Form = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  margin-left: 17px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.PRIMARY_400};
    color: ${theme.COLORS.BACKGROUND_PRIMARY};
  `}
`;
