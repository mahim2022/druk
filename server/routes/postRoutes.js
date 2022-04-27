// const express = require("express");
import express from "express";
import {
	addItem,
	DeleteItem,
	editItem,
	getBar,
	getMenu,
	processOrder,
} from "../ControllerFunctions/postFunctions.js";

const router = express.Router();

router.get("/", getBar);
router.get("/menu/:id", getMenu);
router.patch("/add/:id", addItem);
router.patch("/edit/:id", editItem);
router.delete("/delete/:itemId", DeleteItem);
router.post("/order", processOrder);
export default router;
