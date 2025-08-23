import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL_ENDPOINT;

const ApiAuth = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

ApiAuth.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

ApiAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or unauthorized
      // Log out the user and redirect to login
      localStorage.removeItem("user");
      window.location.href = "/auth/login"; 
    }
    return Promise.reject(error);
  }
);

export default ApiAuth;

