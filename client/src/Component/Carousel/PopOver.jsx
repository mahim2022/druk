import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddToCart from "../Pages/MenuPage/AddtoCart";
import { CartItemState } from "../States/CartItemState/CartItemState";

export default function BasicPopover(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const [cartItem, setcartItem] = React.useContext(CartItemState);

	const handleBuy = (e, cur) => {
		handleClose();
		AddToCart(e, cur, cartItem, setcartItem);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Button
				aria-describedby={id}
				variant="text"
				onClick={handleClick}
				style={{ maxHeight: "1px", marginTop: "2px" }}
			>
				Buy
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
					vertical: "bottom",
					horizontal: "center",
				}}
			>
				<div style={{ padding: "20px 20px 5px 20px" }}>
					<Typography>{props.cur.itemName}</Typography>
					<Typography>Price:{props.cur.price}tk</Typography>
					<Typography>Vol:{props.cur.vol}ml</Typography>
					<Button onClick={(e) => handleBuy(e, props.cur)}>ADD TO CART</Button>
				</div>
			</Popover>
		</div>
	);
}
