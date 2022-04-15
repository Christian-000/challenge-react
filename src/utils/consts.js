import abi from "../utils/quiz_abi.json";
import { ethers } from "ethers";

export const QUIZ_ADDRESS = "0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03";
export const QUIZ_ABI = abi;
export const provider = new ethers.providers.Web3Provider(window.ethereum);
