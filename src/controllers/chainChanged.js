export async function chainChanged(chain) {
  if (chain !== "0x3") {
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x3' }],
      });
  }
}
