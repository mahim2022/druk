import { createContext, useState, useEffect, useContext } from "react";
import { fetchPost } from "../Api";
import { DataCounter } from "./RestaurantDataUpdateCounter/DataCounter";

export const RestaurantState = createContext();

export const RestaurantStateProvider = (props) => {
	const [counter] = useContext(DataCounter);
	const [restaurant, setrestaurant] = useState([]);

	useEffect(async () => {
		const { data } = await fetchPost();
		setrestaurant(data);
	}, [counter]);

	return (
		<RestaurantState.Provider value={[restaurant, setrestaurant]}>
			{props.children}
		</RestaurantState.Provider>
	);
};
