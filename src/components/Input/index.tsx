/// <reference path="../../index.d.ts" />

// you can use this to start a reference
//so you don't need to install more libs
//to use images with typscript project ❤

import React, { InputHTMLAttributes, useState } from "react";

import eyeOn from "../../assets/icons/eyeOn.svg";
import eyeOff from "../../assets/icons/eyeOff.svg";
import { Container, ContainerInput, ErrorTxt, InputCore } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: boolean;
	mensageError?: string;
	type: "text" | "password";
}

export const Input: React.FC<InputProps> = ({
	label,
	type,
	error,
	mensageError,
	...props
}) => {
	const [showPassword, setShowPassword] = useState<boolean>(true);

	return (
		<Container>
			<p className="label">
				{label}

				{type === "password" && <strong>Esqueceu a senha?</strong>}
			</p>
			<ContainerInput>
				<InputCore
					{...props}
					isError={error ? true : false}
					type={
						type === "text"
							? "text"
							: showPassword === true
							? "text"
							: "password"
					}
				/>
				{type === "password" && (
					<div
						className="addon-icon"
						onClick={() => setShowPassword(!showPassword)}
					>
						<img
							src={showPassword ? eyeOn : eyeOff}
							alt={showPassword ? "Ver senha" : "Esconder senha"}
						/>
					</div>
				)}
			</ContainerInput>
			{error && <ErrorTxt>{mensageError}</ErrorTxt>}
		</Container>
	);
};
