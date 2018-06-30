import * as searchConstants from '../constants/search.constants'

const initialState = {
  streetAddress: '',
  city: '',
  state: '',
  zip: ''
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case searchConstants.SET_STREET_ADDRESS:
      return {
        ...state,
        streetAddress: action.payload.streetAddress
      }
    case searchConstants.SET_CITY:
      return {
        ...state,
        city: action.payload.city
      }
    case searchConstants.SET_STATE:
      return {
        ...state,
        state: action.payload.state
      }
    case searchConstants.SET_ZIP:
      return {
        ...state,
        zip: action.payload.zip
      }
    default:
      return state
  }
}

export default search
