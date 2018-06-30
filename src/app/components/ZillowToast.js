import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withStyles, Snackbar, SnackbarContent } from '@material-ui/core'

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
})

let ZillowToast = ({ classes, zillow }) => {
  return (
    <React.Fragment>
      {zillow.hasData &&
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={zillow.hasData}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <SnackbarContent className={classes.snackbar} message="Successfully retrieved data on the property" />
        </Snackbar>
      }
    </React.Fragment>
  )
}

ZillowToast.propTypes = {
  classes: PropTypes.object.isRequired,
  zillow: PropTypes.object.isRequired
}

const MapStateToProps = (state) => {
  return {
    zillow: state.zillow
  }
}

ZillowToast = connect(
  MapStateToProps,
  null
)(withStyles(styles)(ZillowToast))

export default ZillowToast
