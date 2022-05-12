import { Container } from "@mui/material";
import "./Loader.css";

export const Loader = () => {
	return (
		<Container
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<span className="loader"></span>
		</Container>
	);
};
