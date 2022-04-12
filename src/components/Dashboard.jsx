import React, { useEffect } from 'react'
import { chainChanged } from '../controllers/chainChanged';
import { checkBalance, checkBalanceContract } from '../controllers/checkBalance';
import { getUser } from '../controllers/getUser'
import { transaction } from '../controllers/transactions';
import Balance from './Balance';
import Survey from './Survey';

export default function Dashboard() {
  
    const [user, chainId] = getUser();

    const handleChange = async (e) => {
        e.preventDefault();
        await chainChanged(chainId);
    }

    const handleBalance = async (e) => {
        e.preventDefault();
        await checkBalance(user);
    }



    const handleTransaction = async (e) => {
        e.preventDefault();
        await transaction(user);
    }
    return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={(e) => handleChange(e)}>Change to roften</button>
        <Balance user={user}/>
        <Survey />
        <button onClick={(e) => handleBalance(e)}>Balance</button>
        <button onClick={(e) => handleTransaction(e)}>Transaction</button>
    </div>
  )
}
