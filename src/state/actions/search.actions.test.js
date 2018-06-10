import promiseMiddleware from 'redux-promise-middleware'
import configureMockStore from 'redux-mock-store'
import zillowClient from '../clients/zillow.client'
import moxios from 'moxios'
import * as searchActions from './search.actions'
import * as searchConstants from '../constants/search.constants'

describe('search actions', () => {
  it('should create an action to set street', () => {
    const street = '1315 SW 2nd Ave'
    const expectedAction = {
      type: searchConstants.SET_STREET,
      payload: {
        street
      }
    }
    expect(searchActions.setStreet(street)).toEqual(expectedAction)
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

describe('async search actions', () => {
  const middlewares = [promiseMiddleware()]
  const mockStore = configureMockStore(middlewares)

  beforeEach(() => {
    moxios.install(zillowClient)
  })
  afterEach(() => {
    moxios.uninstall(zillowClient)
  })

  it('dispatches FETCH_FROM_ZILLOW_PENDING and FETCH_FROM_ZILLOW_FULFILLED on fetchFromZillow with valid address data', () => {
    const payload = {
      data: 'zillowData'
    }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: payload
      })
    })

    const expectedActions = [searchConstants.FETCH_FROM_ZILLOW_PENDING, searchConstants.FETCH_FROM_ZILLOW_FULFILLED]

    const store = mockStore({
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
        zillowFetchError: false
      }
    })

    store.dispatch(searchActions.fetchFromZillow(store.getState())).then(() => {
      const dispatchedActions = store.getActions()
      const actionTypes = dispatchedActions.map(action => action.type)

      expect(actionTypes).toEqual(expectedActions)
    })
  })

  it('dispatches SET_INPUT_ERROR on fetchFromZillow with invalid address data', () => {
    const expectedActions = [searchConstants.SET_INPUT_ERROR]

    const store = mockStore({
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

    store.dispatch(searchActions.fetchFromZillow(store.getState()))
    const dispatchedActions = store.getActions()
    const actionTypes = dispatchedActions.map(action => action.type)

    expect(actionTypes).toEqual(expectedActions)
  })
})
