export const getAddressComplete = (state) => {
  const address = state.address
  return address.street !== '' && (address.zip !== '' || (address.city !== '' && address.state !== ''))
}
