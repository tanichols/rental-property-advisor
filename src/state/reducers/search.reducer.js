import * as searchActions from '../constants/search.constants'

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
    case searchActions.SET_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload.street
        }
      }
    case searchActions.SET_CITY:
      return {
        ...state,
        address: {
          ...state.address,
          city: action.payload.city
        }
      }
    case searchActions.SET_STATE:
      return {
        ...state,
        address: {
          ...state.address,
          state: action.payload.state
        }
      }
    case searchActions.SET_ZIP:
      return {
        ...state,
        address: {
          ...state.address,
          zip: action.payload.zip
        }
      }
    case searchActions.SET_INPUT_ERROR:
      return {
        ...state,
        inputError: {
          inputError: true,
          inputErrorMessage: action.payload.message
        }
      }
    case searchActions.FETCH_FROM_ZILLOW_PENDING:
      return {
        ...state,
        zillow: {
          ...state.zillow,
          zillowIsLoading: true
        }
      }
    case searchActions.FETCH_FROM_ZILLOW_FULFILLED:
      return {
        ...state,
        zillow: {
          ...state.zillow,
          zillowIsLoading: false,
          zillowHasData: true,
          zillowResponse: action.payload.data
        }
      }
    case searchActions.FETCH_FROM_ZILLOW_REJECTED:
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

export default search
