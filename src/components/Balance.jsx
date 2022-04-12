import React, { useEffect, useState } from "react";
import { checkBalanceContract } from "../controllers/checkBalance";

export default function Balance({ user }) {
  const [balance, setBalance] = useState("0");

  const handleCheckBalanceContract = async () => {
    let contractBalance = await checkBalanceContract(user);
    setBalance(contractBalance);
  };

  useEffect(()=>{
    handleCheckBalanceContract()
  },[])

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <hr />
    </div>
  );
}
