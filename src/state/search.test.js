import search, { setStreet, setCity, setState, setZip, SET_STREET, SET_CITY, SET_STATE, SET_ZIP, FETCH_FROM_ZILLOW_PENDING, FETCH_FROM_ZILLOW_FULFILLED, FETCH_FROM_ZILLOW_REJECTED, getAddressComplete } from './search'

describe('search actions', () => {
  it('should create an action to set street', () => {
    const street = '1315 SW 2nd Ave'
    const expectedAction = {
      type: SET_STREET,
      payload: {
        street
      }
    }
    expect(setStreet(street)).toEqual(expectedAction)
  })
  it('should create an action to set city', () => {
    const city = 'Battle Ground'
    const expectedAction = {
      type: SET_CITY,
      payload: {
        city
      }
    }
    expect(setCity(city)).toEqual(expectedAction)
  })
  it('should create an action to set state', () => {
    const state = 'WA'
    const expectedAction = {
      type: SET_STATE,
      payload: {
        state
      }
    }
    expect(setState(state)).toEqual(expectedAction)
  })
  it('should create an action to set zip', () => {
    const zip = '98604'
    const expectedAction = {
      type: SET_ZIP,
      payload: {
        zip
      }
    }
    expect(setZip(zip)).toEqual(expectedAction)
  })
})

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
    expect(search(undefined, setStreet(street))).toEqual({
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
    expect(search(undefined, setCity(city))).toEqual({
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
    expect(search(undefined, setState(state))).toEqual({
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
    expect(search(undefined, setZip(zip))).toEqual({
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
    expect(search(undefined, { type: FETCH_FROM_ZILLOW_PENDING })).toEqual({
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
    expect(search(undefined, { type: FETCH_FROM_ZILLOW_FULFILLED, payload: expectedResponse })).toEqual({
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
    expect(search(undefined, { type: FETCH_FROM_ZILLOW_REJECTED, error: true })).toEqual({
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
