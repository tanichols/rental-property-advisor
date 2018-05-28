import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import search from './search'

const reducer = combineReducers({
  search
})

const middleware = compose(
  applyMiddleware(
    promiseMiddleware(),
    logger
  )
)

const store = createStore(
  reducer,
  middleware
)

export default store
