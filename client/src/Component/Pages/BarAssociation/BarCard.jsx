import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";

export const BarCard = ({ barData }) => {
	return (
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
	);
};
