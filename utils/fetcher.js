import axios from "axios";

const buildUrl = (path) => `http://127.0.0.1:8080/api/v1${path}`;

const fetcher = (path) => {
  const URL = buildUrl(path);

  return axios.get(URL).then((res) => res.data);
};

export default fetcher;
