import { connect } from 'react-redux'
import Total from './Total'

const MapStateToProps = (state) => {
  return {
    error: state
  }
}

const TotalContainer = connect(
  MapStateToProps,
  null
)(Total)

export default TotalContainer
