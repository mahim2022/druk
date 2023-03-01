import { Container, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./StartPage.css";
import MainLogo from "./Logo.png";

const StartPage = () => {
	const navigate = useNavigate();

	return (
		<>
			<Container
				maxWidth="sm"
				style={{ backgroundColor: "black", height: "100vh" }}
			>
				<Container
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img src={MainLogo} style={{ width: "200px", height: "200px" }}></img>
				</Container>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						// position: "relative",
						// top: "38vh",
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
				<div
					className="font-link"
					style={{
						color: "white",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<a>Made With 💝 by Naimul Mushfiq Mahim</a>
				</div>
			</Container>
		</>
	);
};
export default StartPage;
