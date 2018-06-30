import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  }
})

const Result = ({ showResult, classes }) => {
  return (
    <div>
      {showResult &&
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline">
            Results:
          </Typography>
        </Paper>
      }
    </div>
  )
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
  showResult: PropTypes.bool.isRequired
}

export default withStyles(styles)(Result)
