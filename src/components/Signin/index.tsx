/// <reference path="../../index.d.ts" />

// you can use this to start a reference
//so you don't need to install more libs
//to use images with typscript project ❤

import React from "react";
import {
	Container,
	Logo,
	SubTitle,
	Title,
	Form,
	Button,
	NotSignIn,
} from "./styles";
import logo from "../../assets/icons/logo.svg";
import { Input } from "../Input";
import { useFormik } from "formik";
import { RegisterUserSchema } from "./schema";
import { toast } from "react-toastify";

export const Signin: React.FC = () => {
	const initialValues = {
		email: "",
		password: "",
	};

	const showMessage = (vals: any) => {
		toast("Login feito com sucesso.", {
			theme: "dark",
			autoClose: 2000,
			draggable: true,
			closeOnClick: true,
			pauseOnHover: true,
			progress: undefined,
			position: "top-right",
			hideProgressBar: false,
		});
		console.log("Valores: ", vals);
	};

	const {
		errors,
		values,
		touched,
		resetForm,
		handleBlur,
		handleSubmit,
		handleChange,
	} = useFormik({
		enableReinitialize: true,
		initialValues: initialValues,
		validationSchema: RegisterUserSchema,
		onSubmit: (vals) => {
			showMessage(vals);
			resetForm();
		},
	});

	return (
		<Container>
			<Logo src={logo} alt="Vertigo entreterimento" />
			<Title>Acesse a plataforma</Title>
			<SubTitle>
				Faça login ou registre-se para começar a construir <br /> seus projetos
				ainda hoje.
			</SubTitle>
			<Form>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<Input
						name="email"
						type="text"
						label="E-mail"
						onBlur={handleBlur}
						value={values.email}
						onChange={handleChange}
						mensageError={errors.email}
						error={errors.email && touched.email ? true : false}
					/>
					<Input
						label="Senha"
						name="password"
						type="password"
						onBlur={handleBlur}
						value={values.password}
						onChange={handleChange}
						mensageError={errors.password}
						error={errors.password && touched.password ? true : false}
					/>
					<Button>Entrar</Button>
				</form>

				<NotSignIn>
					Ainda não tem uma conta?<strong> Inscreva-se</strong>
				</NotSignIn>
			</Form>
		</Container>
	);
};
