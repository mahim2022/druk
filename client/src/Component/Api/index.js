import axios from "axios";
import { useEffect } from "react";
import { DataCounter } from "../States/RestaurantDataUpdateCounter/DataCounter";

const Api = axios.create({ baseURL: "http://localhost:5000" });

// const url = "http://localhost:5000";

export const fetchPost = async () => {
	const { data } = await Api.get("/post");
	return data;
};

export const fetchMenu = async (id) => {
	const { data } = await Api.get(`post/menu/${id}`);
	return data;
};

export const addItem = (id, newItem) => {
	return Api.patch(`/post/add/${id}`, newItem);
};

export const editItem = (id, newItem) => {
	return Api.patch(`/post/edit/${id}`, newItem);
};

export const DeleteItem = (id, itemId) => {
	return Api.delete(`/post/delete/${id}/${itemId}`);
};

//////////User routes/////

export const SignUp = (data) => {
	return Api.post("/customer/signup", data).catch((error) => {
		return error.response.status;
	});
};

export const SignIn = (data) => {
	return Api.post("/customer/signin", data).catch((error) => {
		return error.response.status;
	});
};
