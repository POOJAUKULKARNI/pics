import React {useState} from 'react'
import axiosInsatance from "../helpers/axiosinstance"

const Createpost = () => {
    let [username, setUsername] = useState("")
    let [trainername, setTrainername] = useState("")

    let handleSubmit = async(e) => {
   
      e.preventDefault()
      let payload={
        username,trainername
      }
    let data= await axiosInstance.post('/posts', payload)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="coursename">COURSE_NAME</label>
            <input type="text" id="coursename" onChange={(e)=>{
                 setUsername(e.target.value)
            }}/>
            <br />
            <label htmlFor="trainername">TRAINER_NAME</label>
            <input type="text" id="tarinername"/>
            <button>CREATE_POST</button>
        </form>
    </div>
  )
}

export default Createpost