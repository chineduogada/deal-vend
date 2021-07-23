import axios from "axios";
// import cookie from "utils/cookie";
import AppError from "./AppError";

// const token = cookie.getToken();

// Intercept all Errors
axios.interceptors.response.use(null, (err) => {
  const error = new AppError(err);

  return Promise.reject(error);
});

export const baseURL = process.env.NEXT_PUBLIC_DEALVEND_API_BASE_URI;

const defaultOptions = (explicitToken) => ({
  // timeout's the request in a minute by default
  timeout: 60 * 1000,
  // headers: {
  //   authorization: `Bearer ${explicitToken || token}`,
  // },
});

const buildOptions = (options) => ({
  ...defaultOptions(options?.token),
  ...options,
});
const buildURL = (path) => baseURL + path;

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

export default http;
