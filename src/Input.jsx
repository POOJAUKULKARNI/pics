import React, { Component } from 'react'

export default class extends Component {
    constructor()
    {
        super()
        this.state={
            userName:"pooja"
        }
        this.componentDidMount()
        {
            document.querySelector("input").addEventListener("keypress",(e)=>{
              this.setState({userName:e.target.value})

            })
        }
    }
  render() {
    return (
      <div>
      <h1>{this.state.userName}</h1>
      <input type="text" />
      </div>
    )
  }
}

