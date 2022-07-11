import { useNavigation } from "@react-navigation/native";
import React from "react";
import { BookDTO } from "../../dtos/BookDTO";

import * as S from "./styles";

type BookProps = {
  data: BookDTO;
};

export function Book({ data }: BookProps) {
  const navigation = useNavigation();

  function handleNavigationBookDetails() {
    navigation.navigate("booksdetails");
  }

  return (
    <S.Container
      style={{
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowColor: "black",
        shadowOffset: { height: 3, width: 1 },
      }}
      onPress={handleNavigationBookDetails}
    >
      <S.Content>
        <S.Divider>
          <S.ImageBook source={{ uri: data.imageUrl }} resizeMode="contain" />

          <S.WrapperInfoBook>
            <S.Title>{data.title}</S.Title>
            <S.Author>{data.authors}</S.Author>
            <S.InfoBook>{data.pageCount} páginas</S.InfoBook>
            <S.InfoBook>Editora {data.publisher}</S.InfoBook>
            <S.InfoBook>Publicado em {data.published}</S.InfoBook>
          </S.WrapperInfoBook>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
}
