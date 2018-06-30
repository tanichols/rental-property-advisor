import ZillowClient from '../../config/zillow.client'
import * as zillowConstants from '../constants/zillow.constants'
import store from '../index'

export const fetchFromZillow = () => {
  const appState = store.getState()
  const { streetAddress, city, state, zip } = appState.search
  const citystatezip = zip || `${city} ${state}`
  const url = `/zillow?street=${streetAddress}&citystatezip=${citystatezip}`
  return {
    type: zillowConstants.FETCH_FROM_ZILLOW,
    payload: ZillowClient.get(url)
  }
}
