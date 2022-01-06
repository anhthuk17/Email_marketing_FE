import axios from '../plugin/axios';
const resource = '/histories'

export function getHistory() {
    return axios.get(`${resource}`);
    // http://localhost:3000/api/customers
}

export function createHistory(body) {
    console.log(id);
    return axios.post(`${resource}`, body);
}

// export function getBlogs(id) {

//     console.log("ssssssssssssssssssssssss");
//     return axios.get(`${resource}/${id}/blogs`);
// }