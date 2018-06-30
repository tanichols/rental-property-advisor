import * as mortgageConstants from '../constants/mortgage.constants'

const initialState = {
  payment: 1061,
  additionalExpenses: 60
}

const mortgage = (state = initialState, action) => {
  switch (action.type) {
    case mortgageConstants.SET_MORTGAGE_PAYMENT:
      return {
        ...state,
        payment: action.payload.payment
      }
    case mortgageConstants.SET_ADDITIONAL_EXPENSES:
      return {
        ...state,
        additionalExpenses: action.payload.additionalExpenses
      }
    default:
      return state
  }
}

export default mortgage
