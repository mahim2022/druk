import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
	// const [data, setdata] = useState(null);
	const getData = async () => {
		const { data } = await axios.get("http://localhost:5000/post");
		console.log(data);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				></a>
				<button type="button" class="btn btn-default" onClick={getData}>
					button
				</button>
			</header>
		</div>
	);
}

export default App;
