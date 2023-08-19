import React, { Component } from 'react'

class course extends Component
{
  render()
  {
    let payload=this.props.data
    return(
    
      <div className="mainBlock">
      <center>
        <div>
          <img src={payload[0].photo} alt="" />
          <h3>{payload[0].course_name}</h3>
          <p>{payload[0].trainer_name}</p>
          <p>{payload[0].duration}</p>
          <p>{payload[0].language}</p>
        </div>
      </center>
      </div>
    )
  }
}
export default course
