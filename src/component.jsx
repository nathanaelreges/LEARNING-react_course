import React from 'react'

const FirstComp = props => (
   <h1> This is the first Component: {props.val} </h1>
)  

const SecondComp = props => (
   <h1> This is the second Component: {props.val} </h1>
)

export default FirstComp

export { SecondComp }


