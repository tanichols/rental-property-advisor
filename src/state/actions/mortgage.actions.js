import * as mortgageConstants from '../constants/mortgage.constants'

export const setMortgagePayment = (payment) => {
  return {
    type: mortgageConstants.SET_MORTGAGE_PAYMENT,
    payload: {
      payment
    }
  }
}

export const setAdditionalExpenses = (additionalExpenses) => {
  return {
    type: mortgageConstants.SET_ADDITIONAL_EXPENSES,
    payload: {
      additionalExpenses
    }
  }
}
