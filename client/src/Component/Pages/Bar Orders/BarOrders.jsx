import { Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBarOrder } from "../../Api";

export const BarOrder = () => {
	const params = useParams();
	const [orders, setOrders] = useState({});
	const [invoice, setInvoice] = useState([]);
	useEffect(async () => {
		const { data } = await getBarOrder(params.idx);
		console.log(data);
		setInvoice(data);
	}, []);
	return (
		<Container maxWidth="sm">
			{invoice.map((cur) => {
				return (
					<Paper elevation={3} style={{ padding: "10px", width: "100%" }}>
						<Typography>ID: {cur.customerId}</Typography>
						<Typography>Time: {cur.orderDate}</Typography>
						<Typography>Payment Type: {cur.PaymentType}</Typography>
						<Typography>Total: {cur.total}TK</Typography>
						{/* <div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<Typography>Name</Typography>

								<Typography>Count</Typography>
								<Typography>VolumeML</Typography>
							</div> */}
						<Paper elevation={4} style={{ padding: "5px" }}>
							{cur.items.map((cur) => {
								return (
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
										<Typography>{cur.itemName}</Typography>

										<Typography>x{cur.count}</Typography>
										<Typography>{cur.vol}ML</Typography>
									</div>
								);
							})}
						</Paper>
					</Paper>
				);
			})}
		</Container>
	);
};
