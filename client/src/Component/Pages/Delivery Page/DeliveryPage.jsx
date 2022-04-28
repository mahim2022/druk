import { Container, Paper, Typography } from "@mui/material";
import "@fontsource/roboto/400.css";
import { useLocation } from "react-router-dom";

export const DeliveryPage = () => {
	const location = useLocation();
	const items = location.state.data.items;
	console.log(location.state.data.items);
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
