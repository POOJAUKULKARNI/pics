import React from 'react'
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import Cards from "./Cards.css" 
import STYLE from "./Login1.css"

const Login =() =>{
  let [email, setemail] = useState('') 
 let [password, setpassword] =useState('')

 let navigate=useNavigate()

 let  emailHandler=(e)=>{
   setemail(e.target.value)
 }
 let  passwordHandler=(e)=>{
   setpassword(e.target.value)
 }
 let SubmitHandler=(e)=>{
  e.preventDefault()
  
  let localemail=localStorage.getItem("email")
  let localepassword=localStorage.getItem("password")
  if(email===localemail && password===localepassword){
   navigate("/signup")
  }
 }
 return (
  
  <div className={STYLE.maindiv}>
   <div className={STYLE.body}>
    <ToastContainer/>
    <h3>LOGIN</h3>
     <form action="" onSubmit={SubmitHandler}>

      <input type="email" placeholder='Email'/>
     
     <input type="password"  placeholder='Password'/>
     <div className={STYLE.anchor}>
       <a href="#">Forgot password?</a>

     </div>
     <button type="submit" onClick={()=>{
      toast.success(`successfully logged in`, {position: toast.POSITION.TOP_CENTER})
     }}>Login</button>
    <div>
     <h5>Dont have an account?</h5>
     <Link to="/signup"> Signup</Link>
     <br />
     <button>Login with Facebook</button>
     <button className={STYLE.btn}>Login with Google</button>
     </div>
     </form>
     

   </div>
   </div>
 )

 }
export default Login


