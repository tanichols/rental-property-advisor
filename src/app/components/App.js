import { CssBaseline, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Header from './Header'
import SearchContainer from './SearchContainer'
import ZillowToast from './ZillowToast'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <Grid container className={classes.root} spacing={16}>
      <Header title="Rental Property Advisor" />
      <Grid item xs={12}>
        <Grid container className={classes.demo} justify="center" spacing={16}>
          <Grid item>
            <SearchContainer />
          </Grid>
        </Grid>
        <Grid container className={classes.demo} justify="center" spacing={16}>
          <Grid item>
            <h1>Mortgage details</h1>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <ZillowToast />
  </React.Fragment >
)

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
