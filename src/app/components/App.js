import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './header'
import SearchContainer from './SearchContainer'

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <SearchContainer />
    {/* <ZillowContainer />
    <ErrorContainer /> */}
  </React.Fragment>
)

export default App
