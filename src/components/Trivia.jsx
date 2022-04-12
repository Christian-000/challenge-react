import React, { useState } from 'react'
import trivia from "../utils/surveys.json";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { id } from 'ethers/lib/utils';

let seconds = trivia.questions[0].lifetimeSeconds
export default function Trivia() {
    const [sec, setSec] = useState(seconds);
  return (
    <div>
        {
            trivia.questions &&
            <div>
            <h1>{trivia.questions[0].text}</h1>
            <img src={trivia.questions[0].image} alt="" />
            <br />

            </div>
        }
    </div>   
  )
}
