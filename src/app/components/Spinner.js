import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
})

function Spinner(props) {
  return (
    <div>
      <CircularProgress className={props.classes.progress} size={props.size} />
    </div>
  )
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.number
}

export default withStyles(styles)(Spinner)
