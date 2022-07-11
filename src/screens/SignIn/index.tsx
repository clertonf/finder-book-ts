import React from "react";
import { Input } from "../../components/Input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "../../validations";
import { Button } from "../../components/Button";

import LogoImg from "../../assets/Logo.svg";

import * as S from "./styles";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type UserInfo = {
  email: string;
  password: string;
};

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  function handleNavigationForAllBooks() {
    navigation.navigate("books");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <S.Content>
            <S.WrapperLogoAndTitle>
              <LogoImg width={104} height={50} />
              <S.Title>Books</S.Title>
            </S.WrapperLogoAndTitle>

            <S.Form>
              <Input
                name="email"
                autoCorrect={false}
                autoCapitalize="none"
                label="E-mail"
                placeholder="E-mail"
                control={control}
              />

              <Input
                name="password"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                label="Senha"
                placeholder="Senha"
                control={control}

                // error={"teste"}
                // error={errors.email && errors.email.message}
              />
            </S.Form>

            <Button
              type="primary"
              title="Entrar"
              onPress={handleNavigationForAllBooks}
            />
          </S.Content>
        </KeyboardAvoidingView>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
