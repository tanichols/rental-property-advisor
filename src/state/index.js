import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import search from './search'

const reducer = combineReducers({
  search
})

const middleware = compose(
  applyMiddleware(promiseMiddleware()),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  reducer,
  middleware
)

export default store
