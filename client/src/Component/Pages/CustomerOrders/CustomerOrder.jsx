import { Container, Paper, Typography } from "@mui/material";
import { customerOrders } from "../../Api";
import { useEffect, useState } from "react";
import { Loader } from "../../Loader/Loader";

export const CustomerOrder = () => {
	const { result } = JSON.parse(localStorage.getItem("Profile"));

	const [orders, setOrders] = useState(null);

	useEffect(async () => {
		if (result) {
			const { data } = await customerOrders(result._id);
			let newArray = [];
			if (data.data) {
				data.data.map((cur) => {
					newArray.push(cur);
				});
			}
			if (data.result) {
				data.result.map((cur) => {
					newArray.push(cur);
				});
			}
			setOrders(newArray);
		}
		console.log(orders);
	}, []);

	if (!orders) {
		return (
			<Container>
				<Loader></Loader>
			</Container>
		);
	}
	if (orders) {
		return (
			<Container style={{ paddingTop: "10px" }}>
				{orders.map((cur) => {
					return (
						<Paper
							elevation={5}
							key={cur._id}
							style={{ padding: "10px 10px 0px 10px" }}
						>
							<Typography>OrderId:{cur.invoiceId}</Typography>
							<Typography>
								Order Status:{cur.orderStatus}
								{"   "}
								{cur.orderStatus === "sent"
									? "✔"
									: cur.orderStatus === "pending"
									? "⏳"
									: "❌"}
							</Typography>
							<ul style={{ marginTop: "-4px" }}>
								{cur.items.map((cur) => {
									return (
										<li>
											<Typography>
												{cur.itemName} x {cur.count}
											</Typography>
										</li>
									);
								})}
							</ul>
						</Paper>
					);
				})}
			</Container>
		);
	}
};
