import React, { Component } from 'react'
import store from './state'
import { setStreet } from './state/search'

class App extends Component {
  render() {
    store.dispatch(setStreet('1315 SW 2nd Ave'))
    return (
      <div>
        <p>{store.getState().search.address.street}</p>
      </div>
    )
  }
}

export default App
