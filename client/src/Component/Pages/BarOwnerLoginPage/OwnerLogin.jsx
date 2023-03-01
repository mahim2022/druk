import { Container, Paper, TextField, Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPost } from "../../Api";
import { RestaurantState } from "../../States/RestaurantState";

const OwnerLogin = () => {
	const navigate = useNavigate();
	const [data, setdata] = useState("");
	let barNames = ["KingFisher", "Eram"];

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await fetchPost();
		result.map((cur, index) => {
			if (cur.barName.toLowerCase() === data.toLowerCase()) {
				navigate(`/bar/${cur._id}`);
			}
		});
	};

	const handleDemo = () => {
		navigate(`/bar/63eddfe509601afb0229bca3`);
	};

	return (
		<Container style={{ backgroundColor: "black", height: "100vh" }}>
			<Container
				maxWidth="sm"
				style={{
					position: "relative",
					top: "25vh",
					// backgroundColor: "black",
					// height: "100vh",
				}}
			>
				<Paper
					elevation={3}
					style={{
						padding: "20px",
						// display: "none",
					}}
				>
					<h4>Enter Bar Name</h4>
					<TextField
						id="outlined-basic"
						label="Bar Name"
						variant="outlined"
						style={{ width: "100%" }}
						value={data}
						onChange={(e) => {
							setdata(e.target.value);
						}}
					/>
					<div>
						<Button
							onClick={(e) => handleSubmit(e)}
							variant="contained"
							style={{ marginTop: "10px" }}
						>
							Submit
						</Button>
						<Button
							onClick={() => handleDemo()}
							variant="outlined"
							style={{ marginTop: "10px", marginLeft: "10px" }}
						>
							Demo
						</Button>
					</div>
				</Paper>

				<div style={{ marginTop: "10px" }}>
					{barNames.map((cur, idx) => {
						return (
							<li style={{ color: "yellow" }} key={idx}>
								{cur}
							</li>
						);
					})}
				</div>
			</Container>
		</Container>
	);
};
export default OwnerLogin;
