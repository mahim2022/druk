import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Paper, TextField } from "@mui/material";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const AddressPopOver = (props) => {
	const [data, setData] = React.useState("");
	// const [payment, setPayment] = React.useState("");
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleSubmit = (e) => {
		props.changeAddress(data);
		handleClose();
	};
	// const handlePayment = (e) => {
	// 	setPayment(e.target.value);

	// 	handleClose();
	// };

	return (
		<div>
			<Button aria-describedby={id} variant="text" onClick={handleClick}>
				{props.type === "payment" ? (
					<EditIcon></EditIcon>
				) : (
					<EditLocationAltIcon></EditLocationAltIcon>
				)}
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				{props.type === "payment" ? (
					<Container>
						<FormControl>
							<RadioGroup
								aria-labelledby="demo-radio-buttons-group-label"
								defaultValue="Cash"
								name="radio-buttons-group"
								value={props.payment}
								onChange={(e) => {
									props.setPayment(e.target.value.toString());
									handleClose();
								}}
							>
								<FormControlLabel
									value="Cash"
									control={<Radio />}
									label="Cash💵"
								/>
								<FormControlLabel
									value="Mobile Banking"
									control={<Radio />}
									label="Mobile Banking 📱"
								/>
								<FormControlLabel
									value="Card"
									control={<Radio />}
									label="Card"
								/>
							</RadioGroup>
						</FormControl>
					</Container>
				) : (
					<Container maxWidth="sm" style={{ padding: "8px" }}>
						<TextField
							id="outlined-basic"
							label="Enter Address"
							variant="outlined"
							value={data}
							onChange={(e) => {
								setData(e.target.value);
							}}
						/>
						<div
							style={{
								paddingTop: "10px",
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-evenly",
							}}
						>
							{" "}
							<Button
								variant="contained"
								onClick={(e) => {
									handleSubmit(e);
								}}
							>
								Submit
							</Button>
							<Typography>OR</Typography>
							<Button variant="contained">Locate</Button>
						</div>
					</Container>
				)}
			</Popover>
		</div>
	);
};
