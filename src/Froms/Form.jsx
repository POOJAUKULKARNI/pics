import React from 'react'
import { FaEye, IconName } from "react-icons/fa";


    const Form = () => {
  return (
    <div>
          <legend>
        <Form>
          
                <label htmlFor='name'>Name</label>
                <input type="button" value="" id="name"/>
                <br />
                <label htmlFor='email'>E-mail</label>
                {/* <FaEye/> */}
                <input type="button" value="" id="email"/>
                <br />
                <label htmlFor='pwd'>Password</label>
                <input type="button" value="" id="pwd"/>
                <br />
                <button >Submit</button>
                </Form>
            </legend>
        
    </div>
  )
}
export default Form

