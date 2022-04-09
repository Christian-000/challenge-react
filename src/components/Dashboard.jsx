import React, { useEffect } from 'react'
import { chainChanged } from '../controllers/chainChanged';
import { getUser } from '../controllers/getUser'

export default function Dashboard() {
  
    const [user, chainId] = getUser();

    const handleChange = (e) => {
        e.preventDefault();
        chainChanged(chainId)
    }
    return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={(e) => handleChange(e)}>Change to roften</button>
    </div>
  )
}
