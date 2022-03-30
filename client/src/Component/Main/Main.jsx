import ResponsiveAppBar from "../AppBar/AppBar";
import { HomePage } from "../Pages/HomePage/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import { Restaurants } from "../Pages/Restaurants/Restaurants";
import { MenuPage } from "../Pages/MenuPage/MenuPage";

export const Main = () => {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="restaurants" element={<Restaurants />} />
				<Route path="menu/:idx" element={<MenuPage />} />
			</Routes>
		</div>
	);
};
