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
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

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
const socketIoPort = process.env.SOCKET_IO_PORT;
mongoose
	.connect(process.env.CONNECTION_URL)
	.then(() =>
		app.listen(port, () => {
			console.log(
				`mongooseIndex on port ${port} and socketIo on ${socketIoPort}`
			);
		})
	)
	.catch((error) =>
		console.log(`Mongo db is disconnected with error=>{${error}}`)
	);

const io = new Server(socketIoPort, {
	cors: { origin: ["http://localhost:3000"] },
});

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
