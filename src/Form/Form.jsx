import React, { useState } from 'react'
import {FaEye,FaEyeSlash,IconName} from "react-icons/fa" 
import STYLE from "./styles.module.css"

const Form = () => {
    let[pass,setPass]=useState(false)

    let show=()=>{
        if(!pass)
        {
            setPass(true)
        }
        else{
            setPass(false)
        }
    }
  return (
    <div id="maindiv">
        
            <form>
            
            <legend >Form
                 <div>
                <label>Name</label>
                <input type="text" />
                </div>

                <div>
                <label>Email ID</label>
                <input type="text" />
                <br />
                </div>

               <div>
                <label>Password</label>
                <div onClick={show}>{pass ? <FaEye/> : <FaEyeSlash/>}</div>
                <input type={pass ? "text" : "password"}/>
                </div>
                
                <button>Submit</button>
                </legend>
                 
            </form>

      
    </div>
  )
}

export default Form