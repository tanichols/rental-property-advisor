import axios from 'axios'

// Actions
export const SET_STREET = 'SET_STREET_ADDRESS'
export const SET_CITY = 'SET_CITY'
export const SET_STATE = 'SET_STATE'
export const SET_ZIP = 'SET_ZIP'
export const SET_INPUT_ERROR = 'SET_INPUT_ERROR'
export const FETCH_FROM_ZILLOW = 'FETCH_FROM_ZILLOW'
export const FETCH_FROM_ZILLOW_PENDING = 'FETCH_FROM_ZILLOW_PENDING'
export const FETCH_FROM_ZILLOW_FULFILLED = 'FETCH_FROM_ZILLOW_FULFILLED'
export const FETCH_FROM_ZILLOW_REJECTED = 'FETCH_FROM_ZILLOW_REJECTED'

// Reducer
const initialState = {
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    complete: false
  },
  inputError: {
    inputError: false,
    inputErrorMessage: ''
  },
  zillow: {
    zillowIsLoading: false,
    zillowHasData: false,
    zillowResponse: null,
    zillowFetchError: false
  }
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload.street
        }
      }
    case SET_CITY:
      return {
        ...state,
        address: {
          ...state.address,
          city: action.payload.city
        }
      }
    case SET_STATE:
      return {
        ...state,
        address: {
          ...state.address,
          state: action.payload.state
        }
      }
    case SET_ZIP:
      return {
        ...state,
        address: {
          ...state.address,
          zip: action.payload.zip
        }
      }
    case SET_INPUT_ERROR:
      return {
        ...state,
        inputError: {
          inputError: true,
          inputErrorMessage: action.payload.message
        }
      }
    case FETCH_FROM_ZILLOW_PENDING:
      return {
        ...state,
        zillow: {
          ...state.zillow,
          zillowIsLoading: true
        }
      }
    case FETCH_FROM_ZILLOW_FULFILLED:
      return {
        ...state,
        zillow: {
          ...state.zillow,
          zillowIsLoading: false,
          zillowHasData: true,
          zillowResponse: action.payload.data
        }
      }
    case FETCH_FROM_ZILLOW_REJECTED:
      return {
        ...state,
        zillow: {
          ...state.zillow,
          zillowIsLoading: false,
          zillowFetchError: true
        }
      }
    default:
      return state
  }
}

// Action Creators
export const setStreet = (street) => {
  return {
    type: SET_STREET,
    payload: {
      street
    }
  }
}

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: {
      city
    }
  }
}

export const setState = (state) => {
  return {
    type: SET_STATE,
    payload: {
      state
    }
  }
}

export const setZip = (zip) => {
  return {
    type: SET_ZIP,
    payload: {
      zip
    }
  }
}

// Side Effects
export const fetchFromZillow = (state) => {
  const address = state.address
  if (getAddressComplete(state)) {
    const citystatezip = address.zip ? address.zip : address.city + ' ' + address.state
    console.log(citystatezip)
    const url = `https://zillow-proxy.herokuapp.com/zillow?street=${address.street}&citystatezip=${citystatezip}`
    return {
      type: FETCH_FROM_ZILLOW,
      payload: axios.get(url)
    }
  } else {
    return {
      type: SET_INPUT_ERROR,
      payload: {
        message: 'Address is incomplete'
      }
    }
  }
}

// Selectors

export const getAddressComplete = (state) => {
  const address = state.address
  return address.street !== '' && (address.zip !== '' || (address.city !== '' && address.state !== ''))
}

export default search
