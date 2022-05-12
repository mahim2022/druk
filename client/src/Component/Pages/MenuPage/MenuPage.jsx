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
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CartItemState } from "../../States/CartItemState/CartItemState";
import { fetchMenu } from "../../Api";
import { DataCounter } from "../../States/RestaurantDataUpdateCounter/DataCounter";
import { io } from "socket.io-client";
import { Loader } from "../../Loader/Loader";

export const MenuPage = () => {
	const [counter, setCounter] = useState(true);
	////////socketio/////////
	useEffect(() => {
		const socket = io("http://localhost:4000");
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
	}, [counter]);

	const addToCart = (e, cur) => {
		e.preventDefault();
		let match = false;
		let newArray = cartItem;
		newArray.forEach((curr) => {
			if (curr._id === cur._id) {
				curr.count++;
				match = true;
			}
		});
		if (match) {
			setcartItem(newArray);
		}
		if (!match) {
			cur.count = 1;
			setcartItem([...cartItem, cur]);
		}
	};

	// if (!menu) {
	// 	return (
	// 		<>
	// 			<Container style={{ top: "30px" }}>
	// 				<h1>Loading</h1>
	// 			</Container>
	// 		</>
	// 	);
	// }
	return (
		<Container style={{ marginTop: "15px" }}>
			<h3>Menu</h3>
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
									<Card sx={{ maxWidth: 345, maxHeight: 200 }}>
										<CardActionArea>
											{/* <CardMedia
											component="img"
											height="100"
											image={cur.image}
											alt="green iguana"
											style={{ width: "40%", height: "50%" }}
										/> */}
											<Container
												style={{ display: "grid", placeItems: "center" }}
											>
												<img src={cur.image} style={{ height: "100px" }}></img>
											</Container>

											<CardContent>
												<Typography gutterBottom variant="h7" component="div">
													{cur.itemName}
												</Typography>
												<Typography
													// style={{ position: "relative", bottom: "0px" }}
													variant="body2"
													color="text.secondary"
												>
													Volume:{cur.vol}ml Price:{cur.price}tk
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Button
												style={{ postion: "relative", bottom: "28px" }}
												size="small"
												color="primary"
												onClick={(e) => addToCart(e, cur)}
											>
												Add to Cart
											</Button>
										</CardActions>
									</Card>
								</Grid>
							);
						})
					)}
				</Grid>
			</Box>
		</Container>
	);
};
