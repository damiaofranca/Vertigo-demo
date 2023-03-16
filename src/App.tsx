import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/LoginPage";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<LoginPage /> <ToastContainer />
		</>
	);
}

export default App;
