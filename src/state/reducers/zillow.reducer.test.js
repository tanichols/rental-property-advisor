import zillow from './zillow.reducer'
import * as zillowConstants from '../constants/zillow.constants'

describe('zillow reducer', () => {
  it('should return the initial state', () => {
    expect(zillow(undefined, {})).toEqual({
      isLoading: false,
      hasData: false,
      response: {
        zpid: null,
        zestimate: null,
        rentZestimate: null,
        yearBuilt: null
      },
      fetchError: false
    })
  })
  it('should handle FETCH_FROM_ZILLOW_PENDING', () => {
    expect(zillow(undefined, { type: zillowConstants.FETCH_FROM_ZILLOW_PENDING })).toEqual({
      isLoading: true,
      hasData: false,
      response: {
        zpid: null,
        zestimate: null,
        rentZestimate: null,
        yearBuilt: null
      },
      fetchError: false
    })
  })
  it('should handle FETCH_FROM_ZILLOW_FULFILLED', () => {
    const expectedResponse = {
      zpid: 1234,
      zestimate: 200000,
      rentZestimate: 1000,
      yearBuilt: 2018
    }
    expect(zillow(undefined, { type: zillowConstants.FETCH_FROM_ZILLOW_FULFILLED, payload: { data: expectedResponse } })).toEqual({
      isLoading: false,
      hasData: true,
      response: expectedResponse,
      fetchError: false
    })
  })
  it('should handle FETCH_FROM_ZILLOW_REJECTED', () => {
    expect(zillow(undefined, { type: zillowConstants.FETCH_FROM_ZILLOW_REJECTED, error: true })).toEqual({
      isLoading: false,
      hasData: false,
      response: {
        zpid: null,
        zestimate: null,
        rentZestimate: null,
        yearBuilt: null
      },
      fetchError: true
    })
  })
})
