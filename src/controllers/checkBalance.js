import { provider, QUIZ_ABI, QUIZ_ADDRESS } from "../utils/consts";
import { ethers } from "ethers";

export async function checkBalance(usr) {
    let balance = await window.ethereum.request({ method: "eth_getBalance", 
    params: [
        usr,
        'latest'
        ] 
    })
    .catch(err => console.log(err));

    console.log(parseInt(balance) / Math.pow(10, 18))
}

export async function checkBalanceContract(usr) {
    let quizContract = new ethers.Contract(QUIZ_ADDRESS, QUIZ_ABI, provider);

    let balance = await quizContract.balanceOf(usr);
    return (balance.toString() / Math.pow(10,18))
}