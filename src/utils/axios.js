import axios from "axios";

// console.log(REACT_APP_BASE_URL);
const axiosApiIntances = axios.create({
  // baseURL: "https://project-tickitz.herokuapp.com/"
  baseURL: "http://localhost:3001/"
  // baseURL: process.env.REACT_APP_BASE_URL
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
    if (error.response.status === 403) {
      if (error.response.data.message !== "jwt expired") {
        // alert(error.response.data.msg);
        localStorage.clear();
        window.location.href = "/signin";
      } else {
        const refreshToken = localStorage.getItem("refreshToken");
        // console.log(refreshToken);
        axiosApiIntances
          .post("auth/refresh", { refreshToken })
          .then((res) => {
            // res = {
            //   data: {
            //     data: {
            //       id: ...
            //       token: ...
            //       refreshToken: ...
            //     }
            //   }
            // }
            // console.log(res);
            // alert("token baru berhasil di dapatkan");
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("refreshToken", res.data.data.refreshToken);
            window.location.reload();
          })
          .catch((err) => {
            // alert(error.response.data.msg);
            localStorage.clear();
            window.location.href = "/signin";
          });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
