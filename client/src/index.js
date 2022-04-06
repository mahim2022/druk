import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RestaurantStateProvider } from "./Component/States/RestaurantState";
import { DataCounterProvider } from "./Component/States/RestaurantDataUpdateCounter/DataCounter";
import { CartItemStateProvider } from "./Component/States/CartItemState/CartItemState.jsx";
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<CartItemStateProvider>
				<DataCounterProvider>
					<RestaurantStateProvider>
						<App />
					</RestaurantStateProvider>
				</DataCounterProvider>
			</CartItemStateProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
