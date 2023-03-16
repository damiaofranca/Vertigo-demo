import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	min-height: 100vh;
`;

export const Image = styled.img`
	width: 100%;
	height: 100vh;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;

	@media screen and (max-width: 1176px) and (min-width: 769px) {
		width: 52%;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
