// const express = require("express");
import express from "express";
import { getPosts, createBar } from "../ControllerFunctions/postFunctions.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createBar);

export default router;
