import { propertyFoundSelector, isLoadingSelector, isErrorSelector, yearBuiltSelector, zestimateSelector, rentZestimateSelector } from './zillow.selectors'

describe('propertyFoundSelector', () => {
  it('should return true if hasData', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: true,
        response: {
          zpid: 0,
          zestimate: 0,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: false
      }
    }
    expect(propertyFoundSelector(state)).toEqual(true)
  })
  it('should return false if !hasData', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 0,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: false
      }
    }
    expect(propertyFoundSelector(state)).toEqual(false)
  })
})

describe('isLoadingSelector', () => {
  it('should return true if isLoading', () => {
    const state = {
      zillow: {
        isLoading: true,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 0,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: false
      }
    }
    expect(isLoadingSelector(state)).toEqual(true)
  })
  it('should return false if !hasData', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 0,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: false
      }
    }
    expect(isLoadingSelector(state)).toEqual(false)
  })
})

describe('isErrorSelector', () => {
  it('should return true if fetchError', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 0,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: true
      }
    }
    expect(isErrorSelector(state)).toEqual(true)
  })
  it('should return false if !fetchError', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 0,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: false
      }
    }
    expect(isLoadingSelector(state)).toEqual(false)
  })
})

describe('yearBuiltSelector', () => {
  it('should return the year built', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 0,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: true
      }
    }
    expect(yearBuiltSelector(state)).toEqual(2018)
  })
})

describe('zestimateSelector', () => {
  it('should return the zestimate', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 182800,
          rentZestimate: 0,
          yearBuilt: 2018
        },
        fetchError: true
      }
    }
    expect(zestimateSelector(state)).toEqual(182800)
  })
})

describe('rentZestimateSelector', () => {
  it('should return the rentZestimate', () => {
    const state = {
      zillow: {
        isLoading: false,
        hasData: false,
        response: {
          zpid: 0,
          zestimate: 182800,
          rentZestimate: 1200,
          yearBuilt: 2018
        },
        fetchError: true
      }
    }
    expect(rentZestimateSelector(state)).toEqual(1200)
  })
})
