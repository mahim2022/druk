import { Button, Container, Typography, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { AddressPopOver } from "./AddressPopOver";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { CartItemState } from "../../States/CartItemState/CartItemState";
import { order } from "../../Api";
import ErrorModal from "./ErrorModal";

export const PaymentPage = () => {
	const [error, setError] = useState(false);
	const [cartItems] = useContext(CartItemState);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		let sum = 0;
		cartItems.map((cur) => (sum += cur.count * cur.price));
		setTotal(sum);
	}, [cartItems]);

	const [paymentType, setPaymentType] = useState("");
	const [address, setAddress] = useState("");
	const navigate = useNavigate();
	const [user, setUser] = useState(localStorage.getItem("Profile"));
	useEffect(() => {
		if (!user) navigate("/customer");
	}, [user]);
	// const editAddress = (e) => {
	//     e.preventDefault();

	// }

	const handleSubmit = async (e) => {
		if (!paymentType || !address) {
			setError(true);
		}
		if (paymentType || address) {
			let items = [];
			let barId = cartItems[0].barId;
			const { result } = JSON.parse(localStorage.getItem("Profile"));
			const customerId = result._id;

			cartItems.map((cur) => {
				items.push({
					itemId: cur._id,
					count: cur.count,
					itemName: cur.itemName,
					vol: cur.vol,
				});
			});

			const data = { items, total, customerId, barId, address, paymentType };
			const response = await order(data);
			if (response) {
				navigate("/delivery", { state: { data } });
			}
		}

		// console.log(barId);
	};

	return (
		<>
			<Container maxWidth="sm">
				<Paper elevation={3} style={{ padding: "10px", marginTop: "10px" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between  ",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-start",
							}}
						>
							<AddLocationAltIcon></AddLocationAltIcon>
							<Typography>Delivery Address</Typography>
						</div>
						<AddressPopOver
							changeAddress={(address) => setAddress(address)}
						></AddressPopOver>
					</div>
					{address ? (
						<Typography>{address}</Typography>
					) : (
						<Typography>Enter Address</Typography>
					)}
				</Paper>
				<Paper elevation={3} style={{ padding: "10px", marginTop: "10px" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between	",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-betw",
							}}
						>
							<AccountBalanceWalletIcon></AccountBalanceWalletIcon>
							<Typography> Payment Method</Typography>
						</div>
						<AddressPopOver
							type="payment"
							payment={paymentType}
							setPayment={(paymentType) => setPaymentType(paymentType)}
						></AddressPopOver>
					</div>
					{paymentType ? (
						<Typography>{paymentType}</Typography>
					) : (
						<Typography>Select Payment Method</Typography>
					)}
				</Paper>
				<Paper elevation={3} style={{ padding: "10px", marginTop: "10px" }}>
					<Typography>Summary</Typography>
					{cartItems.map((cur) => {
						return (
							<>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between	",
									}}
								>
									<Typography>
										{cur.itemName} x {cur.count}
									</Typography>
									<Typography>{cur.count * cur.price}TK</Typography>
								</div>
							</>
						);
					})}
					<Typography>Total:{total}TK</Typography>
				</Paper>
				<ErrorModal
					error={error}
					changeError={(error) => setError(error)}
				></ErrorModal>
				<Paper elevation={3} style={{ padding: "10px", marginTop: "10px" }}>
					<Button
						onClick={(e) => handleSubmit(e)}
						variant="contained"
						color="error"
						style={{ width: "100%" }}
					>
						Confirm Order
					</Button>
				</Paper>
			</Container>
		</>
	);
};
