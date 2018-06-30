import { Button, TextField } from '@material-ui/core'
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
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
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
    this.props.onClick(this.props.address)
  }

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <TextField
          id="street"
          label="Street"
          value={this.props.address.street}
          onInput={this.handleStreetChange}
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="city"
          label="City"
          value={this.props.address.city}
          onInput={this.handleCityChange}
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="state"
          label="State"
          value={this.props.address.state}
          onInput={this.handleStateChange}
          className={this.props.classes.textField}
          margin="normal"
        />
        <TextField
          id="zip"
          label="Zip Code"
          value={this.props.address.zip}
          onInput={this.handleZipChange}
          className={this.props.classes.textField}
          margin="normal"
        />
        <Button
          variant="contained"
          onClick={this.handleOnClick}
          className={this.props.classes.button}
        >
          Submit
        </Button>
      </form >
    )
  }
}

Search.propTypes = {
  address: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onStreetChange: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onStateChange: PropTypes.func.isRequired,
  onZipChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default withStyles(styles)(Search)
