import { Signin } from "../../components/Signin";
import { Container, Image } from "./styles";

export const LoginPage = () => {
	const background = require("../../assets/images/background.png");
	return (
		<Container>
			<Signin />
			<Image src={background} />
		</Container>
	);
};
