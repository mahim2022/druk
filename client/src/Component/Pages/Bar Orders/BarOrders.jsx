import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBarOrder } from "../../Api";
import { OrderButtons } from "./OrderButtons";
import { io } from "socket.io-client";

export const BarOrder = () => {
	const [counter, setCounter] = useState(true);
	////////socketio/////////
	useEffect(() => {
		const socket = io("http://localhost:4000");
		socket.on("newOrder", () => {
			setCounter(!counter);
		});
	}, []);

	const params = useParams();
	const [invoice, setInvoice] = useState([]);
	useEffect(async () => {
		const { data } = await getBarOrder(params.idx);
		setInvoice(data);
	}, [counter]);
	return (
		<>
			{invoice.map((cur, idx) => {
				return (
					<Paper
						key={idx}
						elevation={3}
						style={{ padding: "10px", marginTop: "10px" }}
					>
						<Grid container spacing={2}>
							<Grid item xs={9}>
								<Typography>ID: {cur.customerId}</Typography>
								<Typography>Time: {cur.createdAt}</Typography>
								{/* <Typography>Payment Type: {cur.paymentType}</Typography>
								<Typography>Address: {cur.address}</Typography> */}
								<Typography>Total: {cur.total}TK</Typography>
							</Grid>
							<Grid item xs={3}>
								<OrderButtons
									invoiceId={cur._id}
									counter={counter}
									setCounter={(counter) => setCounter(counter)}
								></OrderButtons>
							</Grid>
						</Grid>
						<Paper elevation={8} style={{ padding: "5px" }}>
							{cur.items.map((cur) => {
								return (
									<div
										key={cur}
										style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
										<Typography style={{ fontWeight: "bolder" }}>
											{cur.itemName}
										</Typography>

										<Typography style={{ fontWeight: "bolder" }}>
											x{cur.count}
										</Typography>
										<Typography>{cur.vol}ML</Typography>
									</div>
								);
							})}
						</Paper>
					</Paper>
				);
			})}
		</>
	);
};
