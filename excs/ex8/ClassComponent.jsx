import React, { Component } from 'react'


export default class ClassComponent extends Component {
   constructor (props) {
      super(props)
      this.state = { value: props.initialValue }
   }

   sum (val) {
      this.setState( {value: this.state.value + val} )
   }

   render () {
      return <div>
         <h1>{this.props.label}</h1>
         <p>{this.state.value}</p>
         <button onClick={()=>(this.sum(-1))} > Dec </button>
         <button onClick={()=>(this.sum(1))} > Inc </button>
      </div>
   }
}