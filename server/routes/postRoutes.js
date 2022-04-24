// const express = require("express");
import express from "express";
import {
	addItem,
	DeleteItem,
	editItem,
	getBar,
	getMenu,
} from "../ControllerFunctions/postFunctions.js";

const router = express.Router();

router.get("/", getBar);
router.get("/menu/:id", getMenu);
router.patch("/add/:id", addItem);
router.patch("/edit/:id", editItem);
router.delete("/delete/:id/:itemId", DeleteItem);

export default router;
