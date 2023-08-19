import React,{useContext} from 'react'
import { ContextApi } from './ContextProvider'
const Consumer = () => {
    let data= useContext(ContextApi)
  return (
    <div>
        <h1>{data}</h1>
        </div>
  )
}

export default Consumer