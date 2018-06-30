import * as searchActions from './search.actions'
import * as searchConstants from '../constants/search.constants'

describe('search actions', () => {
  it('should create an action to set street address', () => {
    const streetAddress = '1315 SW 2nd Ave'
    const expectedAction = {
      type: searchConstants.SET_STREET_ADDRESS,
      payload: {
        streetAddress
      }
    }
    expect(searchActions.setStreetAddress(streetAddress)).toEqual(expectedAction)
  })
  it('should create an action to set city', () => {
    const city = 'Battle Ground'
    const expectedAction = {
      type: searchConstants.SET_CITY,
      payload: {
        city
      }
    }
    expect(searchActions.setCity(city)).toEqual(expectedAction)
  })
  it('should create an action to set state', () => {
    const state = 'WA'
    const expectedAction = {
      type: searchConstants.SET_STATE,
      payload: {
        state
      }
    }
    expect(searchActions.setState(state)).toEqual(expectedAction)
  })
  it('should create an action to set zip', () => {
    const zip = '98604'
    const expectedAction = {
      type: searchConstants.SET_ZIP,
      payload: {
        zip
      }
    }
    expect(searchActions.setZip(zip)).toEqual(expectedAction)
  })
})
