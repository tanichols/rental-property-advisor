import { createSelector } from 'reselect'

const zillowSelector = state => state.zillow

export const propertyFoundSelector = createSelector(
  zillowSelector,
  zillow => zillow.hasData
)

export const isLoadingSelector = createSelector(
  zillowSelector,
  zillow => zillow.isLoading
)

export const isErrorSelector = createSelector(
  zillowSelector,
  zillow => zillow.fetchError
)

export const yearBuiltSelector = createSelector(
  zillowSelector,
  zillow => zillow.response.yearBuilt
)

export const zestimateSelector = createSelector(
  zillowSelector,
  zillow => zillow.response.zestimate
)

export const rentZestimateSelector = createSelector(
  zillowSelector,
  zillow => zillow.response.rentZestimate
)
