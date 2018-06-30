import * as searchActions from '../constants/search.constants'

const initialState = {
  streetAddress: '',
  city: '',
  state: '',
  zip: ''
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case searchActions.SET_STREET_ADDRESS:
      return {
        ...state,
        streetAddress: action.payload.streetAddress
      }
    case searchActions.SET_CITY:
      return {
        ...state,
        city: action.payload.city
      }
    case searchActions.SET_STATE:
      return {
        ...state,
        state: action.payload.state
      }
    case searchActions.SET_ZIP:
      return {
        ...state,
        zip: action.payload.zip
      }
    default:
      return state
  }
}

export default search
