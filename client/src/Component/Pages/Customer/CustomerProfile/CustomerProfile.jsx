import { Container, Paper, Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CustomerProfile = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("Profile")));

	useEffect(() => {
		if (!user) {
			navigate("/customersignin");
		}
	}, [user]);

	if (!user) {
		return <>Error</>;
	}
	if (user) {
		return (
			<Container
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Paper
					elevation={7}
					style={{
						maxWidth: "fit-content",
						padding: "20px",
						marginTop: "20px",
					}}
				>
					<Avatar
						style={{ marginBottom: "20px" }}
						alt="Mahim"
						src="Mahim"
						sx={{ width: 300, height: 300 }}
					/>
					<Typography>Name: {user.result.name}</Typography>
					<Typography style={{ paddingTop: "10px" }}>
						Phone: {user.result.phoneNumber}
					</Typography>
					<Typography style={{ paddingTop: "10px" }}>
						Email: {user.result.email}
					</Typography>
				</Paper>
			</Container>
		);
	}
};
export default CustomerProfile;
