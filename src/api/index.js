import Axios from 'axios'

const zwsId = '12345-67890' // TODO: keep keys in env

export const getZillowDetails = (street, city, state) => {
  return Axios.get(`http://www.zillow.com/webservice/GetSearchResults?zws-id=${zwsId}&address=${street}&citystatezip=${city} ${state}`)
}
