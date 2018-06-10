import { getAddressComplete } from '../selectors/address.selector'

describe('getAddressComplete Selector', () => {
  it('should return false if street is null', () => {
    const state = {
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
        complete: false
      },
      inputError: {
        inputError: false,
        inputErrorMessage: ''
      },
      zillow: {
        zillowIsLoading: false,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: true
      }
    }
    expect(getAddressComplete(state)).toEqual(false)
  })
  it('should return false if zip is null and city or state is null (1)', () => {
    const state = {
      address: {
        street: '1315 SW 2nd Ave',
        city: '',
        state: '',
        zip: '',
        complete: false
      },
      inputError: {
        inputError: false,
        inputErrorMessage: ''
      },
      zillow: {
        zillowIsLoading: false,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: true
      }
    }
    expect(getAddressComplete(state)).toEqual(false)
  })
  it('should return false if zip is null and city or state is null (2)', () => {
    const state = {
      address: {
        street: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: '',
        zip: '',
        complete: false
      },
      inputError: {
        inputError: false,
        inputErrorMessage: ''
      },
      zillow: {
        zillowIsLoading: false,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: true
      }
    }
    expect(getAddressComplete(state)).toEqual(false)
  })
  it('should return false if zip is null and city or state is null (3)', () => {
    const state = {
      address: {
        street: '1315 SW 2nd Ave',
        city: '',
        state: 'WA',
        zip: '',
        complete: false
      },
      inputError: {
        inputError: false,
        inputErrorMessage: ''
      },
      zillow: {
        zillowIsLoading: false,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: true
      }
    }
    expect(getAddressComplete(state)).toEqual(false)
  })
  it('should return true if street and zip are not null', () => {
    const state = {
      address: {
        street: '1315 SW 2nd Ave',
        city: '',
        state: '',
        zip: '98604',
        complete: false
      },
      inputError: {
        inputError: false,
        inputErrorMessage: ''
      },
      zillow: {
        zillowIsLoading: false,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: true
      }
    }
    expect(getAddressComplete(state)).toEqual(true)
  })
  it('should return true if street and city and state are not null', () => {
    const state = {
      address: {
        street: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: '',
        complete: false
      },
      inputError: {
        inputError: false,
        inputErrorMessage: ''
      },
      zillow: {
        zillowIsLoading: false,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: true
      }
    }
    expect(getAddressComplete(state)).toEqual(true)
  })
})
