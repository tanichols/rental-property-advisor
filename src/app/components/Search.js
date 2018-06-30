import { Button, Paper, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit
  },
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

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.handleStreetChange = this.handleStreetChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleStreetChange(event) {
    this.props.onStreetChange(event.target.value)
  }

  handleCityChange(event) {
    this.props.onCityChange(event.target.value)
  }

  handleStateChange(event) {
    this.props.onStateChange(event.target.value)
  }

  handleZipChange(event) {
    this.props.onZipChange(event.target.value)
  }

  handleOnClick(event) {
    this.props.onSubmit()
  }

  render() {
    const { classes, search, isComplete } = this.props

    return (
      <div>
        <Paper className={classes.root} elevation={2}>
          <Typography variant="headline" component="h3">
            Enter the address of the property in question
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="street"
              label="Street"
              value={search.street}
              onInput={this.handleStreetChange}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="city"
              label="City"
              value={search.city}
              onInput={this.handleCityChange}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="state"
              label="State"
              value={search.state}
              onInput={this.handleStateChange}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="zip"
              label="Zip Code"
              value={search.zip}
              onInput={this.handleZipChange}
              className={classes.textField}
              margin="normal"
            />
            <Button
              variant="contained"
              onClick={this.handleOnClick}
              disabled={!isComplete}
              className={classes.button}
            >
              Submit
            </Button>
          </form >
        </Paper>
      </div>
    )
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onStreetChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onZipChange: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired
}

export default withStyles(styles)(Search)
