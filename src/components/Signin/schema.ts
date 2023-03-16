import * as Yup from "yup";

export const RegisterUserSchema = Yup.object().shape({
	email: Yup.string().email("Email inválido").required("Campo obrigatório"),
	password: Yup.string().min(3, "Senha inválida").required("Campo obrigatório"),
});
