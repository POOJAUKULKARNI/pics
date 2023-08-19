import React from 'react'
import "./App.css"
const Details = (props) => {
    let data=props.data
  return (
    <>
   <div className='wrapper'>
    {data.map((x)=>{
        return(
            <div className='container' key={x.id}>
                <div className='photo'>
                    <div className="img">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/%7b%7b${x.name}%7d%7d.svg?options%5bmood%5d%5b%5d=happy`} alt="" />
                    </div>
                </div>
                <div className="details">
                    <div id="name">{x.name}</div>
                    <div id="email">{x.email}</div>
                    <div id="mobile">{x.mobile}</div>
                    <div id="website">{x.website}</div>

                </div>
                <div className='line'></div>

                <ul className='list'>
                    <button id="like">LIKE</button>
                    <li id="gap">|</li>
                    <button id="edit">EDIT</button>
                    <li id="gap">|</li>
                    <button id="del">DEL</button>
                   
                </ul>
            </div>
        )
    })}
   </div>
    </>
  )
}

export default Details