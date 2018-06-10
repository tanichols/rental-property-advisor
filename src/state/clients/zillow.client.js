// axiosconfig.js
import axios from 'axios'

// configure base url
const zillowClient = axios.create({
  baseURL: 'https://zillow-proxy.herokuapp.com'
})

export default zillowClient
