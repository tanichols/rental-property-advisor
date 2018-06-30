import { connect } from 'react-redux'
import * as searchActions from '../../state/actions/search.actions'
import * as zillowActions from '../../state/actions/zillow.actions'
import Search from './Search'
import { isCompleteSelector } from '../../state/selectors/search.selectors'

const MapStateToProps = state => {
  return {
    search: state.search,
    isComplete: isCompleteSelector(state)
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    onStreetChange: (street) => {
      dispatch(searchActions.setStreetAddress(street))
    },
    onCityChange: (city) => {
      dispatch(searchActions.setCity(city))
    },
    onStateChange: (state) => {
      dispatch(searchActions.setState(state))
    },
    onZipChange: (zip) => {
      dispatch(searchActions.setZip(zip))
    },
    onSubmit: () => {
      dispatch(zillowActions.fetchFromZillow())
    }
  }
}

const SearchContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(Search)

export default SearchContainer
