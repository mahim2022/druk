const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors());

app.use("/post", (req, res) => {
	res.send({ message: "the request works" });
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`);
// });

const mongoose = require("mongoose");

mongoose
	.connect(
		"mongodb+srv://mahim:9pyT5QgNRdKRLRLf@cluster0.tpcgh.mongodb.net/Cluster0?retryWrites=true&w=majority"
	)
	.then(() =>
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		})
	)
	.catch((error) => console.log(error));
