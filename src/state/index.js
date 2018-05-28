import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import search from './search'

const reducer = combineReducers({
  search
})

const middleware = compose(
  applyMiddleware(promiseMiddleware())
)

const store = createStore(
  reducer,
  middleware
)

export default store
