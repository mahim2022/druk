import { Container, Slide } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { fetchPost } from "../../Api";
import { useNavigate } from "react-router-dom";
import { DataCounter } from "../../States/RestaurantDataUpdateCounter/DataCounter";
import { Loader } from "../../Loader/Loader";

const Restaurants = () => {
	const [animation, setAnimation] = useState(false);
	let navigate = useNavigate();
	const [counter, setCounter] = useContext(DataCounter);
	// const [restaurant, setrestaurant] = useContext(RestaurantState);
	const [restaurant, setRestaurant] = useState(null);
	useEffect(async () => {
		const result = await fetchPost();
		setRestaurant(result);
		if (result) setAnimation(true);
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
						<Slide direction="up" in={animation} mountOnEnter unmountOnExit>
							<Card
								onClick={() => navigate(`/menu/${cur._id}`)}
								key={idx}
								style={{ marginTop: "20px", marginBottom: "20px" }}
								sx={{ maxWidth: 400 }}
							>
								<CardActionArea>
									<CardMedia
										component="img"
										height="150"
										image={cur.cover}
										alt="green iguana"
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											{cur.barName} , {cur.location}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Slide>
					);
				})
			)}
		</Container>
	);
};
export default Restaurants;
