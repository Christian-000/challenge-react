export async function connectWallet() {

    const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
    .catch((err => console.log(err.code)))
    console.log(accounts)
}
