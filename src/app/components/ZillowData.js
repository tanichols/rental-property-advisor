import React from 'react'
import PropTypes from 'prop-types'

function ZillowData(props) {
  return (
    <div>
      <h1>ZPID: {props.data.zpid}</h1>
      <h1>ZESTIMATE: {props.data.zestimate}</h1>
      <h1>RENT ZESTIMATE: {props.data.rentZestimate}</h1>
      <h1>YEAR BUILT: {props.data.yearBuilt}</h1>
    </div>
  )
}

ZillowData.propTypes = {
  data: PropTypes.object.isRequired
}

export default ZillowData
