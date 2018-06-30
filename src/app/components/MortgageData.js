import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

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
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
})

class MortgageData extends React.Component {
  constructor(props) {
    super(props)

    this.handleMortgageChange = this.handleMortgageChange.bind(this)
    this.handleExpenseChange = this.handleExpenseChange.bind(this)
  }

  handleMortgageChange(event) {
    this.props.onMortgageChange(event.target.value)
  }

  handleExpenseChange(event) {
    this.props.onExpensesChange(event.target.value)
  }

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <TextField
          id="mortgage"
          label="Monthly Mortgage"
          value={this.props.mortgage.mortgage}
          onChange={this.handleMortgageChange}
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="expenses"
          label="Additional Expenses"
          value={this.props.mortgage.expenses}
          onChange={this.handleExpenseChange}
          className={this.props.classes.textField}
          margin="normal"
        />
      </form>
    )
  }
}

MortgageData.propTypes = {
  classes: PropTypes.object.isRequired,
  mortgage: PropTypes.object.isRequired,
  onMortgageChange: PropTypes.func.isRequired,
  onExpensesChange: PropTypes.func.isRequired
}

export default withStyles(styles)(MortgageData)
