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
		<Container>
			BarOrders
			<Container>
				{invoice.map((cur) => {
					return (
						<Paper elevation={3} style={{ padding: "10px" }}>
							<Typography>ID:{cur.customerId}</Typography>
							<Typography>Time:{cur.orderDate}</Typography>
							<Typography>Payment Type:{cur.PaymentType}</Typography>
							<Typography>Total:{cur.total}</Typography>
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
					);
				})}
			</Container>
		</Container>
	);
};
