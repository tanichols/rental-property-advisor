import * as mortgageActions from '../constants/mortgage.constants'

const initialState = {
  mortgage: 1061,
  expenses: 200
}

const mortgage = (state = initialState, action) => {
  switch (action.type) {
    case mortgageActions.SET_MORTGAGE:
      return {
        ...state,
        mortgage: action.payload.mortgage
      }
    case mortgageActions.SET_EXPENSES:
      return {
        ...state,
        expenses: action.payload.expenses
      }
    default:
      return state
  }
}

export default mortgage
