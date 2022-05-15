import { Container, Slide } from "@mui/material";
import { useContext, useState } from "react";
import { RestaurantState } from "../../States/RestaurantState";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AddPopOver } from "../../Form/form";
import { DeleteItem, fetchMenu, fetchPost } from "../../Api";
import { DataCounter } from "../../States/RestaurantDataUpdateCounter/DataCounter";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BarOrder } from "../Bar Orders/BarOrders";
import Tabs from "./Tabs";
import { BarCard } from "./BarCard";
import { Loader } from "../../Loader/Loader";

export const BarAssociation = () => {
	const [animation, setAnimation] = useState(false);
	const [view, setView] = useState(false);
	const [counter, setCounter] = useContext(DataCounter);
	const params = useParams();
	const [barData, setBarData] = useState(null);
	const [menuItem, setMenuItem] = useState([]);
	useEffect(async () => {
		const resultBar = await fetchPost();
		const resultMenu = await fetchMenu(params.idx);
		resultBar.map((cur) => {
			if (cur._id === params.idx) {
				setBarData(cur);
			}
		});
		setMenuItem(resultMenu);
		if (resultMenu) {
			setAnimation(true);
		}
	}, [counter]);

	///////popover////
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;
	///popover///

	const handleDelete = async (e, itemId) => {
		e.preventDefault(e);
		const result = await DeleteItem(itemId);
		setCounter(!counter);
	};

	if (!barData) {
		return (
			<Container style={{ position: "relative", top: "30vh" }}>
				<Loader></Loader>
			</Container>
		);
	} else {
		return (
			<Container maxWidth="sm">
				<BarCard barData={barData}></BarCard>
				<Tabs changeView={(view) => setView(view)}></Tabs>
				{!view ? (
					<BarOrder></BarOrder>
				) : (
					<>
						<AddPopOver popOverType="add" barId={barData._id}></AddPopOver>
						{!menuItem ? (
							<Container style={{ position: "relative", top: "30vh" }}>
								<Loader></Loader>
							</Container>
						) : (
							menuItem.map((cur, index) => {
								return (
									<Slide
										direction="up"
										in={animation}
										mountOnEnter
										unmountOnExit
									>
										<Paper
											key={index}
											elevation={3}
											style={{ marginTop: "20px" }}
										>
											<div
												style={{
													display: "flex",
													flexDirection: "row",
													justifyContent: "space-between",
												}}
											>
												<img
													src={cur.image}
													alt="Drink Image"
													style={{ width: "150px", height: "127px" }}
												></img>
												<div>
													<p>{cur.itemName}</p>
													<p>Vol:{cur.vol}ML</p>
													<p>Price:{cur.price} TK</p>
												</div>
												<div>
													<div>
														<AddPopOver
															price={cur.price}
															vol={cur.vol}
															itemName={cur.itemName}
															itemId={cur._id}
															popOverType="edit"
														></AddPopOver>
													</div>
													<div>
														<Button
															variant="text"
															onClick={(e) => {
																handleDelete(e, cur._id);
															}}
														>
															<DeleteForeverIcon></DeleteForeverIcon>
														</Button>
													</div>
												</div>
											</div>
										</Paper>
									</Slide>
								);
							})
						)}
					</>
				)}
			</Container>
		);
	}
};
