import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SignIn, SignUp } from "../../Api";
import { useLocation, useNavigate } from "react-router-dom";

export const CustomerSignIn = () => {
	let location = useLocation();
	let navigate = useNavigate();
	const [change, setchange] = useState(true);
	const [data, setdata] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		password: "",
	});
	const [errorRes, setErrorRes] = useState(0);
	const handleSwitch = (e) => {
		e.preventDefault();
		setchange((change) => !change);
	};

	const clear = () => {
		setdata({ name: "", phoneNumber: "", email: "", password: "" });
	};

	const handleSubmit = async (e, param) => {
		e.preventDefault();
		if (param === "signin") {
			const result = await SignIn({
				email: data.email.toLowerCase(),
				password: data.password,
			});
			///wrong password
			if (result === 402) {
				setErrorRes(result);
				clear();
			}
			////user non-exsitent
			if (result === 401) {
				setErrorRes(result);
				clear();
			}
			if (result.status === 201) {
				localStorage.setItem("Profile", JSON.stringify(result.data));
				if (location?.state?.past === "redirectToPaymentPage") {
					navigate(`/paymentpage`);
				} else {
					navigate(`/customer`);
				}
				setErrorRes(0);
			}
		}
		if (param === "signup") {
			const result = await SignUp({
				name: data.name.toLowerCase(),
				phoneNumber: data.phoneNumber,
				email: data.email.toLowerCase(),
				password: data.password,
			});
			if (result === 404) {
				setErrorRes(result);
				clear();
			}
			if (result.status === 201) {
				localStorage.setItem("Profile", JSON.stringify(result.data));
				navigate(`/customer`);
				setErrorRes(0);
			}
		}
		clear();
	};
	///resetting errors on changing from signup options//
	useEffect(() => {
		setErrorRes(0);
	}, [change]);

	const handleDemo = async () => {
		const result = await SignIn({
			email: "naimulmushfiq@gmail.com",
			password: 123456789,
		});
		if (result?.status === 201) {
			localStorage.setItem("Profile", JSON.stringify(result.data));
			navigate(`/customer`);
			setErrorRes(0);
		}
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
						{errorRes === 401 ? (
							<Typography style={{ color: "red" }}>
								Email Does'nt Exist sign up!!!
							</Typography>
						) : null}
						{errorRes === 404 ? (
							<Typography style={{ color: "red" }}>
								User already exists sign in!!!
							</Typography>
						) : null}
						<TextField
							size="small"
							style={{ marginTop: "5px", marginBottom: "5px", width: "85%" }}
							id="outlined-basic"
							label="Password"
							variant="outlined"
							value={data.password}
							onChange={(e) => setdata({ ...data, password: e.target.value })}
						/>
						{errorRes === 402 ? (
							<Typography style={{ color: "red" }}>Wrong Password</Typography>
						) : null}
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
							style={{ minWidth: "80px" }}
						>
							{change ? <span>SignUp</span> : <span>SignIn</span>}
						</Button>
						<Button
							variant="contained"
							style={{ margin: "10px", minWidth: "85px" }}
							onClick={handleDemo}
						>
							Demo
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
