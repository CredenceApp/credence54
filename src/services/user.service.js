import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "https://jsonplaceholder.typicode.com";
const API_URL = "https://credenceapp-api.onrender.com/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getBuyerBoard() {
    // return axios.get(API_URL);
    return axios.get(API_URL + "buyer", { headers: authHeader() });
  }

  getSellerBoard() {
    // return axios.get(API_URL);
    return axios.get(API_URL + "seller", { headers: authHeader() });
  }

  getAdminBoard() {
    // return axios.get(API_URL);
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
