import * as zillowConstants from '../constants/zillow.constants'

const initialState = {
  isLoading: false,
  hasData: false,
  response: {
    zpid: null,
    zestimate: null,
    rentZestimate: null,
    yearBuilt: null
  },
  fetchError: false
}

const zillow = (state = initialState, action) => {
  switch (action.type) {
    case zillowConstants.FETCH_FROM_ZILLOW_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case zillowConstants.FETCH_FROM_ZILLOW_FULFILLED:
      return {
        ...state,
        isLoading: false,
        hasData: true,
        response: action.payload.data
      }
    case zillowConstants.FETCH_FROM_ZILLOW_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasData: false,
        fetchError: true
      }
    default:
      return state
  }
}

export default zillow
