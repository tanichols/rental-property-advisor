import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import search from './reducers/search.reducer'
import zillow from './reducers/zillow.reducer'
import mortgage from './reducers/mortgage.reducer'

const reducer = combineReducers({
  search,
  zillow,
  mortgage
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware()
    )
  )
)

export default store
