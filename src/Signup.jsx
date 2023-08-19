import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import  STYLE from "./Signup.css"

const Signup = (props) => {
  let [email, setemail] = React.useState('') 
  let [password, setpassword] = React.useState('')

  let navigate=useNavigate()

  let  emailHandler=(e)=>{
    setemail(e.target.value)
  }
  let  passwordHandler=(e)=>{
    setpassword(e.target.value)
  }
  let SubmitHandler=(e)=>{
   e.preventDefault()
   if(emailHandler.includes("@")&&password.length>8){
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    navigate("/signuo")
   }
   else{
    window.alert("INVALID")
    navigate("/signup")
   }
  }
  return (
    <>
    <div>
    <form action="" onSubmit={SubmitHandler}>
    
    <h3>SIGNUP</h3>
     <input type="email" placeholder='Email' />
     <br />
     <input type="password" placeholder='createpassword' />
     <br />
     <input type="password" placeholder='confirmpassword' />
     <br />
     <button type="submit" onClick={()=>{
      toast.success(`sucessfully created`,{position:toast.POSITION.TOP_CENTER})
     }}>Signup</button>
     <div>
      <a href="">Already have an account?</a>
      <Link to="/">Login</Link>
     </div>
    </form>
    </div>
    </>
  )
}

export default Signup