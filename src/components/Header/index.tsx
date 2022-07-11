import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SearchBar } from "./SearchBar";
import { CircleButton } from "./CircleButton";
import { Logo } from "./Logo";

import { schema } from "../../validations";

import * as S from "./styles";

export function Header() {
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <Logo />
          <CircleButton iconName="ios-exit-outline" />
        </S.Wrapper>
      </S.Header>

      <S.SearchBarContainer>
        <SearchBar
          name="email"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Procure um livro"
          control={control}
        />
      </S.SearchBarContainer>
    </>
  );
}
