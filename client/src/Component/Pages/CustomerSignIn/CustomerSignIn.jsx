import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SignIn, SignUp } from "../../Api";
import { useNavigate } from "react-router-dom";

export const CustomerSignIn = () => {
	let navigate = useNavigate();
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

	const handleSubmit = async (e, param) => {
		e.preventDefault();
		if (param === "signin") {
			const result = await SignIn({
				email: data.email.toLowerCase(),
				password: data.password,
			});
			localStorage.setItem("Profile", JSON.stringify(result.data));
			navigate(`/customer`);
		}
		if (param === "signup") {
			const result = await SignUp({
				name: data.name.toLowerCase(),
				phoneNumber: data.phoneNumber,
				email: data.email.toLowerCase(),
				password: data.password,
			});
			localStorage.setItem("Profile", JSON.stringify(result.data));
			navigate(`/customer`);
		}
		setdata({ name: "", phoneNumber: "", email: "", password: "" });
	};
	return (
		<>
			<Container>
				<Paper style={{ marginTop: "30px" }}>
					<Typography
						style={{
							textAlign: "center",
							fontWeight: "bolder",
							fontSize: "1.5rem",
						}}
					>
						Login
					</Typography>
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
									onChange={(e) => setdata({ ...data, name: e.target.value })}
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
									onChange={(e) =>
										setdata({ ...data, phoneNumber: e.target.value })
									}
								/>
							</>
						) : null}

						<TextField
							size="small"
							style={{ marginTop: "5px", marginBottom: "5px", width: "85%" }}
							id="outlined-basic"
							label="Email"
							variant="outlined"
							value={data.email}
							onChange={(e) => setdata({ ...data, email: e.target.value })}
						/>
						<TextField
							size="small"
							style={{ marginTop: "5px", marginBottom: "5px", width: "85%" }}
							id="outlined-basic"
							label="Password"
							variant="outlined"
							value={data.password}
							onChange={(e) => setdata({ ...data, password: e.target.value })}
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
