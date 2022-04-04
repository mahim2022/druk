import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:5000" });

// const url = "http://localhost:5000";

export const fetchPost = () => {
	return Api.get("/post");
};

export const addItem = (id, newItem) => {
	return Api.patch(`/post/add/${id}`, newItem);
};

export const editItem = (id, newItem) => {
	return Api.patch(`/post/edit/${id}`, newItem);
};
