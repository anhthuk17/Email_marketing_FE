import axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
        "Pragma": "no-cache",
        "Expires": "0",
    }
});
export default service;
// export default axios;