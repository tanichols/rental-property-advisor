import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import search from './reducers/search.reducer'
import zillow from './reducers/zillow.reducer'

const reducer = combineReducers({
  search,
  zillow
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
