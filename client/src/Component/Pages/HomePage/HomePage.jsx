import { Container, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FoodCarousel } from "../../Carousel/Carousel";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export const HomePage = () => {
	return (
		<>
			{/* Search Menu */}
			<Container maxWidth="sm" style={{ marginTop: "15px" }}>
				<TextField
					size="small"
					id="outlined-basic"
					label="Search"
					variant="outlined"
					style={{ width: "100%" }}
				/>
			</Container>
			{/* Card Menu */}
			<Container maxWidth="sm">
				<Box sx={{ flexGrow: 1 }} style={{ marginTop: "30px" }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Item>xs=8</Item>
						</Grid>
						<Grid item xs={6}>
							<Item>xs=4</Item>
						</Grid>
						<Grid item xs={6}>
							<Item>xs=8</Item>
						</Grid>
					</Grid>
				</Box>
			</Container>
			{/* Carousel */}
			<Container maxWidth="sm" style={{ marginTop: "30px" }}>
				<FoodCarousel></FoodCarousel>
			</Container>
		</>
	);
};
