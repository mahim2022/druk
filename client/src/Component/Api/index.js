import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:5000" });

// const url = "http://localhost:5000";

export const fetchPost = () => {
	return Api.get("/post");
};

export const createBar = (data) => {
	return Api.post("/post", data);
};

export const fetchMenu = () => {
	return Api.get("/post/menu");
};
