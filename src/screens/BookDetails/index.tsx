import React from "react";
import { Image, View } from "react-native";

import { INFO_BOOK } from "../../constants/infoBookConstants";
import { CircleButton } from "../../components/Header/CircleButton";

// import QuotationMarks from "../../assets/quotation-marks.svg";
import quotationMarks from "../../assets/quotation-marks.png";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function BookDetails() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.BackButton>
        <CircleButton iconName="arrow-back" onPress={handleGoBack} />
      </S.BackButton>

      <S.ImageBookWrapper
        style={{
          shadowOpacity: 0.8,
          shadowRadius: 13,
          shadowColor: "black",
          shadowOffset: { height: 3, width: 3 },
        }}
      >
        <S.ImageBook
          source={{ uri: "https://d2drtqy2ezsot0.cloudfront.net/Book-0.jpg" }}
        />
      </S.ImageBookWrapper>

      <S.TitleInfo>
        <S.Title>Change By Design Second line exa...</S.Title>
        <S.Authors>Tim Brown, Julie Zhuo, Fried Maximiilian</S.Authors>
      </S.TitleInfo>

      <S.Information>
        <S.InfoTextBold>INFORMACOES</S.InfoTextBold>

        <S.AboutInfoBook>
          <View style={{ flexDirection: "column" }}>
            {INFO_BOOK.map((item) => (
              <S.InfoTextBold key={item.id}>{item.info_book}</S.InfoTextBold>
            ))}
          </View>

          <View style={{ flexDirection: "column" }}>
            <S.InfoTextRegular>304 páginas</S.InfoTextRegular>
          </View>
        </S.AboutInfoBook>

        <S.ReviewEditory>
          <S.InfoTextBold>RESENHA DA EDITORA </S.InfoTextBold>

          <S.About>
            <S.InfoTextRegular>
              <S.QuotationImage source={quotationMarks} /> {"  "}
              The subject of “design thinking” is the rage at business schools,
              throughout corporations, and increasingly in the popular press—due
              in large part to the work of IDEO, a leading design firm, and its
              celebrated CEO, Tim Brown, who uses this book to show how the
              techniques and strategies of design belong at every level of
              business.
            </S.InfoTextRegular>
          </S.About>
        </S.ReviewEditory>
      </S.Information>
    </S.Container>
  );
}
