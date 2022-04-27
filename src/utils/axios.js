import axios from "axios";

const axiosApiIntances = axios.create({
  // baseURL: "https://project-tickitz.herokuapp.com/"
  baseURL: "http://localhost:3001/"
});

axiosApiIntances.interceptors.request.use(
  function (config) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")} `
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApiIntances.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
