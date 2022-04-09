import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connectWallet } from '../controllers/connectWallet'


export default function Connect() {
    let navigate = useNavigate();

    const handleAccount = async (e) => {
        e.preventDefault();
        await connectWallet();
        navigate("dashboard")
    } 

  return (
    <div>
        <h1>Connect with ur Metamask account...</h1>
        <button onClick={(e) => handleAccount(e)}>Connect</button>
    </div>
  )
}
