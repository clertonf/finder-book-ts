import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Não é um email válido")
    .required("Email é obrigatório!"),
  password: yup
    .string()
    .required("Senha é obrigatória!")
    .min(8, "A senha tem que ter acima de 8 caracteres"),
});
