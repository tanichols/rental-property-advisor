// axiosconfig.js
import axios from 'axios'

// configure base url
const instance = axios.create({
  baseURL: 'https://zillow-proxy.herokuapp.com'
})

export default instance
