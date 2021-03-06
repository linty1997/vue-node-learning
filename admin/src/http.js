import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from './router'

const http = axios.create({
    baseURL: "http://localhost:3000/admin/api"
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
  
http.interceptors.response.use(res => {
    return res  
}, err => {
    ElMessage.error({ showClose: true, message: err.response.data.message })

    if (err.response.status === 401) {
        router.push('/login')
    }

    return Promise.reject(err)
})

export default http     