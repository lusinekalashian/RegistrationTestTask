import axios from "axios";

const API_URL = "http://localhost:4000/";

const register = (username, email, password) => {
    return axios.post(API_URL + "registration", {
        username,
        email,
        password,
    });
};

export default {
    register
};