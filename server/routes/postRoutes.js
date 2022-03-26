// const express = require("express");
import express from "express";
import {
	getPosts,
	createBar,
	getMenu,
} from "../ControllerFunctions/postFunctions.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createBar);
router.get("/menu", getMenu);

export default router;
