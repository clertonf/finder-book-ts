import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Header = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 60}px 20px 58px;
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SearchBarContainer = styled.View`
  margin-top: 30px;
  width: 100%;
  padding: 0 20px;
`;
