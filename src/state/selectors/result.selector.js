import { createSelector } from 'reselect'
import { yearBuiltSelector, zestimateSelector, rentZestimateSelector } from './zillow.selectors'
import { paymentSelector, additionalExpensesSelector } from './mortgage.selector'

export const maintenanceExpensesSelector = createSelector(
  yearBuiltSelector,
  zestimateSelector,
  (yearBuilt, zestimate) => {
    let total
    const year = new Date().getYear()
    if (year - yearBuilt < 5) {
      total = zestimate * 0.01
    } else if (year - yearBuilt < 10) {
      total = zestimate * 0.025
    } else if (year - yearBuilt < 15) {
      total = zestimate * 0.04
    } else {
      total = zestimate * 0.05
    }
    return Math.round(total / 12)
  }
)

const subTotalSelector = createSelector(
  paymentSelector,
  additionalExpensesSelector,
  maintenanceExpensesSelector,
  (payment, additionalExpenses, maintenanceExpenses) => {
    console.log('PAYMENT', payment)
    return Math.round(payment + additionalExpenses + maintenanceExpenses)
  }
)

export const minimumRentSelector = createSelector(
  subTotalSelector,
  subTotal => {
    console.log('SUBTOTAL: ', subTotal)
    return Math.round(subTotal * 12 / 11)
  }
)

export const potentialProfitSelector = createSelector(
  minimumRentSelector,
  rentZestimateSelector,
  (minimumRent, rentZestimate) => Math.round(rentZestimate - minimumRent)
)
