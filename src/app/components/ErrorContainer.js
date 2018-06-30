import { connect } from 'react-redux'
import Error from './Error'
import * as searchActions from '../../state/actions/search.actions'

const MapStateToProps = (state) => {
  return {
    error: state.search.inputError
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    dismissError: () => {
      dispatch(searchActions.dismissInputError())
    }
  }
}

const ErrorContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(Error)

export default ErrorContainer
