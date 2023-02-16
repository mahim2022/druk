import { Container, Paper, Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkOrderStatus } from "../../Api";
// import { io } from "socket.io-client";
import { RejectedOrder } from "./OrderRejected";

export const DeliveryPage = () => {
	const [orderStatus, setOrderStatus] = useState("");

	////////socketio/////////Checking orderStatus dynamically
	const [counter, setCounter] = useState(true);
	// useEffect(() => {
	// 	const socket = io("http://localhost:5000");
	// 	socket.on("orderUpdate", () => {
	// 		setCounter(!counter);
	// 	});
	// }, []);
	const location = useLocation();

	/////Cheking for order update////
	useEffect(async () => {
		const { data } = await checkOrderStatus(location.state?.result?._id);
		if (data) {
			setOrderStatus(data.orderStatus);
		}
	}, [counter]);

	if (orderStatus === "rejected") {
		return (
			<>
				<RejectedOrder></RejectedOrder>
			</>
		);
	}

	////geting order from useLocation///
	const items = location.state?.result?.items;
	if (!items) {
		return <>Error</>;
	}
	if (items) {
		return (
			<>
				<Container
					maxWidth="sm"
					style={{ textAlign: "center", marginTop: "10px" }}
				>
					<Typography variant="h5" gutterBottom>
						Your Booze is on the way🍻🥃
					</Typography>
					<Typography variant="h5">
						Maybe take a few puffs while you wait🌿🚬
					</Typography>
					{orderStatus === "sent" ? (
						<Typography>Your order is enRoute.</Typography>
					) : (
						<></>
					)}
					<iframe
						src="https://giphy.com/embed/cmCHuk53AiTmOwBXlw"
						// width="350"
						// height="300"
						frameBorder="0"
						// class="giphy-embed"
						allowFullScreen
						style={{ width: "100vw", height: "300px" }}
					></iframe>
					<Paper elevation={3} style={{ padding: "7px" }}>
						<Typography style={{ fontWeight: "bolder" }}>Orders</Typography>
						{items.map((cur, idx) => {
							return (
								<div
									key={idx}
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "flex-start",
									}}
								>
									{idx + 1}.
									<Typography style={{ marginRight: "30px" }}>
										{cur.itemName}
									</Typography>
									<Typography style={{ marginRight: "30px" }}>
										{cur.vol}ML
									</Typography>
									<Typography style={{ marginRight: "30px" }}>
										x{cur.count}
									</Typography>
								</div>
							);
						})}
					</Paper>
				</Container>
			</>
		);
	}
};
