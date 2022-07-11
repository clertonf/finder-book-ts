import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { CATEGORY_TYPES } from "../../../constants/categoryConstants";
import { CategoryDTO } from "../../../dtos/CategoryDTO";
import { ModalComponent } from "../Modal";
import * as S from "./styles";

type SearchBarProps = TextInputProps & {
  control: Control;
  name: string;
  label?: string;
  error?: string;
};

export function SearchBar({
  name,
  control,
  secureTextEntry,

  ...rest
}: SearchBarProps) {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState<CategoryDTO[]>(CATEGORY_TYPES);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function handleToggleSelectCategoryBook(id: string) {
    const markedCategories = categories.map((category) => ({ ...category }));

    const findCategory = markedCategories.find((item) => item.id === id);

    if (!findCategory) {
      return;
    }

    findCategory.selected = !findCategory.selected;
    setCategories(markedCategories);
  }

  return (
    <S.Container>
      <S.Content>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <S.InputContainer>
              <S.FormInput
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry && passwordHidden}
                {...rest}
              />

              <S.ToggleShowPassButton
                onPress={() => setPasswordHidden(!passwordHidden)}
              >
                <S.Icon name="search" size={28} />
              </S.ToggleShowPassButton>
            </S.InputContainer>
          )}
        />
      </S.Content>

      <S.WrapperModal>
        <S.ButtonOpenModal onPress={toggleModal}>
          <S.Icon name="options" size={28} />
        </S.ButtonOpenModal>
      </S.WrapperModal>

      <ModalComponent
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        categories={categories}
        toggleMarkedInterest={handleToggleSelectCategoryBook}
      />
    </S.Container>
  );
}
