import axios from "axios";

const buildUrl = (path) => `https://deal-vend.herokuapp.com/api/v1${path}`;

const fetcher = (path) => {
  const URL = buildUrl(path);

  return axios.get(URL).then((res) => res.data);
};

export default fetcher;
