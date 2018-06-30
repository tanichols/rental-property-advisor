import mortgage from './mortgage.reducer'
import * as mortgageActions from '../actions/mortgage.actions'

describe('mortgage reducer', () => {
  it('should return the initial state', () => {
    expect(mortgage(undefined, {})).toEqual({
      payment: 1061,
      additionalExpenses: 60
    })
  })
  it('should handle SET_MORTGAGE_PAYMENT', () => {
    const expectedPayment = 1234.56
    expect(mortgage(undefined, mortgageActions.setMortgagePayment(expectedPayment))).toEqual({
      payment: expectedPayment,
      additionalExpenses: 60
    })
  })
  it('should handle SET_ADDITIONAL_EXPENSES', () => {
    const expectedAdditionalExpenses = 123.45
    expect(mortgage(undefined, mortgageActions.setAdditionalExpenses(expectedAdditionalExpenses))).toEqual({
      payment: 1061,
      additionalExpenses: expectedAdditionalExpenses
    })
  })
})
