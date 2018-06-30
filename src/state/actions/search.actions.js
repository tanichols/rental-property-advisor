import * as searchConstants from '../constants/search.constants'

export const setStreetAddress = (streetAddress) => {
  return {
    type: searchConstants.SET_STREET_ADDRESS,
    payload: {
      streetAddress
    }
  }
}

export const setCity = (city) => {
  return {
    type: searchConstants.SET_CITY,
    payload: {
      city
    }
  }
}

export const setState = (state) => {
  return {
    type: searchConstants.SET_STATE,
    payload: {
      state
    }
  }
}

export const setZip = (zip) => {
  return {
    type: searchConstants.SET_ZIP,
    payload: {
      zip
    }
  }
}
