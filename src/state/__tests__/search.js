import search, { setStreet, setCity, setState, SET_STREET, SET_CITY, SET_STATE, FETCH_FROM_ZILLOW_PENDING, FETCH_FROM_ZILLOW_FULFILLED, FETCH_FROM_ZILLOW_REJECTED } from '../search'

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
})

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual({
      address: {
        street: '',
        city: '',
        state: ''
      },
      zillowIsLoading: false,
      zillowHasData: false,
      zillowResponse: null,
      zillowFetchError: false
    })
  })
  it('should handle SET_STREET', () => {
    const street = '1315 SW 2nd Ave'
    expect(search(undefined, setStreet(street))).toEqual({
      address: {
        street: street,
        city: '',
        state: ''
      },
      zillowIsLoading: false,
      zillowHasData: false,
      zillowResponse: null,
      zillowFetchError: false
    })
  })
  it('should handle SET_CITY', () => {
    const city = 'Battle Ground'
    expect(search(undefined, setCity(city))).toEqual({
      address: {
        street: '',
        city: city,
        state: ''
      },
      zillowIsLoading: false,
      zillowHasData: false,
      zillowResponse: null,
      zillowFetchError: false
    })
  })
  it('should handle SET_STATE', () => {
    const state = 'WA'
    expect(search(undefined, setState(state))).toEqual({
      address: {
        street: '',
        city: '',
        state: state
      },
      zillowIsLoading: false,
      zillowHasData: false,
      zillowResponse: null,
      zillowFetchError: false
    })
  })
  it('should handle FETCH_FROM_ZILLOW_PENDING', () => {
    expect(search(undefined, { type: FETCH_FROM_ZILLOW_PENDING })).toEqual({
      address: {
        street: '',
        city: '',
        state: ''
      },
      zillowIsLoading: true,
      zillowHasData: false,
      zillowResponse: null,
      zillowFetchError: false
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
        state: ''
      },
      zillowIsLoading: false,
      zillowHasData: true,
      zillowResponse: expectedResponse.data,
      zillowFetchError: false
    })
  })
  it('should handle FETCH_FROM_ZILLOW_FULFILLED', () => {
    expect(search(undefined, { type: FETCH_FROM_ZILLOW_REJECTED, error: true })).toEqual({
      address: {
        street: '',
        city: '',
        state: ''
      },
      zillowIsLoading: false,
      zillowHasData: false,
      zillowResponse: null,
      zillowFetchError: true
    })
  })
})
