import { maintenanceExpensesSelector, subTotalSelector, minimumRentSelector, potentialProfitSelector, isProfitableSelector } from './result.selectors'

describe('maintenanceExpensesSelector', () => {
  it('should return the maintenanceExpenses for older homes', () => {
    const state = {
      search: {
        streetAddress: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '98604'
      },
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 23250284,
          zestimate: 289019,
          rentZestimate: 1595,
          yearBuilt: 1993
        },
        fetchError: false
      },
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(maintenanceExpensesSelector(state)).toEqual(482)
  })
  it('should return the maintenanceExpenses for newer homes', () => {
    const state = {
      search: {
        streetAddress: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '98604'
      },
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 23250284,
          zestimate: 289019,
          rentZestimate: 1595,
          yearBuilt: 2018
        },
        fetchError: false
      },
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(maintenanceExpensesSelector(state)).toEqual(241)
  })
})

describe('subTotalSelector', () => {
  it('should return the subtotal', () => {
    const state = {
      search: {
        streetAddress: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '98604'
      },
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 23250284,
          zestimate: 289019,
          rentZestimate: 1595,
          yearBuilt: 1993
        },
        fetchError: false
      },
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(subTotalSelector(state)).toEqual(1603)
  })
})

describe('minimumRentSelector', () => {
  it('should return the minimumRent', () => {
    const state = {
      search: {
        streetAddress: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '98604'
      },
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 23250284,
          zestimate: 289019,
          rentZestimate: 1595,
          yearBuilt: 1993
        },
        fetchError: false
      },
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(minimumRentSelector(state)).toEqual(1749)
  })
})

describe('potentialProfit', () => {
  it('should return the potentialProfit', () => {
    const state = {
      search: {
        streetAddress: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '98604'
      },
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 23250284,
          zestimate: 289019,
          rentZestimate: 1595,
          yearBuilt: 1993
        },
        fetchError: false
      },
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(potentialProfitSelector(state)).toEqual(-154)
  })
})

describe('isProfitableSelector', () => {
  it('should return true if isProfitable', () => {
    const state = {
      search: {
        streetAddress: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '98604'
      },
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 23250284,
          zestimate: 289019,
          rentZestimate: 1595,
          yearBuilt: 1993
        },
        fetchError: false
      },
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(isProfitableSelector(state)).toEqual(false)
  })
})

describe('isProfitableSelector', () => {
  it('should return true if isProfitable', () => {
    const state = {
      search: {
        streetAddress: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '98604'
      },
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 23250284,
          zestimate: 289019,
          rentZestimate: 1800,
          yearBuilt: 1993
        },
        fetchError: false
      },
      mortgage: {
        payment: 1061,
        additionalExpenses: 60
      }
    }
    expect(isProfitableSelector(state)).toEqual(true)
  })
})
