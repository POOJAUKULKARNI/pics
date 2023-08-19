import React, { Component } from 'react'

export default class Count extends Component {
    constructor()
    {
        super()
        {
            this.state={name:"anvika"}
        }
    update=()=>{
        this.setState({name:"anu"})
    }

    }
    
  render()
   {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.update}>CLICK</button>
      </div>
    )
  }
}
