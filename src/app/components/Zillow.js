import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Spinner from './Spinner'
import ZillowData from './ZillowData'
import MortgageDataContainer from './MortgageDataContainer'
import TotalContainer from './TotalContainer'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
})

function Zillow(props) {
  return (
    <div>
      {props.zillow.zillowIsLoading &&
        <Spinner size={200} />
      }
      {props.zillow.zillowHasData &&
        <React.Fragment>
          <ZillowData data={props.zillow.zillowResponse} />
          <MortgageDataContainer />
          <TotalContainer />
        </React.Fragment>
      }
    </div>
  )
}

Zillow.propTypes = {
  zillow: PropTypes.object.isRequired
}

export default withStyles(styles)(Zillow)
