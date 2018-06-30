import { Paper, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Spinner from './Spinner'

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

class Mortgage extends React.Component {
  constructor(props) {
    super(props)

    this.handlePaymentChange = this.handlePaymentChange.bind(this)
    this.handleAdditionalExpensesChange = this.handleAdditionalExpensesChange.bind(this)
  }

  handlePaymentChange(event) {
    this.props.onPaymentChange(event.target.value)
  }

  handleAdditionalExpensesChange(event) {
    this.props.onAdditionalExpensesChange(event.target.value)
  }

  render() {
    const { classes, mortgage, showMortgage, showSpinner } = this.props

    return (
      <div>
        {showSpinner &&
          <Spinner size={200} />
        }
        {showMortgage &&
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              Enter additional details for the property
            </Typography>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="payment"
                label="Monthly Payment"
                value={mortgage.payment}
                onInput={this.handlePaymentChange}
                className={classes.textField}
                margin="normal"
              />
              <TextField
                id="expenses"
                label="Additional Expenses"
                value={mortgage.additionalExpenses}
                onInput={this.handleAdditionalExpensesChange}
                className={classes.textField}
                margin="normal"
              />
            </form >
          </Paper>
        }
      </div>
    )
  }
}

Mortgage.propTypes = {
  classes: PropTypes.object.isRequired,
  mortgage: PropTypes.object.isRequired,
  onPaymentChange: PropTypes.func.isRequired,
  onAdditionalExpensesChange: PropTypes.func.isRequired,
  showMortgage: PropTypes.bool.isRequired,
  showSpinner: PropTypes.bool.isRequired
}

export default withStyles(styles)(Mortgage)
