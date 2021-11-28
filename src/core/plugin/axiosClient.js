import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://todolist.phuongnam.repl.co',
    headers: {
        'Content-Type': 'application/json'
    }
})


axiosClient.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)

    })


axiosClient.interceptors.response.use(
    response => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    })

export default axiosClient