import { createSelector } from 'reselect'
import { yearBuiltSelector, zestimateSelector, rentZestimateSelector } from './zillow.selectors'
import { paymentSelector, additionalExpensesSelector } from './mortgage.selector'

export const maintenanceExpensesSelector = createSelector(
  yearBuiltSelector,
  zestimateSelector,
  (yearBuilt, zestimate) => {
    let total
    const year = new Date().getFullYear()
    if ((year - yearBuilt) < 10) {
      total = zestimate * 0.01
    } else {
      total = zestimate * 0.02
    }
    return Math.round(total / 12)
  }
)

export const subTotalSelector = createSelector(
  paymentSelector,
  additionalExpensesSelector,
  maintenanceExpensesSelector,
  (payment, additionalExpenses, maintenanceExpenses) => {
    return Math.round(payment + additionalExpenses + maintenanceExpenses)
  }
)

export const minimumRentSelector = createSelector(
  subTotalSelector,
  subTotal => {
    return Math.round(subTotal * 12 / 11)
  }
)

export const potentialProfitSelector = createSelector(
  minimumRentSelector,
  rentZestimateSelector,
  (minimumRent, rentZestimate) => Math.round(rentZestimate - minimumRent)
)

export const isProfitableSelector = createSelector(
  potentialProfitSelector,
  (potentialProfit) => potentialProfit > 0
)
