import React, { useState,createContext } from 'react'
export let ContextApi=createContext()

const ContextProvider = ({children}) => {
    let [state,setState]=useState("anvika")
  return (
   <ContextApi.Provider value={state}>{children}</ContextApi.Provider>
  )
}

export default ContextProvider