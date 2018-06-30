import { connect } from 'react-redux'
import Zillow from './Zillow'

const MapStateToProps = (state) => {
  return {
    zillow: state.search.zillow
  }
}

const ZillowContainer = connect(
  MapStateToProps,
  null
)(Zillow)

export default ZillowContainer
