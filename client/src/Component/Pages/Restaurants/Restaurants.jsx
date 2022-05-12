import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { RestaurantState } from "../../States/RestaurantState";
import { fetchPost } from "../../Api";
import { useNavigate } from "react-router-dom";
import { DataCounter } from "../../States/RestaurantDataUpdateCounter/DataCounter";
import { Loader } from "../../Loader/Loader";

export const Restaurants = () => {
	let navigate = useNavigate();
	const [counter, setCounter] = useContext(DataCounter);
	// const [restaurant, setrestaurant] = useContext(RestaurantState);
	const [restaurant, setRestaurant] = useState(null);
	useEffect(async () => {
		const result = await fetchPost();
		setRestaurant(result);
	}, [counter]);

	return (
		<Container>
			<h3>All Restaurants</h3>
			{!restaurant ? (
				<Container style={{ position: "relative", top: "30vh" }}>
					<Loader></Loader>
				</Container>
			) : (
				restaurant.map((cur, idx) => {
					return (
						<Card
							onClick={() => navigate(`/menu/${cur._id}`)}
							key={idx}
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
										{cur.barName}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{cur.location}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})
			)}
		</Container>
	);
};
