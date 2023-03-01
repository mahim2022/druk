import { Typography, Button, Paper, Container } from "@mui/material";
import { CartItemState } from "../../States/CartItemState/CartItemState";
import { useContext, useState, useEffect } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Navigate, useNavigate } from "react-router-dom";

const CheckOutPage = () => {
	const navigate = useNavigate();
	const [cartItems, setcartItems] = useContext(CartItemState);
	const [counter, setcounter] = useState(false);
	const [price, setprice] = useState(0);
	useEffect(() => {
		let totalPrice = 0;
		cartItems.map((cur) => {
			totalPrice += cur.price * cur.count;
		});
		setprice(totalPrice);
	}, [counter]);

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

	const handleOrderNow = (e) => {
		e.preventDefault();
		if (!localStorage.getItem("Profile")) {
			navigate("/customersignin", { state: { past: "redirectToPaymentPage" } });
		} else {
			navigate("/paymentPage");
		}
	};
	if (cartItems.length === 0) {
		return (
			<>
				<Paper style={{ padding: "30px" }}>
					<Typography style={{ textAlign: "center" }}>Cart is empty</Typography>
				</Paper>
			</>
		);
	} else
		return (
			<>
				<Container>
					{cartItems.map((cur, idx) => {
						return (
							<Paper
								key={idx}
								elevation={3}
								style={{
									marginTop: "10px",
									paddingTop: "10px",
									paddingLeft: "10px",
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<img
									src={cur.image}
									style={{ width: "100px", height: "100px" }}
									alt="image"
								></img>
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
					<Paper
						elevation={3}
						style={{
							marginTop: "5px",
							padding: "4px",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Typography>Total Price:{price} tk</Typography>
						<Button
							variant="contained"
							onClick={(e) => {
								handleOrderNow(e);
							}}
						>
							<Typography>Order Now</Typography>
						</Button>
					</Paper>
				</Container>
			</>
		);
};
export default CheckOutPage;
