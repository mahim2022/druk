import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const CustomerSignIn = () => {
	const [change, setchange] = useState(true);
	const [data, setdata] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		password: "",
	});
	const handleSwitch = (e) => {
		e.preventDefault();
		setchange((change) => !change);
	};

	const handleSubmit = (e, param) => {
		e.preventDefault();
		if (param === "signin") {
		}
		if (param === "signup") {
		}
	};
	return (
		<>
			<Container>
				<Paper style={{ marginTop: "30px" }}>
					<Typography style={{ textAlign: "center" }}>Login</Typography>
					<Container
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{change ? (
							<>
								<TextField
									size="small"
									style={{
										marginTop: "5px",
										marginBottom: "5px",
										width: "85%",
									}}
									id="outlined-basic"
									label="Name"
									variant="outlined"
									value={data.name}
									onChange={(e) => {
										setdata(e.target.value);
									}}
								/>
								<TextField
									size="small"
									style={{
										marginTop: "5px",
										marginBottom: "5px",
										width: "85%",
									}}
									id="outlined-basic"
									label="Phone Number"
									variant="outlined"
									value={data.phoneNumber}
									onChange={(e) => {
										setdata(e.target.value);
									}}
								/>
							</>
						) : null}

						<TextField
							size="small"
							style={{ marginTop: "5px", marginBottom: "5px", width: "85%" }}
							id="outlined-basic"
							label="Email"
							variant="outlined"
						/>
						<TextField
							size="small"
							style={{ marginTop: "5px", marginBottom: "5px", width: "85%" }}
							id="outlined-basic"
							label="Password"
							variant="outlined"
						/>
					</Container>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "20px",
							marginBottom: "20px",
						}}
					>
						<Button
							variant="contained"
							onClick={(e) => {
								handleSubmit(e, change ? "signup" : "signin");
							}}
						>
							{change ? <span>SignUp</span> : <span>SignIn</span>}
						</Button>
					</div>
					<Button variant="text" onClick={(e) => handleSwitch(e)}>
						{change ? (
							<span>Already registered? SignIn</span>
						) : (
							<span>Not registered? SignUp</span>
						)}
					</Button>
				</Paper>
			</Container>
		</>
	);
};
