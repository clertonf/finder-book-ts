import { RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: getBottomSpace() + 160,
    flexDirection: "column",
  },
})`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: ${getStatusBarHeight() + 20}px 10px;
`;

// export const Container = styled.View`
//   flex: 1;
//   width: 100%;

//   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
//   padding: ${getStatusBarHeight() + 40}px 20px;
// `;

export const BackButton = styled.View`
  margin-left: 20px;
`;

export const ImageBookWrapper = styled.View`
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ImageBook = styled.Image`
  width: 270px;
  height: 351px;
`;

export const TitleInfo = styled.View`
  width: 100%;

  padding: 0 60px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_500};
  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
  text-align: left;
`;

export const Authors = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
  color: ${({ theme }) => theme.COLORS.TEXT_MAIN};
`;

export const Information = styled.View`
  width: 100%;
  margin-top: 37px;
  padding: 0 60px;
`;

export const AboutInfoBook = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const InfoTextBold = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_500};
  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
`;

export const InfoTextRegular = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};
  color: ${({ theme }) => theme.COLORS.LEGEND};
`;

export const ReviewEditory = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const About = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const QuotationImage = styled.Image``;
