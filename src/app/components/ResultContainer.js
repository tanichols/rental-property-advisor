import { connect } from 'react-redux'
import Result from './Result'
import { propertyFoundSelector } from '../../state/selectors/zillow.selectors'

const MapStateToProps = state => {
  return {
    zestimate: state.zillow.zestimate,
    rentZestimate: state.zillow.rentZestimate,
    showResult: propertyFoundSelector(state)
  }
}

const ResultContainer = connect(
  MapStateToProps,
  null
)(Result)

export default ResultContainer
