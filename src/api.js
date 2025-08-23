import axios from "axios";
import { toast } from "react-toastify";
const token = localStorage.getItem('token');

export const MakePostRequest = (url, data)=>{
        axios.post(url,data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
                // console.log('hello')
        })
        // .then(resData => {
        //     resolve(resData)
        // })
        .catch(error => {
            // console.log( error);
            toast.error(error)
        });
};
export const MakeGetRequest = (url, successMsg, failedMsg)=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
    //   console.log(data)
    })
    .catch(error => {
    //  console.log(error)
    })
}


// import axios from "axios";

// const API_URL = "https://credenceapp-api.onrender.com/users"

// const instance = axios.create({
//     baseURL: API_URL,

// })

// class TransactionService {
//     createTransaction(transactionData) {
//         return instance.post("/api/transaction/create", transactionData)
//         .then(response => {
//             if (response.data.accessToken) {
//                 localStorage.setItem("user", JSON.stringify(response.data))
//             };

//             return response.data;
//         });
//     }

//     logout() {
//         localStorage.removeItem("user")
//     }

//     register(username, email, password) {
//         return axios.post("signup", {
//             username,
//             email,
//             password
//         })
//     }

//     getCurrentUser() {
//         return JSON.parse(localStorage.getItem("user"))
//     }
// }

// export default new TransactionService;