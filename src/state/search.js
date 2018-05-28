import * as api from '../api'

// Actions
export const SET_STREET = 'SET_STREET_ADDRESS'
export const SET_CITY = 'SET_CITY'
export const SET_STATE = 'SET_STATE'
export const FETCH_FROM_ZILLOW = 'FETCH_FROM_ZILLOW'
export const FETCH_FROM_ZILLOW_PENDING = 'FETCH_FROM_ZILLOW_PENDING'
export const FETCH_FROM_ZILLOW_FULFILLED = 'FETCH_FROM_ZILLOW_FULFILLED'
export const FETCH_FROM_ZILLOW_REJECTED = 'FETCH_FROM_ZILLOW_REJECTED'

// Reducer
const initialState = {
  address: {
    street: '',
    city: '',
    state: ''
  },
  zillowIsLoading: false,
  zillowHasData: false,
  zillowResponse: null,
  zillowFetchError: false
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
    case FETCH_FROM_ZILLOW_PENDING:
      return {
        ...state,
        zillowIsLoading: true
      }
    case FETCH_FROM_ZILLOW_FULFILLED:
      return {
        ...state,
        zillowIsLoading: false,
        zillowHasData: true,
        zillowResponse: action.payload.data
      }
    case FETCH_FROM_ZILLOW_REJECTED:
      return {
        ...state,
        zillowIsLoading: false,
        zillowFetchError: true
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

// Side Effects
export const fetchFromZillow = (street, city, state) => {
  return {
    type: FETCH_FROM_ZILLOW,
    payload: api.getZillowDetails(street, city, state)
  }
}

export default search
