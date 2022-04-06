import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CartItemState } from "../States/CartItemState/CartItemState";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Paper } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export function Cart() {
	const [cartItems, setcartItems] = React.useContext(CartItemState);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<Button aria-describedby={id} variant="contained" onClick={handleClick}>
				<ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon>
				<Typography>{cartItems.length}</Typography>
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
				{cartItems.map((cur, idx) => {
					return (
						<Paper
							key={idx}
							elevation={3}
							style={{
								padding: "20px",
								width: "250px",
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<img src="" alt="image"></img>
							<div>
								<Typography>Name: {cur.itemName}</Typography>
								<Typography>Total Price: {cur.count * cur.price}</Typography>
								<Typography>Count: {cur.count}</Typography>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<DeleteForeverOutlinedIcon></DeleteForeverOutlinedIcon>
								<RemoveOutlinedIcon></RemoveOutlinedIcon>
								<AddOutlinedIcon></AddOutlinedIcon>
							</div>
						</Paper>
					);
				})}
			</Popover>
		</div>
	);
}
