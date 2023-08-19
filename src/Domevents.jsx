import React, { Component } from 'react'

export default class Domevents extends Component {
    constructor(){
        super()
        this.state={username:"srinika"}
    }
    componentDidMount(){
        let btn=document.querySelector("button")
        btn.addEventListener("click",()=>{
            this.setState({username:"srinu"})
        })
    }
  render() 
  {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button>CLICK</button>
      </div>
    )
  }
}
