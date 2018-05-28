// Actions
const SET_STREET_ADDRESS = 'SET_STREET_ADDRESS'

// Reducer
const initialState = {
  address: {
    streetAddress: '',
    city: '',
    state: ''
  },
  zillowIsLoading: false,
  zillowHasData: false,
  zillowResponse: null
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREET_ADDRESS:
    default:
      return state
  }
}

// Action Creators

export default search
