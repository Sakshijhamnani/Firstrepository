import React from 'react'
import {useState} from 'react'
import './RandomNumber.css'

// 1 .."create state ,store number , Generate table ", "cerate a button , update state with random value, update table"

export default function RandomNumber() {
    const [randomNumbers, setRandomNumbers] = useState([]);

  const addOnMoreNumber = () => {
    setRandomNumbers([Math.round(Math.random() * 100), ...randomNumbers]);
  };

  return (
    <div>
      <button onClick={addOnMoreNumber}>Add Random Number</button>
      
     
      <ul>
       <h3>Random Numbers</h3>
        {randomNumbers.map((number) => (
        
          <table className="">
            <tr>
            <td>{number}</td>
            </tr>
            </table>
        ))}
      </ul>
    </div>
  )
}

