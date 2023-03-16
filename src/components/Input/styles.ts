import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 16px;
	flex-direction: column;
	& > .label {
		display: flex;
		color: #1e293b;
		font-size: 14px;
		font-weight: 600;
		line-height: 21px;
		margin-bottom: 8px;
		font-style: normal;
		font-family: "Titillium Web";
		justify-content: space-between;

		& > strong {
			color: #7c3aed;
			cursor: pointer;
		}
	}
`;

export const ContainerInput = styled.div`
	width: 100%;
	position: relative;

	& > .addon-icon {
		right: 0;
		top: 50%;
		width: 20px;
		height: 20px;
		cursor: pointer;
		position: absolute;
		transform: translate(-12px, -60%);
	}
`;

export const InputCore = styled.input<{ isError: boolean }>`
	width: 100%;
	height: 53px;
	color: #1e293b;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	padding: 12px 16px;
	font-style: normal;
	border-radius: 4px;
	font-family: "Titillium Web";
	transition: all 0.2s ease-in-out;
	border: 1px solid
		${({ isError }) => (isError ? "#ED3A5A !important" : "#e2e8f0")};

	&:hover {
		border-color: #7c3aed;
	}

	&::placeholder {
		color: #94a3b8;
	}

	&:focus {
		outline: none;
		color: #1e293b;
	}

	&:disabled {
		color: #1e293b;
		border-color: #e2e8f0 !important;
	}
`;

export const ErrorTxt = styled.p`
	color: #ed3a5a;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	font-style: normal;
	margin: 4px 0px 8px 0px;
	font-family: "Titillium Web";
`;
