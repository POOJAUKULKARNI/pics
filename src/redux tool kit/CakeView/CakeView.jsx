import React from 'react'
import {order,restock} from "../CakeSlice/CakeSlice"
import { useDispatch, useSelector } from 'react-redux'


const CakeView = () => {
    let NUmberofCakes=useSelector((state)=>state.cake.nomOfCake)
    let dispatch=useDispatch()
  return (
    <div>
        <h1>{NUmberofCakes}</h1>
        <button onClick={()=>dispatch(order(3))}>order</button>
        <button onClick={()=>dispatch(restock(6))}>restock</button>
    </div>
  )
}

export default CakeView