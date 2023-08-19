import React from 'react'
//import { FaEye, IconName } from "react-icons/fa";

export const From = () => {
    
  return (
    <div>
        <legend>
        <From>
             
                <label>Name</label>
                <input type="text"/>
                <br />
                <label>E-mail</label>
                {/* <FaEye/> */}
                <input type="text"/>
                <br />
                <label>Password</label>
                <input type="password"/>
                <br />
                <button>Submit</button>
            
        </From>
        </legend>
    </div>
  )
}
export default From

