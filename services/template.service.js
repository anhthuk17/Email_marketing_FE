import axios from '../plugin/axios';
const resource = '/templates'

export function getTemplate() {
    return axios.get(`${resource}`);
    // http://localhost:3000/api/customers
}

export function createTemplate(body) {
    console.log(id);
    return axios.post(`${resource}`, body);
}

// export function getBlogs(id) {

//     console.log("ssssssssssssssssssssssss");
//     return axios.get(`${resource}/${id}/blogs`);
// }