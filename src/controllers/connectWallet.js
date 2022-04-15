export async function connectWallet() {
  await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => console.log(err.code));
}
