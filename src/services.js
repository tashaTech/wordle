import axios from "axios";

const api = axios.create({
  baseURL: "https://api.frontendexpert.io/api/fe/",
  withCredentials: true,
});

export const apiRequest = async (url, option) => {
  return api(url, option)
    .then((res) => res)
    .catch((e) => Promise.reject(e));
};
