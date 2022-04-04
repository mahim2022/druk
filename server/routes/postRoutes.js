// const express = require("express");
import express from "express";
import {
	addItem,
	DeleteItem,
	editItem,
	getPosts,
} from "../ControllerFunctions/postFunctions.js";

const router = express.Router();

router.get("/", getPosts);
router.patch("/add/:id", addItem);
router.patch("/edit/:id", editItem);
router.delete("/delete/:id/:itemId", DeleteItem);

export default router;
