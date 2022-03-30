import postFunctions from "./routes/postRoutes.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors());

app.use("/post", postFunctions);

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
		"mongodb+srv://mahim:BSKsAhjHSB3DLRkW@Cluster0.tpcgh.mongodb.net/Druk?retryWrites=true&w=majority"
	)
	.then(() =>
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		})
	)
	.catch((error) =>
		console.log(`Mongo db is disconnected with error=>{${error}}`)
	);
