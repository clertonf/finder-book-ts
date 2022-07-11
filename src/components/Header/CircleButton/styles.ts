import { Ionicons } from "@expo/vector-icons";
import { AnyStyledComponent } from "styled-components";
import styled from "styled-components/native";

export const CircleButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 52px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_PRIMARY};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Ionicons as unknown as AnyStyledComponent).attrs(
  ({ theme, isFocused }) => ({
    size: 20,
  })
)`
  opacity: 0.6;

  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
`;
