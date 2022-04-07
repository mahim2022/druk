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
import { useNavigate } from "react-router-dom";

export function Cart() {
	let navigate = useNavigate();
	const [cartItems, setcartItems] = React.useContext(CartItemState);
	const [counter, setcounter] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		if (cartItems.length > 0) {
			setAnchorEl(event.currentTarget);
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const itemControls = (e, cur, param) => {
		let newArray = cartItems;
		let indexForDeletion = null;
		let allowDelete = false;
		newArray.forEach((curr, idx) => {
			if (curr._id === cur._id) {
				if (param === "increase") {
					curr.count++;
				}
				if (param === "decrease") {
					curr.count--;
					if (curr.count < 1) {
						newArray.splice(idx, 1);
					}
				}
				if (param === "delete") {
					indexForDeletion = idx;
					allowDelete = true;
				}
			}
		});
		if (indexForDeletion >= 0 && allowDelete) {
			newArray.splice(indexForDeletion, 1);
		}
		setcartItems(newArray);
		setcounter(!counter);
	};
	/////////Update state on Change///////
	React.useEffect(() => {}, [counter]);

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
								paddingTop: "10px",
								paddingLeft: "10px",
								width: "280px",
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
									marginTop: "-10px",
								}}
							>
								<Button color="error">
									<DeleteForeverOutlinedIcon
										onClick={(e) => {
											itemControls(e, cur, "delete");
										}}
									></DeleteForeverOutlinedIcon>
								</Button>
								<Button>
									<RemoveOutlinedIcon
										onClick={(e) => {
											itemControls(e, cur, "decrease");
										}}
									></RemoveOutlinedIcon>
								</Button>
								<Button
									color="success"
									onClick={(e) => {
										itemControls(e, cur, "increase");
									}}
								>
									<AddOutlinedIcon></AddOutlinedIcon>
								</Button>
							</div>
						</Paper>
					);
				})}
				<Button
					onClick={(e) => {
						e.preventDefault();
						navigate(`/checkoutPage`);
						handleClose();
					}}
					variant="contained"
					style={{
						// width: "80%",
						float: "right",
						marginTop: "3px",
						marginBottom: "3px",
					}}
				>
					<Typography>Goto Checkout</Typography>
				</Button>
			</Popover>
		</div>
	);
}
