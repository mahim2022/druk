// const express = require("express");
import express from "express";
import {
	addItem,
	checkOrderStatus,
	DeleteItem,
	editItem,
	getBar,
	getBarOrders,
	getMenu,
	invoice,
	ProccesOrder,
} from "../ControllerFunctions/postFunctions.js";

const router = express.Router();

router.get("/", getBar);
router.get("/menu/:id", getMenu);
router.patch("/add/:id", addItem);
router.patch("/edit/:id", editItem);
router.delete("/delete/:itemId", DeleteItem);
router.post("/order", invoice);
router.get("/getbarorders/:id", getBarOrders);
router.post("/processedOrder/:id", ProccesOrder);
router.get("/checkorderstatus/:id", checkOrderStatus);
export default router;
