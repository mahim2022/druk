import { Container, Button } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
	const navigate = useNavigate();

	return (
		<>
			<Container
				maxWidth="sm"
				style={{ backgroundColor: "black", height: "100vh" }}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						position: "relative",
						top: "38vh",
					}}
				>
					<Button
						variant="contained"
						style={{
							marginTop: "15px",
							backgroundColor: "yellow",
							color: "black",
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
							backgroundColor: "yellow",
							color: "black",
						}}
						onClick={(e) => {
							navigate("ownerlogin");
						}}
					>
						Bar Owner
					</Button>
				</div>
			</Container>
		</>
	);
};
