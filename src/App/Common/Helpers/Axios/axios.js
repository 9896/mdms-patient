import Vue from "vue";
import Axios from "axios";
import store from "@/store";
import swal from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


let axios = Axios.create({
    baseURL: process.env.VUE_APP_API_ROOT,
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': '*',
//       },
 });


Vue.prototype.$axios = axios

//Request interceptor
Vue.prototype.$axios.interceptors.request.use(
    function (config) {
        config.headers.Authorization = 'Bearer ' + store.getters.access_token;
        return config
    },
    function (error) {
        //Do something
        if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            swal("Ooops! :(", "Something went wrong", "error").then();
            console.log(error.request);
        }
        console.log("request errror...");
        console.log(error)
        return Promise.reject(error);
    }
);

//Response interceptor
Vue.prototype.$axios.interceptors.response.use(
    function (response) {
        //Do something with response data
        return response
    },
    function (error) {
        if (!error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            swal("Network Error :(", "Kindly Check your connection", "error").then();
            return Promise.reject(error);
        }
        switch (error.response.status) {
            case 401:
                store.dispatch("logout").then();
                return Promise.reject(error);
            case 403:
                swal(error.response.data.message, "", "error").then();
                return Promise.reject(error);
            case 500:
                swal(
                    "Server Error :(",
                    "Kindly contact your web master",
                    "error"
                ).then();
                return Promise.reject(error);
            case 422:
                break;
            case 400:
                break;
            default:
                swal("Error :(", "Kindly contact your web master", "error").then();
        }
        return Promise.reject(error);
    }
);

export default axios;