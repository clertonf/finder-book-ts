import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  width: 100%;
`;

export const SearchBarContainer = styled.View`
  margin-top: 30px;
  width: 100%;
  padding: 0 20px;
`;
