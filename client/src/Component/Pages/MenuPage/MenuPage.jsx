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

export const MenuPage = () => {
	const [restaurant] = useContext(RestaurantState);
	const [cartItem, setcartItem] = useContext(CartItemState);
	let params = useParams();

	////using index of json to get data///
	let menu = [];

	menu = restaurant[params.idx].menuItem;

	const addToCart = (e, cur) => {
		e.preventDefault();
		let match = false;
		cartItem.forEach((curr) => {
			if (curr._id === cur._id) {
				curr.count++;
				match = true;
			}
		});
		if (!match) {
			cur.count = 1;
			setcartItem([...cartItem, cur]);
		}
	};

	console.log(cartItem);

	if (!menu) {
		return (
			<>
				<h1>Loadinng</h1>
			</>
		);
	}
	return (
		<Container style={{ marginTop: "15px" }}>
			<h3>Menu</h3>
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{menu.map((cur, index) => {
						return (
							<Grid item xs={2} sm={4} md={4} key={index}>
								<Card sx={{ maxWidth: 345, maxHeight: 200 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="90"
											image="/static/images/cards/contemplative-reptile.jpg"
											alt="green iguana"
										/>
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
					})}
				</Grid>
			</Box>
		</Container>
	);
};
