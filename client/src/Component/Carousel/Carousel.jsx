import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper } from "@mui/material";
import "./Carousel.css";

export const FoodCarousel = () => {
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
	return (
		<Carousel
			swipeable={true}
			draggable={true}
			showDots={false}
			responsive={responsive}
			// ssr={true} // means to render carousel on server-side.
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={2000}
			keyBoardControl={true}
			customTransition="all .5"
			transitionDuration={500}
			containerClass="carousel-container"
			removeArrowOnDeviceType={["tablet", "mobile"]}
			// deviceType={this.props.deviceType}
			// dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"
		>
			<div>
				<Paper elevation={12} className="jD"></Paper>
			</div>
			<div>
				<Paper elevation={12} className="jD"></Paper>
			</div>
			<div>
				<Paper elevation={12} className="jD"></Paper>
			</div>
			<div>
				<Paper elevation={12} className="jD"></Paper>
			</div>
		</Carousel>
	);
};
