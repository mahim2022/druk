import { Container, Paper, TextField, Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantState } from "../../States/RestaurantState";

export const OwnerLogin = () => {
	let barNames = [];
	const navigate = useNavigate();
	const [data, setdata] = useState("");
	const [restaurant, setrestaurant] = useContext(RestaurantState);
	const handleSubmit = (e) => {
		e.preventDefault();
		restaurant.map((cur, index) => {
			if (cur.barName.toLowerCase() === data.toLowerCase()) {
				navigate(`/bar/${index}`);
			}
		});
	};
	useEffect(() => {
		restaurant.map((cur) => barNames.push(cur.barName));
	}, []);

	return (
		<Container
			maxWidth="sm"
			style={{
				backgroundColor: "black",
				height: "100vh",
			}}
		>
			<Paper
				elevation={3}
				style={{
					padding: "20px",
					position: "relative",
					top: "25vh",
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
				</div>
			</Paper>
			{/* <div>{barNames}</div> */}
		</Container>
	);
};
