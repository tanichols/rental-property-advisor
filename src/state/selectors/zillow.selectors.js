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
