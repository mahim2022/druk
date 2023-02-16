import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";

import kingfisher from "./kingfisher.png";

export const BarCard = ({ barData }) => {
	return (
		<Card style={{ marginTop: "20px", marginBottom: "20px" }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={barData.cover ? barData.cover : kingfisher}
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
