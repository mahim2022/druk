import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const RejectedOrder = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/customer");
	};
	return (
		<Container>
			<Typography style={{ textAlign: "center" }}>
				Sorry😿for stock related issues your order has been cancelled.If you
				paid in advance.You will be refunded
			</Typography>
			<Button variant="outlined" onClick={handleClick}>
				Go back to store
			</Button>
		</Container>
	);
};
