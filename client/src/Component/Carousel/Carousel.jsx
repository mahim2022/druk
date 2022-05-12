import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper } from "@mui/material";
import "./Carousel.css";
import { useState, useEffect } from "react";
import { fetchMenu } from "../Api";
import { Container } from "@mui/material";
import { Loader } from "../Loader/Loader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddToCartModal from "./AddToCartModal";

export const FoodCarousel = () => {
	const [menu, setMenu] = useState(null);

	useEffect(async () => {
		const data = await fetchMenu(0, { type: "all" });
		setMenu(data);
	}, []);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 4,
			// slidesToSlide: 2,
		},
	};

	const [counter, setCounter] = useState(null);

	if (!menu) {
		return (
			<Container style={{}}>
				<Loader></Loader>
			</Container>
		);
	}
	return (
		<Carousel
			swipeable={true}
			draggable={true}
			showDots={false}
			responsive={responsive}
			// ssr={true} // means to render carousel on server-side.
			infinite={true}
			// autoPlay={true}
			// autoPlaySpeed={2000}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			removeArrowOnDeviceType={["tablet", "mobile"]}
			// deviceType={this.props.deviceType}
			// dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"
		>
			{menu.map((cur) => {
				return (
					<Paper
						elevation={6}
						className="jD"
						key={cur._id}
						onClick={() => {
							setCounter(true);
						}}
					>
						<AddToCartModal
							counter={counter}
							changeCounter={(counter) => setCounter(counter)}
						></AddToCartModal>
						<img
							src={cur.image}
							style={{
								maxWidth: "100%",
								maxHeight: "100%",
								margin: "auto",
								display: "block",
							}}
						></img>
					</Paper>
				);
			})}
		</Carousel>
	);
};
