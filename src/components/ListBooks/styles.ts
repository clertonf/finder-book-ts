import { FlatList, FlatListProps } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { BookDTO } from "../../dtos/BookDTO";

export const ListBooks = styled(
  FlatList as new (props: FlatListProps<BookDTO>) => FlatList<BookDTO>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 20,
    paddingBottom: getBottomSpace() + 30,
  },
})``;
