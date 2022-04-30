import postFunctions from "./routes/postRoutes.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/UserRoutes.js";
import { Server } from "socket.io";
import {
	MenuItem,
	OrderList,
	ProcessedOrder,
} from "./SchemaModel/RestaurantsSchema.js";

const app = express();
const port = 5000;

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors());

/////for getting store data///
app.use("/post", postFunctions);
////for getting customerUserData///
app.use("/customer", userRoutes);

app.get("/hi", (req, res) => {
	res.send("Hellow World");
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`);
// });

mongoose
	.connect(
		"mongodb+srv://mahim2022:M8354211m@Cluster0.tpcgh.mongodb.net/Druk?retryWrites=true&w=majority"
	)
	.then(() =>
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		})
	)
	.catch((error) =>
		console.log(`Mongo db is disconnected with error=>{${error}}`)
	);

const io = new Server(4000, { cors: { origin: ["http://localhost:3000"] } });

io.on("connection", (socket) => {
	MenuItem.watch().on("change", (change) => {
		socket.emit("menuUpdate");
	});
	OrderList.watch().on("change", (change) => {
		socket.emit("newOrder");
	});
	ProcessedOrder.watch().on("change", (change) => {
		socket.emit("orderUpdate");
	});
});
