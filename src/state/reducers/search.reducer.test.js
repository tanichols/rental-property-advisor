import * as searchActions from '../actions/search.actions'
import * as searchConstants from '../constants/search.constants'
import search from './search.reducer'

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual({
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
        zillowFetchError: false
      }
    })
  })
  it('should handle SET_STREET', () => {
    const street = '1315 SW 2nd Ave'
    expect(search(undefined, searchActions.setStreet(street))).toEqual({
      address: {
        street: street,
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
        zillowFetchError: false
      }
    })
  })
  it('should handle SET_CITY', () => {
    const city = 'Battle Ground'
    expect(search(undefined, searchActions.setCity(city))).toEqual({
      address: {
        street: '',
        city: city,
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
        zillowFetchError: false
      }
    })
  })
  it('should handle SET_STATE', () => {
    const state = 'WA'
    expect(search(undefined, searchActions.setState(state))).toEqual({
      address: {
        street: '',
        city: '',
        state: state,
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
        zillowFetchError: false
      }
    })
  })
  it('should handle SET_ZIP', () => {
    const zip = '98604'
    expect(search(undefined, searchActions.setZip(zip))).toEqual({
      address: {
        street: '',
        city: '',
        state: '',
        zip: zip,
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
        zillowFetchError: false
      }
    })
  })
  it('should handle FETCH_FROM_ZILLOW_PENDING', () => {
    expect(search(undefined, { type: searchConstants.FETCH_FROM_ZILLOW_PENDING })).toEqual({
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
        zillowIsLoading: true,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: false
      }
    })
  })
  it('should handle FETCH_FROM_ZILLOW_FULFILLED', () => {
    const expectedResponse = {
      data: 'some data'
    }
    expect(search(undefined, { type: searchConstants.FETCH_FROM_ZILLOW_FULFILLED, payload: expectedResponse })).toEqual({
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
        zillowHasData: true,
        zillowResponse: expectedResponse.data,
        zillowFetchError: false
      }
    })
  })
  it('should handle FETCH_FROM_ZILLOW_REJECTED', () => {
    expect(search(undefined, { type: searchConstants.FETCH_FROM_ZILLOW_REJECTED, error: true })).toEqual({
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
    })
  })
})
