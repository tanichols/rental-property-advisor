import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import store from './state'
import { setStreet } from './state/search'

class App extends Component {
  render() {
    store.dispatch(setStreet('1315 SW 2nd Ave'))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Awesome App!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
