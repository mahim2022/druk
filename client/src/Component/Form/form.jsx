import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createBar, fetchPost } from "../Api";
import axios from "axios";

export const Form = () => {
	const [data, setdata] = useState({ barName: "" });

	const onSubmit = async (e) => {
		e.preventDefault();
		const result = await fetchPost();
		console.log(result);
	};

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				value={data.barName}
				onChange={(e) => {
					setdata({ barName: e.target.value });
				}}
			/>
			<Button variant="contained" onClick={(e) => onSubmit(e)}>
				Submit
			</Button>
		</Box>
	);
};
