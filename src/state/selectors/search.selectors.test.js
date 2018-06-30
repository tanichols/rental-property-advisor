import { isCompleteSelector } from '../selectors/search.selectors'

describe('isCompleteSelector', () => {
  it('should return false if street is null', () => {
    const state = {
      search: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    }
    expect(isCompleteSelector(state)).toEqual(false)
  })
  it('should return false if zip is null and city or state is null (1)', () => {
    const state = {
      search: {
        street: '1315 SW 2nd Ave',
        city: '',
        state: '',
        zip: ''
      }
    }
    expect(isCompleteSelector(state)).toEqual(false)
  })
  it('should return false if zip is null and city or state is null (2)', () => {
    const state = {
      search: {
        street: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: '',
        zip: ''
      }
    }
    expect(isCompleteSelector(state)).toEqual(false)
  })
  it('should return false if zip is null and city or state is null (3)', () => {
    const state = {
      search: {
        street: '1315 SW 2nd Ave',
        city: '',
        state: 'WA',
        zip: ''
      }
    }
    expect(isCompleteSelector(state)).toEqual(false)
  })
  it('should return true if street and zip are not null', () => {
    const state = {
      search: {
        street: '1315 SW 2nd Ave',
        city: '',
        state: '',
        zip: '98604'
      }
    }
    expect(isCompleteSelector(state)).toEqual(true)
  })
  it('should return true if street and city and state are not null', () => {
    const state = {
      search: {
        street: '1315 SW 2nd Ave',
        city: 'Battle Ground',
        state: 'WA',
        zip: ''
      }
    }
    expect(isCompleteSelector(state)).toEqual(true)
  })
})
