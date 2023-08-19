import React, { useEffect, useState } from 'react'
import axiosInstance from './axoisInstance'

const ViewPost = () => {
    let [data,setdata]=useState([])
    useEffect(()=>{
        let fetchData=async () => {
        let {data}=await  axiosInstance.get("/posts")
        setdata(data)
        }
        fetchData()
    },[])
  return (
    <div style={{display:"flex"}}>{data.map((x)=>{
        return(
            <div style={{border:"2px solid black",width:"40px",diaplay:"flex",flexDirection:"column",alignitem:"center"}}>
            <h1>{x.courename}</h1>
            <h1>{x.Authname}</h1>
            </div>
            
        )
    }
    )}
    </div>
  )
}

export default ViewPost