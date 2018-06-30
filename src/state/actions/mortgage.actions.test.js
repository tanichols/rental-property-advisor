import * as mortgageConstants from '../constants/mortgage.constants'
import * as mortgageActions from '../actions/mortgage.actions'

describe('mortgage actions', () => {
  it('should create an action to set mortgage payment', () => {
    const payment = 1234.56
    const expectedAction = {
      type: mortgageConstants.SET_MORTGAGE_PAYMENT,
      payload: {
        payment
      }
    }
    expect(mortgageActions.setMortgagePayment(payment)).toEqual(expectedAction)
  })
  it('should create an action to set additional expenses', () => {
    const additionalExpenses = 123.45
    const expectedAction = {
      type: mortgageConstants.SET_ADDITIONAL_EXPENSES,
      payload: {
        additionalExpenses
      }
    }
    expect(mortgageActions.setAdditionalExpenses(additionalExpenses)).toEqual(expectedAction)
  })
})
