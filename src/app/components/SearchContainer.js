import { connect } from 'react-redux'
import Search from './Search'
import * as searchActions from '../../state/actions/search.actions'

const MapStateToProps = (state) => {
  return {
    address: state.search.address
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    onStreetChange: (street) => {
      dispatch(searchActions.setStreet(street))
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
    onClick: (address) => {
      dispatch(searchActions.fetchFromZillow(address))
    }
  }
}

const SearchContainer = connect(
  MapStateToProps,
  MapDispatchToProps
)(Search)

export default SearchContainer
