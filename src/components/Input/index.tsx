import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

export type InputProps = TextInputProps & {
  control: Control;
  name: string;
  label?: string;
  error?: string;
};

export function Input({
  name,
  control,
  secureTextEntry,
  error,
  label,
  ...rest
}: InputProps) {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <>
      <S.Container isFocused={isFocused}>
        {label && <S.Label>{label}</S.Label>}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <S.InputContainer>
              <S.FormInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry && passwordHidden}
                {...rest}
              />

              {secureTextEntry && (
                <S.ToggleShowPassButton
                  onPress={() => setPasswordHidden(!passwordHidden)}
                >
                  <S.Icon
                    name={passwordHidden ? "eye" : "eye-off"}
                    isFocused={isFocused}
                  />
                </S.ToggleShowPassButton>
              )}
            </S.InputContainer>
          )}
        />
      </S.Container>
      {error && <S.Error>{error}</S.Error>}
    </>
  );
}
