import {
	Container,
	Button,
	Popover,
	Typography,
	TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import { addItem, editItem } from "../Api";
import { DataCounter } from "../States/RestaurantDataUpdateCounter/DataCounter";
import SettingsIcon from "@mui/icons-material/Settings";

export const AddPopOver = (props) => {
	const [counter, setCounter] = useContext(DataCounter);
	const [data, setdata] = useState({ itemName: "", vol: "", price: "" });
	//////popover mechanism////////
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		if (props.popOverType === "edit") {
			setdata({
				itemName: props.itemName,
				vol: props.vol,
				price: props.price,
			});
		}
	};
	const handleClose = () => {
		setAnchorEl(null);
		setdata({ itemName: "", vol: "", price: "" });
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	///////////////////////////////////

	/////Form input and server mechanism//////

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (props.popOverType === "add") {
			const result = await addItem(props.barId, data);
		} else {
			const itemId = props.itemId;
			const finalResult = { ...data, itemId };
			const result = await editItem(props.barId, finalResult);
		}
		setCounter(!counter);
		setdata({ itemName: "", vol: "", price: "" });
		handleClose();
	};

	// useEffect(() => {
	// 	console.log(barId.barId);
	// });

	return (
		<div>
			<Button
				aria-describedby={id}
				variant="text"
				onClick={handleClick}
				style={{ width: props.popOverType === "add" ? "100%" : "1px" }}
			>
				{props.popOverType === "add" ? (
					<AddIcon></AddIcon>
				) : (
					<SettingsIcon></SettingsIcon>
				)}
				{/* <AddIcon></AddIcon> */}
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<Container
					maxWidth="sm"
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Button
						variant="text"
						style={{
							position: "relative",
							left: "90%",
							maxHeight: "24px",
						}}
						onClick={handleClose}
					>
						<CancelIcon></CancelIcon>
					</Button>
					<div
						style={{
							position: "relative",
							right: "15%",
							paddingBottom: "20px",
						}}
					>
						<Typography sx={{ p: 2 }}>Enter New Item</Typography>
						<TextField
							id="outlined-basic"
							label="Item Name"
							variant="outlined"
							style={{ width: "110%", marginTop: "3px" }}
							value={data.itemName}
							onChange={(e) => {
								setdata({ ...data, itemName: e.target.value });
							}}
						/>
						<TextField
							id="outlined-basic"
							label="Volume"
							variant="outlined"
							style={{ width: "110%", marginTop: "3px" }}
							value={data.vol}
							onChange={(e) => {
								setdata({ ...data, vol: Number(e.target.value) });
							}}
						/>
						<TextField
							id="outlined-basic"
							label="Price"
							variant="outlined"
							style={{ width: "110%", marginTop: "3px" }}
							value={data.price}
							onChange={(e) => {
								setdata({ ...data, price: Number(e.target.value) });
							}}
						/>
					</div>
				</Container>
				<Button
					variant="contained"
					style={{
						float: "right",
						marginBottom: "10px",
						marginRight: "10px",
						marginTop: "-10px",
					}}
					onClick={(e) => {
						handleSubmit(e);
					}}
				>
					Submit
				</Button>
			</Popover>
		</div>
	);
};
