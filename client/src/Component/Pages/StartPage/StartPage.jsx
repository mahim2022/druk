import { Container, Button } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
	const navigate = useNavigate();

	return (
		<>
			<Container maxWidth="sm">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						position: "relative",
						top: "50vw",
					}}
				>
					<Button
						variant="contained"
						style={{
							marginTop: "15px",
						}}
						onClick={(e) => {
							navigate("customer");
						}}
					>
						Customer
					</Button>
					<Button
						variant="contained"
						style={{
							marginTop: "15px",
						}}
						onClick={(e) => {
							navigate("bar");
						}}
					>
						Bar Owner
					</Button>
				</div>
			</Container>
		</>
	);
};
