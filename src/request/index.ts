/* eslint-disable no-console */
import axios from 'axios'
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10 * 1000,
})

request.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    clientType: 'client',
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

request.interceptors.response.use((config) => {
  console.log({ config })
  return config.data
}, (error) => {
  console.log(error)
})

export default request
