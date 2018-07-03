import * as zillowConstants from '../constants/zillow.constants'

const initialState = {
  isLoading: false,
  hasData: false,
  response: {
    zpid: 0,
    zestimate: 0,
    rentZestimate: 0,
    yearBuilt: 2018
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
