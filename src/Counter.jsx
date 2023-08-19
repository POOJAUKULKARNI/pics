import React from 'react'
import {useState} from  'react'

const Counter = () => {
    let[count,setCount]=useState(0)
    console.log(count)
    let handleIncrement=()=>{
        setCount(count+1)
        
    }
    let handleDetcrement=()=>{

        setCount(count-1)
        
    }
    let handlaReset=()=>{

        setCount(0)
        
    }
    
  return (
    <div className='div'>
        <h1>{count}</h1>
        <div className='buttons'>
        <button onClick={handleIncrement}>+ INC</button>
        <button onClick={handleDetcrement}>- DEC</button>
        <button onClick={handlaReset}>R</button>
        </div>
    </div>
  )
}

export default Counter