import { createContext, useState } from "react";

export const CartItemState = createContext();

export const CartItemStateProvider = (props) => {
	const [cartItems, setcartItems] = useState([]);
	return (
		<CartItemState.Provider value={[cartItems, setcartItems]}>
			{props.children}
		</CartItemState.Provider>
	);
};
