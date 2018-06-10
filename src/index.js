import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './state'
import registerServiceWorker from './registerServiceWorker'
import * as searchActions from './state/actions/search.actions'

store.dispatch(searchActions.setState('WA'))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Render App Here</h1>
    </div>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
