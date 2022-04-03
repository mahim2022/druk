import { Container, Grid, Popover, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RestaurantState } from "../../States/RestaurantState";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CancelIcon from "@mui/icons-material/Cancel";
import FormModal from "../../Form/form";

export const BarAssociation = () => {
	const [restaurant] = useContext(RestaurantState);
	const barData = restaurant[0];

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
				<div>
					<Button
						aria-describedby={id}
						variant="text"
						onClick={handleClick}
						style={{ width: "100%" }}
					>
						<AddIcon></AddIcon>
					</Button>
					<Popover
						id={id}
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
					>
						<Container
							maxWidth="sm"
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Button
								variant="text"
								style={{
									position: "relative",
									left: "90%",
									maxHeight: "24px",
								}}
								onClick={handleClose}
							>
								<CancelIcon></CancelIcon>
							</Button>
							<div
								style={{
									position: "relative",
									right: "15%",
									paddingBottom: "20px",
								}}
							>
								<Typography sx={{ p: 2 }}>Enter New Item</Typography>
								<TextField
									id="outlined-basic"
									label="Item Name"
									variant="outlined"
									style={{ width: "110%", marginTop: "3px" }}
								/>
								<TextField
									id="outlined-basic"
									label="Volume"
									variant="outlined"
									style={{ width: "110%", marginTop: "3px" }}
								/>
								<TextField
									id="outlined-basic"
									label="Price"
									variant="outlined"
									style={{ width: "110%", marginTop: "3px" }}
								/>
							</div>
						</Container>
						<Button
							variant="contained"
							style={{
								float: "right",
								marginBottom: "10px",
								marginRight: "10px",
								marginTop: "-10px",
							}}
						>
							Submit
						</Button>
					</Popover>
				</div>

				{barData.menuItem.map((cur) => {
					return (
						<Paper elevation={3} style={{ marginTop: "20px" }}>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-between",
								}}
							>
								<img src="" alt="Drink Image"></img>
								<div>
									<p>Name:{cur.itemName}</p>
									<p>Volume:{cur.vol} ML</p>
									<p>Price:{cur.price} TK</p>
								</div>
								<div>
									<div>
										<Button variant="text">
											<SettingsIcon></SettingsIcon>
										</Button>
									</div>
									<div>
										<Button variant="text">
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
