import { Typography } from "@mui/material";
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
      <Typography variant="h4" color="black" fontWeight={750} marginTop={5}>Balance: {balance}</Typography>
      <hr />
    </div>
  );
}
