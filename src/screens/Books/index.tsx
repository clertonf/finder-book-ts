import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { Header } from "../../components/Header";
import { ListBooks } from "../../components/ListBooks";

import * as S from "./styles";

export function Books() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header />
        <ListBooks />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
