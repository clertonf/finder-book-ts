import React from "react";

import LogoImg from "../../../assets/Logo.svg";
import * as S from "./styles";

export function Logo() {
  return (
    <S.WrapperLogoAndTitle>
      <LogoImg width={104} height={50} stroke="black" fill="blue" />
      <S.Title>Books</S.Title>
    </S.WrapperLogoAndTitle>
  );
}
