import { CssBaseline, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Header from './Header'
import SearchContainer from './SearchContainer'
import MortgageContainer from './MortgageContainer'
import ResultContainer from './ResultContainer'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from '../theme'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.root} spacing={16}>
        <Header title="Rental Property Advisor" />
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={16}>
            <Grid item xs={9}>
              <SearchContainer />
            </Grid>
          </Grid>
          <Grid container className={classes.demo} justify="center" spacing={16}>
            <Grid item xs={9}>
              <MortgageContainer />
            </Grid>
            <Grid item xs={9}>
              <ResultContainer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  </MuiThemeProvider>
)

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
