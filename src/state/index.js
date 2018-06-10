import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import search from './reducers/search.reducer'
import logger from 'redux-logger'

const reducer = combineReducers({
  search
})

const middleware = applyMiddleware(
  promiseMiddleware(),
  logger
)

const store = createStore(
  reducer,
  middleware
)

export default store
