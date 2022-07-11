import React from "react";
import { FlatList, View } from "react-native";
import Modal, { ModalProps } from "react-native-modal";

import { CategoryDTO } from "../../../dtos/CategoryDTO";
import { Button } from "../../Button";
import { CircleButton } from "../CircleButton";

import * as S from "./styles";

type ModalComponentProps = ModalProps & {
  isVisible: boolean;
  toggleModal: () => void;
  children?: JSX.Element | JSX.Element[];
  categories: CategoryDTO[];
  toggleMarkedInterest: (id: string) => void;
};

export function ModalComponent({
  isVisible = false,
  toggleModal,
  children,
  categories,
  toggleMarkedInterest,
  ...rest
}: ModalComponentProps): JSX.Element {
  return (
    <>
      <View>
        <Modal isVisible={isVisible} animationIn="fadeIn" {...rest}>
          {children}
          <S.Container>
            <S.CloseButton>
              <CircleButton iconName="close" onPress={toggleModal} />
            </S.CloseButton>

            <S.Category>
              <S.Legend>Selecione a categoria</S.Legend>

              <S.ListCategory
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <S.MarkButton onPress={() => toggleMarkedInterest(item.id)}>
                      <S.Content selected={item.selected}>
                        <S.MarkText selected={item.selected}>
                          {item.category}
                        </S.MarkText>
                      </S.Content>
                    </S.MarkButton>
                  );
                }}
              />
            </S.Category>

            <S.Year>
              <S.Legend>Selecione o ano</S.Legend>

              <S.ListCategory
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <S.MarkButton onPress={() => toggleMarkedInterest(item.id)}>
                      <S.Content selected={item.selected}>
                        <S.MarkText selected={item.selected}>
                          {item.published}
                        </S.MarkText>
                      </S.Content>
                    </S.MarkButton>
                  );
                }}
              />
            </S.Year>

            <S.FilterButton>
              <Button title="Filtrar" type="secondary" onPress={() => {}} />
            </S.FilterButton>
          </S.Container>
        </Modal>
      </View>
    </>
  );
}
