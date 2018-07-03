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
  }
})

const Result = ({ showResult, classes, zestimate, rentZestimate, minimumRent, maintenanceExpenses, potentialProfit }) => {
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
  maintenanceExpenses: PropTypes.number.isRequired
}

export default withStyles(styles)(Result)
