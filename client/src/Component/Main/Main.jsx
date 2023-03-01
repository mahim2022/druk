import ResponsiveAppBar from "../AppBar/AppBar";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import decode from "jwt-decode";
import { Loader } from "../Loader/Loader";

// import HomePage from "../Pages/HomePage/HomePage";

// import { Restaurants } from "../Pages/Restaurants/Restaurants";
const Restaurants = lazy(() => import("../Pages/Restaurants/Restaurants"));

// import { MenuPage } from "../Pages/MenuPage/MenuPage";
const MenuPage = lazy(() => import("../Pages/MenuPage/MenuPage"));

// import { BarAssociation } from "../Pages/BarAssociation/BarAssociation";
const BarAssociation = lazy(() =>
	import("../Pages/BarAssociation/BarAssociation")
);

// import { StartPage } from "../Pages/StartPage/StartPage";
const StartPage = lazy(() => import("../Pages/StartPage/StartPage"));

// import { OwnerLogin } from "../Pages/BarOwnerLoginPage/OwnerLogin";
const OwnerLogin = lazy(() => import("../Pages/BarOwnerLoginPage/OwnerLogin"));

// import { CheckOutPage } from "../Pages/CheckOutPage/CheckOutPage";
const CheckOutPage = lazy(() => import("../Pages/CheckOutPage/CheckOutPage"));

// import { CustomerSignIn } from "../Pages/CustomerSignIn/CustomerSignIn";
const CustomerSignIn = lazy(() =>
	import("../Pages/CustomerSignIn/CustomerSignIn")
);

// import { PaymentPage } from "../Pages/Payment Page/PaymentPage";
const PaymentPage = lazy(() => import("../Pages/Payment Page/PaymentPage"));

// import { DeliveryPage } from "../Pages/Delivery Page/DeliveryPage";
const DeliveryPage = lazy(() => import("../Pages/Delivery Page/DeliveryPage"));

// import { CustomerOrder } from "../Pages/CustomerOrders/CustomerOrder";
const CustomerOrder = lazy(() =>
	import("../Pages/CustomerOrders/CustomerOrder")
);

// import { CustomerProfile } from "../Pages/Customer/CustomerProfile/CustomerProfile";
const CustomerProfile = lazy(() =>
	import("../Pages/Customer/CustomerProfile/CustomerProfile")
);

// import { ErrorPage } from "../ErrorPage/ErrorPage";
const ErrorPage = lazy(() => import("../ErrorPage/ErrorPage"));

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));

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
			<Suspense fallback={<Loader></Loader>}>
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
			</Suspense>
		</div>
	);
};
