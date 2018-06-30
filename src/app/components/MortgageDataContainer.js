import { connect } from 'react-redux'
import MortgageData from './MortgageData'
import * as mortgageActions from '../../state/actions/mortgage.actions'

const MapStateToProps = (state) => {
  return {
    mortgage: state.mortgage
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    onMortgageChange: (mortgage) => {
      dispatch(mortgageActions.setMortgage(mortgage))
    },
    onExpensesChange: (expenses) => {
      dispatch(mortgageActions.setExpenses(expenses))
    }
  }
}

const MortgageDataContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(MortgageData)

export default MortgageDataContainer
