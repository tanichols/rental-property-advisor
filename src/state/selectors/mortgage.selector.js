import { createSelector } from 'reselect'

const mortgageSelector = state => state.mortgage

export const paymentSelector = createSelector(
  mortgageSelector,
  mortgage => mortgage.payment
)

export const additionalExpensesSelector = createSelector(
  mortgageSelector,
  mortgage => mortgage.additionalExpenses
)
