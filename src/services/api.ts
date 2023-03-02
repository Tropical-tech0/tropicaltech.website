import axios, { AxiosInstance } from 'axios'

const Api: AxiosInstance = axios.create({
    // baseURL: "http://localhost:3000/api",
    baseURL: process.env.API_URL,
})

export default Api