import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'
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
  },
  greenLight: {
    color: theme.palette.common.green
  },
  yellowLight: {
    color: theme.palette.common.yellow
  },
  redLight: {
    color: theme.palette.common.red
  }
})

const Result = ({ showResult, classes, zestimate, rentZestimate, minimumRent, maintenanceExpenses, potentialProfit, isProfitable }) => {
  return (
    <div>
      {showResult &&
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline">
            <List>
              <ListItem>
                <ListItemText>
                  Zestimate: {zestimate}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Rent Estimate: {rentZestimate}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Maintenance Expenses: {maintenanceExpenses}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Minimum Rent: {minimumRent}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Potential Profit: {potentialProfit}
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Paper>
      }
      {showResult && isProfitable &&
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" color="secondary">
            This should be a profitable property!
          </Typography>
        </Paper>
      }
      {showResult && !isProfitable &&
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" color="error">
            This might not be a profitable property!
          </Typography>
        </Paper>
      }
    </div>
  )
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
  showResult: PropTypes.bool.isRequired,
  zestimate: PropTypes.number.isRequired,
  rentZestimate: PropTypes.number.isRequired,
  minimumRent: PropTypes.number.isRequired,
  potentialProfit: PropTypes.number.isRequired,
  maintenanceExpenses: PropTypes.number.isRequired,
  isProfitable: PropTypes.bool.isRequired
}

export default withStyles(styles)(Result)
