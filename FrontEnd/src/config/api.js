import axios from "axios"

export const API_BASE_URL ="HTTP://LOCALHOST:5454";

const api = axios.create({
    baseURL : API_BASE_URL,
    headers: {
        "context-Type" : "application/json"
    }
});



export default api;