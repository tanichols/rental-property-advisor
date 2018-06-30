import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'

const styles = (theme) => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
})

class Error extends React.Component {
  constructor(props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return
    }

    this.props.dismissError()
  }

  render() {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={this.props.error.inputError}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <SnackbarContent
            className={this.props.classes.error}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={this.props.classes.message}>
                <ErrorIcon className={this.props.classes.error} />
                {this.props.error.inputErrorMessage}
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={this.props.classes.close}
                onClick={this.handleClose}
              >
                <CloseIcon className={this.props.classes.icon} />
              </IconButton>
            ]}
          />
        </Snackbar>
      </div>
    )
  }
}

Error.propTypes = {
  classes: PropTypes.object.isRequired,
  dismissError: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
}

export default withStyles(styles)(Error)
