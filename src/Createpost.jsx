import React, { useState } from 'react'
import axiosInstance from './axoisInstance'

const Createpost = () => {
    let [courename,setcourename]=useState("")
    let [Authname,setAuthname]=useState("")

    let handleSubmit=async (e)=>{
        // e.preventDefault()
        try{
            let payload={
                courename,
                Authname
            }
            let data=await axiosInstance.post("/post", payload)
        }
        catch{
                console.log(courename,Authname);
               
                
        }

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="cn">courename</label>
            <br />
            <input type="text" id="cn"/>
            <br />
            <label htmlFor="an">Authname</label>
            <br />
            <input type="text" id="an" onChange={(e)=>{
                setAuthname(e.target.value)

            }}/>
            <br />
            <button> submit</button>
        </form>
    </div>
  )
}

export default Createpost