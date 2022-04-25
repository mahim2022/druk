import { Button, Container, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AddressPopOver from "./AddressPopOver";

export const PaymentPage = () => {
	const [address, setAddress] = useState("");
	const navigate = useNavigate();
	const [user, setUser] = useState(localStorage.getItem("Profile"));
	useEffect(() => {
		if (!user) navigate("/customer");
	}, [user]);
	// const editAddress = (e) => {
	//     e.preventDefault();

	// }
	return (
		<>
			<Container>
				<Paper elevation={3}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between  ",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-start",
							}}
						>
							<AddLocationAltIcon></AddLocationAltIcon>
							<Typography>Delivery Address</Typography>
						</div>
						<AddressPopOver></AddressPopOver>
					</div>
					<Typography>Enter Address</Typography>
				</Paper>
				<Paper elevation={3}></Paper>
				<Paper elevation={3}></Paper>
			</Container>
		</>
	);
};
