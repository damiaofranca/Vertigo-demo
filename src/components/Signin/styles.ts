import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	max-width: 704px;
	padding: 40px 112px;
	flex-direction: column;
	background-color: #f8fafc;

	@media screen and (max-width: 1176px) and (min-width: 769px) {
		width: 48%;
		padding: 40px 44px;
	}

	@media screen and (max-width: 768px) and (min-width: 481px) {
		width: 100%;
		padding: 40px 44px;
		align-items: center;
	}

	@media screen and (max-width: 481px) {
		width: 100%;
		padding: 28px 24px;
	}
`;

export const Logo = styled.img`
	height: 54px;
	width: fit-content;
	pointer-events: none;
	margin-bottom: 70px;

	@media screen and (max-width: 1176px) and (min-width: 769px) {
		margin-bottom: 64px;
	}

	@media screen and (max-width: 768px) and (min-width: 481px) {
		margin-bottom: 54px;
	}

	@media screen and (max-width: 481px) {
		margin-bottom: 37px;
	}
`;

export const Title = styled.h1`
	width: 100%;
	color: #1e293b;
	font-size: 36px;
	font-weight: 700;
	line-height: 55px;
	font-style: normal;
	margin-bottom: 16px;

	@media screen and (max-width: 768px) and (min-width: 481px) {
		max-width: 440px;
	}
`;

export const SubTitle = styled.p`
	width: 100%;
	color: #475569;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	font-style: normal;
	margin-bottom: 40px;

	@media screen and (max-width: 768px) and (min-width: 481px) {
		max-width: 440px;
	}

	@media screen and (max-width: 1120px) and (min-width: 768px) {
		& > br {
			display: none;
		}
	}

	@media screen and (max-width: 390px) {
		& > br {
			display: none;
		}
	}
`;

export const Form = styled.div`
	width: 100%;
	display: flex;
	max-width: 384px;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
	}

	@media screen and (max-width: 768px) and (min-width: 481px) {
		max-width: 440px;
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 56px;
	border: none;
	cursor: pointer;
	padding: 16px 24px;
	border-radius: 4px;
	margin: 16px 0 32px 0;
	background-color: #7c3aed;
	transition: all 0.2s ease-in-out;

	color: #ffffff;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	font-style: normal;

	&:hover,
	&:focus {
		background-color: #9f67ff;
	}
`;

export const NotSignIn = styled.p`
	color: #475569;
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	font-style: normal;

	& > strong {
		color: #7c3aed;
		cursor: pointer;
		font-weight: 700;

		&:hover,
		&:focus {
			text-decoration: underline;
			text-decoration-color: #7c3aed;
		}
	}
`;
