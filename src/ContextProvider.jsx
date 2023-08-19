import React,{createContext,useState} from 'react'

export  let ContextApi=createContext()

const ContextProvider = ({children}) => {

  let [state,setState]=useState("ABC")
  return (
    <div>
      {/* <ContextApi.Provider value={state}>{children}</ContextApi> */}
      <ContextApi.Provider value={state}>{children}</ContextApi.Provider>
    </div>
  )
}

export default ContextProvider 