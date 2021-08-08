import axios from "axios";
import AppError from "./AppError";

// Intercept all Errors
axios.interceptors.response.use(null, (err) => {
  const error = new AppError(err);

  return Promise.reject(error);
});

export const baseURL =
  // "https://deal-vend.herokuapp.com/api/v1";
  "http://localhost:8080/api/v1";

const defaultOptions = (explicitToken) => ({
  // timeout's the request in a minute by default
  timeout: 60 * 1000,
  withCredentials: true,
  credentials: "include",
  // headers: {
  //   authorization: `Bearer ${explicitToken}`,
  // },
});

const buildOptions = (options) => ({
  ...defaultOptions(options?.token),
  ...options,
});
const buildURL = (path) => {
  console.log(baseURL, path);

  return baseURL + path;
};

const http = {
  get: (path, options) =>
    axios.get(options?.url || buildURL(path), buildOptions(options)),
  post: (path, data, options) =>
    axios.post(options?.url || buildURL(path), data, buildOptions(options)),
  patch: (path, data, options) =>
    axios.patch(options?.url || buildURL(path), data, buildOptions(options)),
  delete: (path, options) =>
    axios.delete(options?.url || buildURL(path), buildOptions(options)),
};

export const fetchProducts = async (path) => {
  return http.get(path).then((res) => res.data);
};

// Helpers
export const currentUser = async () => {
  const {
    data: {
      data: { user: data },
    },
  } = await http.get("/users/me");

  return data;
};

export const updateMe = async (body) => {
  const {
    data: {
      data: { user: data },
    },
  } = await http.patch("/users/update-me", body);

  return data;
};

export const deleteMe = async (id) => {
  await http.delete("/users/delete-me", { params: { id } });
};

export const logout = async () => {
  await http.post("/users/auth/logout");
};

export const login = async (body) => {
  await http.post("/users/auth/login", body);
};

export const changeMyPassword = async (body) => {
  await http.patch("/users/auth/change-my-password", body);
};

export const signup = async (body) => {
  await http.post("/users/auth/signup", body);
};

export const getCart = async () => {
  const {
    data: {
      data: { cart },
    },
  } = await http.get("/cart");

  return cart;
};

export const clearCart = async () => {
  await http.delete("/cart");
};

export const addNewCartItem = async (body) => {
  const {
    data: {
      data: { cart },
    },
  } = await http.patch("/cart", body);

  return cart;
};

export const increaseCartItem = async (body) => {
  const {
    data: {
      data: { cart },
    },
  } = await http.patch("/cart", { ...body, query: "increase" });

  return cart;
};

export const decreaseCartItem = async (body) => {
  const {
    data: {
      data: { cart },
    },
  } = await http.patch("/cart", { ...body, query: "decrease" });

  return cart;
};

export const deleteCartItem = async (body) => {
  await http.patch("/cart", { ...body, query: "delete" });
};

export default http;
