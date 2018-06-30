import promiseMiddleware from 'redux-promise-middleware'
import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import * as zillowConstants from '../constants/zillow.constants'
import * as zillowActions from '../actions/zillow.actions'
import ZillowClient from '../../config/zillow.client'

describe('async search actions', () => {
  const middlewares = [promiseMiddleware()]
  const mockStore = configureMockStore(middlewares)

  beforeEach(() => {
    moxios.install(ZillowClient)
  })
  afterEach(() => {
    moxios.uninstall(ZillowClient)
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

    const expectedActions = [zillowConstants.FETCH_FROM_ZILLOW_PENDING, zillowConstants.FETCH_FROM_ZILLOW_FULFILLED]

    const store = mockStore({
      search: {
        street: '1315 SW 2nd Ave',
        city: '',
        state: '',
        zip: '98604'
      },
      zillow: {
        zillowIsLoading: false,
        zillowHasData: false,
        zillowResponse: null,
        zillowFetchError: false
      }
    })

    store.dispatch(zillowActions.fetchFromZillow(store.getState())).then(() => {
      const dispatchedActions = store.getActions()
      const actionTypes = dispatchedActions.map(action => action.type)

      expect(actionTypes).toEqual(expectedActions)
    })
  })
})
