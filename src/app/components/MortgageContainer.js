import { connect } from 'react-redux'
import * as mortgageActions from '../../state/actions/mortgage.actions'
import Mortgage from './Mortgage'
import { propertyFoundSelector, isLoadingSelector, isErrorSelector } from '../../state/selectors/zillow.selectors'

const MapStateToProps = state => {
  return {
    mortgage: state.mortgage,
    showMortgage: propertyFoundSelector(state),
    showSpinner: isLoadingSelector(state),
    showError: isErrorSelector(state)
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    onPaymentChange: (payment) => {
      dispatch(mortgageActions.setMortgagePayment(payment))
    },
    onAdditionalExpensesChange: (additionalExpenses) => {
      dispatch(mortgageActions.setAdditionalExpenses(additionalExpenses))
    }
  }
}

const MortgageContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(Mortgage)

export default MortgageContainer
