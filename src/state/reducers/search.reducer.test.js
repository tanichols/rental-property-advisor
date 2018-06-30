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
    const streetAddress = '1315 SW 2nd Ave'
    expect(search(undefined, searchActions.setStreetAddress(streetAddress))).toEqual({
      streetAddress: streetAddress,
      city: '',
      state: '',
      zip: ''
    })
  })
  it('should handle SET_CITY', () => {
    const city = 'Battle Ground'
    expect(search(undefined, searchActions.setCity(city))).toEqual({
      streetAddress: '',
      city: city,
      state: '',
      zip: ''
    })
  })
  it('should handle SET_STATE', () => {
    const state = 'WA'
    expect(search(undefined, searchActions.setState(state))).toEqual({
      streetAddress: '',
      city: '',
      state: state,
      zip: ''
    })
  })
  it('should handle SET_ZIP', () => {
    const zip = '98604'
    expect(search(undefined, searchActions.setZip(zip))).toEqual({
      streetAddress: '',
      city: '',
      state: '',
      zip: zip
    })
  })
})
