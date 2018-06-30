import * as searchActions from '../constants/search.constants'

export const setStreetAddress = (streetAddress) => {
  return {
    type: searchActions.SET_STREET_ADDRESS,
    payload: {
      streetAddress
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
