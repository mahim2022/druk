import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";

export const BarCard = ({ barData }) => {
	console.log(barData);
	return (
		<Card style={{ marginTop: "20px", marginBottom: "20px" }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={barData.cover}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{barData.barName} , {barData.location}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
