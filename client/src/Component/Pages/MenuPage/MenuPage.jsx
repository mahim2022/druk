import { useParams } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RestaurantState } from "../../States/RestaurantState";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Collapse, Fade, Slide } from "@mui/material";
import { CartItemState } from "../../States/CartItemState/CartItemState";
import { fetchMenu } from "../../Api";
import { DataCounter } from "../../States/RestaurantDataUpdateCounter/DataCounter";
import { io } from "socket.io-client";
import { Loader } from "../../Loader/Loader";
import addToCart from "./AddtoCart";
import Alert from "@mui/material/Alert";
import "./MenuPage.css";

export const MenuPage = () => {
	const [counter, setCounter] = useState(true);
	const [animation, setAnimation] = useState(false);
	////////socketio/////////
	useEffect(() => {
		const socket = io("http://localhost:5000");
		socket.on("menuUpdate", () => {
			setCounter(!counter);
		});
	}, []);

	const [menu, setmenu] = useState(false);
	let params = useParams();
	const [cartItem, setcartItem] = useContext(CartItemState);
	////using index of json to get data///
	useEffect(async () => {
		const result = await fetchMenu(params.idx);
		setmenu(result);
		if (result) {
			setAnimation(true);
		}
	}, [counter]);

	const AddToCart = (e, cur) => {
		addToCart(e, cur, cartItem, setcartItem);
		setAlert(true);
		setTimeout(() => {
			setAlert(false);
		}, 2000);
	};

	const [alert, setAlert] = useState(false);

	return (
		<Container style={{ marginTop: "15px" }}>
			<h3>Menu</h3>
			{/* Alert with transition */}
			<Slide direction="up" in={alert} mountOnEnter unmountOnExit>
				<Alert
					severity="success"
					className="cartUpdateAlert"
					style={{ backgroundColor: "#66ffc2" }}
				>
					<strong>Cart Updated</strong>
				</Alert>
			</Slide>
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{!menu ? (
						<Container style={{ position: "relative", top: "30vh" }}>
							<Loader></Loader>
						</Container>
					) : (
						menu.map((cur, index) => {
							return (
								<Grid item xs={2} sm={4} md={4} key={index}>
									<Slide
										direction="right"
										in={animation}
										mountOnEnter
										unmountOnExit
									>
										<Paper elevation={10}>
											<Container>
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}
												>
													<img
														src={cur.image}
														style={{
															height: "150px",
														}}
													></img>
												</div>
												<Typography
													gutterBottom
													variant="h7"
													component="div"
													style={{ fontWeight: "900" }}
												>
													{cur.itemName}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
													style={{ fontWeight: "600" }}
												>
													Volume:{cur.vol}ml Price:{cur.price}tk
												</Typography>
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														paddingBottom: "5px",
													}}
												>
													<Button
														size="small"
														color="primary"
														onClick={(e) => AddToCart(e, cur)}
														variant="contained"
														style={{ height: "25px" }}
													>
														Add to Cart
													</Button>
												</div>
											</Container>
										</Paper>
									</Slide>
								</Grid>
							);
						})
					)}
				</Grid>
			</Box>
		</Container>
	);
};
