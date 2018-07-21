import { paymentSelector, additionalExpensesSelector } from './mortgage.selector'

describe('paymentSelector', () => {
  it('should return the payment', () => {
    const state = {
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(paymentSelector(state)).toEqual(1061)
  })
})

describe('additionalExpensesSelector', () => {
  it('should return the additionalExpenses', () => {
    const state = {
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(additionalExpensesSelector(state)).toEqual(60)
  })
})
