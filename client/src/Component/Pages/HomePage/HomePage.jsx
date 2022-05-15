import { Container, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FoodCarousel } from "../../Carousel/Carousel";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export const HomePage = () => {
	let navigate = useNavigate();
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
			<Container maxWidth="sm">
				<Box sx={{ flexGrow: 1 }} style={{ marginTop: "15px" }}>
					<Grid container spacing={2}>
						<Grid item xs={12} onClick={() => navigate("/restaurants")}>
							<Item className="firstCard">
								<span
									style={{
										color: "white",
										fontStyle: "italic",
										fontWeight: "bolder",
									}}
								>
									Drinks Delivery
								</span>
							</Item>
						</Grid>
						<Grid item xs={6} onClick={() => navigate("/restaurants")}>
							<Item className="shop"></Item>
						</Grid>
						<Grid item xs={6} onClick={() => navigate("/restaurants")}>
							<Item className="pickUp">
								<div>
									<span
										style={{
											color: "white",
											fontStyle: "italic",
											fontWeight: "bolder",
											position: "relative",
											bottom: "5px",
										}}
									>
										Pick-Ups,
									</span>
									<br></br>
									<span
										style={{
											color: "white",
											fontStyle: "italic",
											fontWeight: "bolder",
											position: "relative",
											bottom: "5px",
										}}
									>
										Get upto 30% off!!
									</span>
								</div>
							</Item>
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
