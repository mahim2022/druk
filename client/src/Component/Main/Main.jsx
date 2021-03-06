import ResponsiveAppBar from "../AppBar/AppBar";
import { HomePage } from "../Pages/HomePage/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import { Restaurants } from "../Pages/Restaurants/Restaurants";
import { MenuPage } from "../Pages/MenuPage/MenuPage";
import { BarAssociation } from "../Pages/BarAssociation/BarAssociation";
import { StartPage } from "../Pages/StartPage/StartPage";
import { OwnerLogin } from "../Pages/BarOwnerLoginPage/OwnerLogin";
import { CheckOutPage } from "../Pages/CheckOutPage/CheckOutPage";
import { CustomerSignIn } from "../Pages/CustomerSignIn/CustomerSignIn";
import { useState, useEffect } from "react";
import decode from "jwt-decode";
import { PaymentPage } from "../Pages/Payment Page/PaymentPage";
import { DeliveryPage } from "../Pages/Delivery Page/DeliveryPage";
import { CustomerOrder } from "../Pages/CustomerOrders/CustomerOrder";
import { CustomerProfile } from "../Pages/Customer/CustomerProfile/CustomerProfile";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const Main = () => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("Profile"))
	);
	useEffect(() => {
		if (currentUser?.token) {
			const decodedToken = decode(currentUser?.token);
			if (decodedToken.exp * 1000 < new Date().getTime()) {
				localStorage.clear();
			}
		}
	}, [currentUser]);

	return (
		<div>
			<ResponsiveAppBar></ResponsiveAppBar>
			<Routes>
				<Route path="/" element={<StartPage />} />
				<Route path="customer" element={<HomePage />} />
				<Route path="restaurants" element={<Restaurants />} />
				<Route path="menu/:idx" element={<MenuPage />} />
				<Route path="bar/:idx" element={<BarAssociation />} />
				<Route path="ownerlogin" element={<OwnerLogin />} />
				<Route path="checkoutpage" element={<CheckOutPage />} />
				<Route path="customersignin" element={<CustomerSignIn />} />
				<Route path="paymentpage" element={<PaymentPage />} />
				<Route path="delivery" element={<DeliveryPage />} />
				<Route path="customerorders" element={<CustomerOrder />} />
				<Route path="customerprofile" element={<CustomerProfile />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};
