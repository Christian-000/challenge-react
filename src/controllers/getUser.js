export function getUser() {
  //user, chain ID
  return [window.ethereum._state.accounts[0], window.ethereum.chainId];
}
