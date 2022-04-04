import { Container } from "@mui/material";
import { useContext, useState } from "react";
import { RestaurantState } from "../../States/RestaurantState";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AddPopOver } from "../../Form/form";
import { DeleteItem } from "../../Api";
import { DataCounter } from "../../States/RestaurantDataUpdateCounter/DataCounter";

export const BarAssociation = () => {
	const [restaurant] = useContext(RestaurantState);
	const barData = restaurant[0];
	const [counter, setCounter] = useContext(DataCounter);

	///////popover////
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	///popover///

	const handleDelete = async (e, itemId) => {
		e.preventDefault(e);
		const result = await DeleteItem(barData._id, itemId);
		setCounter(!counter);
	};

	if (!barData) {
		return <p>Server Error</p>;
	} else {
		return (
			<Container maxWidth="sm">
				<h3>Bar Owner</h3>
				<Card
					style={{ marginTop: "20px", marginBottom: "20px" }}
					sx={{ maxWidth: 400 }}
				>
					<CardActionArea>
						<CardMedia
							component="img"
							height="60"
							image="/static/images/cards/contemplative-reptile.jpg"
							alt="green iguana"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div">
								{barData.barName}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{barData.location}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				{/* popover//////////////////////////////////////////////////////////// */}
				{/* Contains forms and submit mechanism */}
				<AddPopOver popOverType="add" barId={barData._id}></AddPopOver>
				{barData.menuItem.map((cur, index) => {
					return (
						<Paper key={index} elevation={3} style={{ marginTop: "20px" }}>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<img src="" alt="Drink Image"></img>
								<div>
									<p>{cur.itemName}</p>
									<p>Vol:{cur.vol}ML</p>
									<p>Price:{cur.price} TK</p>
								</div>
								<div>
									<div>
										<AddPopOver
											price={cur.price}
											vol={cur.vol}
											itemName={cur.itemName}
											itemId={cur._id}
											barId={barData._id}
											popOverType="edit"
										></AddPopOver>
									</div>
									<div>
										<Button
											variant="text"
											onClick={(e) => {
												handleDelete(e, cur._id);
											}}
										>
											<DeleteForeverIcon></DeleteForeverIcon>
										</Button>
									</div>
								</div>
							</div>
						</Paper>
					);
				})}
			</Container>
		);
	}
};
