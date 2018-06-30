import * as mortgageActions from '../constants/mortgage.constants'

export const setMortgage = (mortgage) => {
  return {
    type: mortgageActions.SET_MORTGAGE,
    payload: {
      mortgage
    }
  }
}

export const setExpenses = (expenses) => {
  return {
    type: mortgageActions.SET_EXPENSES,
    payload: {
      expenses
    }
  }
}
