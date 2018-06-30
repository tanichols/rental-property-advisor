import { createSelector } from 'reselect'

const searchSelector = state => state.search

export const isCompleteSelector = createSelector(
  searchSelector,
  search => search.street !== '' && (search.zip !== '' || (search.city !== '' && search.state !== ''))
)
