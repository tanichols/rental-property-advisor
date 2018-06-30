import axios from 'axios'

// configure base url
const ZillowClient = axios.create({
  baseURL: 'https://zillow-proxy.herokuapp.com'
})

export default ZillowClient
