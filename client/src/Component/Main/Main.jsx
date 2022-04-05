import ResponsiveAppBar from "../AppBar/AppBar";
import { HomePage } from "../Pages/HomePage/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import { Restaurants } from "../Pages/Restaurants/Restaurants";
import { MenuPage } from "../Pages/MenuPage/MenuPage";
import { BarAssociation } from "../Pages/BarAssociation/BarAssociation";
import { StartPage } from "../Pages/StartPage/StartPage";
import { OwnerLogin } from "../Pages/BarOwnerLoginPage/OwnerLogin";

export const Main = () => {
	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Routes>
				<Route path="customer" element={<HomePage />} />
				<Route path="restaurants" element={<Restaurants />} />
				<Route path="menu/:idx" element={<MenuPage />} />
				<Route path="bar/:idx" element={<BarAssociation />} />
				<Route path="/" element={<StartPage />} />
				<Route path="ownerlogin" element={<OwnerLogin />} />
			</Routes>
		</div>
	);
};
