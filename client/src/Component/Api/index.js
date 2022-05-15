import axios from "axios";
import { useEffect } from "react";
import { DataCounter } from "../States/RestaurantDataUpdateCounter/DataCounter";

const Api = axios.create({ baseURL: "https://modpanda.herokuapp.com/" });

// const url = "http://localhost:5000";

////gets all restaurants////
export const fetchPost = async () => {
	const { data } = await Api.get("/post");
	return data;
};

export const fetchMenu = async (id, type) => {
	const { data } = await Api.post(`post/menu/${id}`, type);
	return data;
};

export const addItem = (id, newItem) => {
	return Api.patch(`/post/add/${id}`, newItem);
};

export const editItem = (id, newItem) => {
	return Api.patch(`/post/edit/${id}`, newItem);
};

export const DeleteItem = (itemId) => {
	return Api.delete(`/post/delete/${itemId}`);
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

///processing orders//
export const order = (data) => {
	return Api.post("/post/order", data);
};

export const getBarOrder = (id) => {
	return Api.get(`/post/getbarorders/${id}`);
};

export const processedOrder = (id, status) => {
	return Api.post(`/post/processedOrder/${id}`, status);
};

export const checkOrderStatus = (id) => {
	return Api.get(`/post/checkorderstatus/${id}`);
};

export const customerOrders = (customerId) => {
	return Api.get(`/post/getuserorders/${customerId}`);
};
