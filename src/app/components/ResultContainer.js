import { connect } from 'react-redux'
import Result from './Result'
import { propertyFoundSelector, zestimateSelector, rentZestimateSelector } from '../../state/selectors/zillow.selectors'
import { maintenanceExpensesSelector, minimumRentSelector, potentialProfitSelector, isProfitableSelector } from '../../state/selectors/result.selector'

const MapStateToProps = state => {
  return {
    zestimate: zestimateSelector(state),
    rentZestimate: rentZestimateSelector(state),
    maintenanceExpenses: maintenanceExpensesSelector(state),
    minimumRent: minimumRentSelector(state),
    potentialProfit: potentialProfitSelector(state),
    showResult: propertyFoundSelector(state),
    isProfitable: isProfitableSelector(state)
  }
}

const ResultContainer = connect(
  MapStateToProps,
  null
)(Result)

export default ResultContainer
