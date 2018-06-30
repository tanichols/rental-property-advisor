import * as searchActions from '../actions/search.actions'
import search from './search.reducer'

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual({
      streetAddress: '',
      city: '',
      state: '',
      zip: ''
    })
  })
  it('should handle SET_STREET', () => {
    const expectedStreetAddress = '1315 SW 2nd Ave'
    expect(search(undefined, searchActions.setStreetAddress(expectedStreetAddress))).toEqual({
      streetAddress: expectedStreetAddress,
      city: '',
      state: '',
      zip: ''
    })
  })
  it('should handle SET_CITY', () => {
    const ExpectedCity = 'Battle Ground'
    expect(search(undefined, searchActions.setCity(ExpectedCity))).toEqual({
      streetAddress: '',
      city: ExpectedCity,
      state: '',
      zip: ''
    })
  })
  it('should handle SET_STATE', () => {
    const expectedState = 'WA'
    expect(search(undefined, searchActions.setState(expectedState))).toEqual({
      streetAddress: '',
      city: '',
      state: expectedState,
      zip: ''
    })
  })
  it('should handle SET_ZIP', () => {
    const expectedZip = '98604'
    expect(search(undefined, searchActions.setZip(expectedZip))).toEqual({
      streetAddress: '',
      city: '',
      state: '',
      zip: expectedZip
    })
  })
})
