import { ethers } from "ethers";
import { provider, QUIZ_ABI, QUIZ_ADDRESS } from "../utils/consts";

export async function transaction(usr) {
  let quiz = new ethers.Contract(QUIZ_ADDRESS, QUIZ_ABI, provider.getSigner());

  let amount = ethers.utils.parseUnits("0", 18);

  await quiz.transfer(usr, amount);
}
