import axios from 'axios'
import * as searchActions from '../constants/search.constants'
import { getAddressComplete } from '../reducers/search.reducer'

export const setStreet = (street) => {
  return {
    type: searchActions.SET_STREET,
    payload: {
      street
    }
  }
}

export const setCity = (city) => {
  return {
    type: searchActions.SET_CITY,
    payload: {
      city
    }
  }
}

export const setState = (state) => {
  return {
    type: searchActions.SET_STATE,
    payload: {
      state
    }
  }
}

export const setZip = (zip) => {
  return {
    type: searchActions.SET_ZIP,
    payload: {
      zip
    }
  }
}

export const fetchFromZillow = (state) => {
  const address = state.address
  if (getAddressComplete(state)) {
    const citystatezip = address.zip ? address.zip : address.city + ' ' + address.state
    console.log(citystatezip)
    const url = `https://zillow-proxy.herokuapp.com/zillow?street=${address.street}&citystatezip=${citystatezip}`
    return {
      type: searchActions.FETCH_FROM_ZILLOW,
      payload: axios.get(url)
    }
  } else {
    return {
      type: searchActions.SET_INPUT_ERROR,
      payload: {
        message: 'Address is incomplete'
      }
    }
  }
}
