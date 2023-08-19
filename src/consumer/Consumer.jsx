import React, { useContext } from 'react'
import { ContextApi } from '../contextapi/ContextProvider'

const Consumer = () => {
    let data=useContext(ContextApi)
    console.log(data);
  return (
    <div>Consumer</div>
  )
}

export default Consumer