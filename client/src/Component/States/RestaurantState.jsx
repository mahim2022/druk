import { createContext, useState, useEffect } from "react";
import { fetchPost } from "../Api";

export const RestaurantState = createContext();

export const RestaurantStateProvider = (props) => {
	const [restaurant, setrestaurant] = useState([]);

	useEffect(async () => {
		const { data } = await fetchPost();
		setrestaurant(data);
	}, []);

	return (
		<RestaurantState.Provider value={[restaurant, setrestaurant]}>
			{props.children}
		</RestaurantState.Provider>
	);
};
