import { FlatList, FlatListProps } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { CategoryDTO } from "../../../dtos/CategoryDTO";

export type RadioButtonProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  width: 100%;

  min-height: 500px;
  max-height: 500px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 0 20px;
  border-radius: 8px;
`;

export const CloseButton = styled.View`
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Category = styled.View`
  width: 100%;
`;

export const Year = styled.View`
  width: 100%;
`;

export const Legend = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_500};
  color: ${({ theme }) => theme.COLORS.TEXT_DARK};

  margin-bottom: 10px;
`;

export const MarkButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;

export const MarkText = styled.Text<RadioButtonProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY_400};

  ${({ theme, selected }) => css`
    color: ${selected ? theme.COLORS.BACKGROUND : theme.COLORS.TEXT_DARK};
  `}
`;

export const Content = styled.View<RadioButtonProps>`
  border-radius: 25px;
  padding: 6px 12px;

  justify-content: center;

  ${({ theme, selected }) => css`
    border-width: ${selected ? 0 : 1}px
    border-color: ${
      selected ? theme.COLORS.TEXT_DARK : theme.COLORS.BACKGROUND
    };
    background-color: ${
      selected ? theme.COLORS.TEXT_DARK : theme.COLORS.BACKGROUND_SECONDARY
    }
  `}

  margin-bottom: ${RFValue(10)}px;
  margin: 5px 5px;
`;

export const ListCategory = styled(
  FlatList as new (props: FlatListProps<CategoryDTO>) => FlatList<CategoryDTO>
).attrs({
  showsHorizontalScrollIndicator: false,
  numColumns: 4,
  columnWrapperStyle: { flexWrap: "wrap", flex: 1 },
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
  horizontal: false,
})``;

export const FilterButton = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 110px;
  justify-content: flex-end;
`;
