import axios from 'axios'

const Api = axios.create({
    // baseURL: "http://localhost:3000/api",
    baseURL: "https://tropical-tech.netlify.app/api",
})


export default Api