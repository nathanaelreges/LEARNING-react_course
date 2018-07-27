import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './ClassComponent'


ReactDOM.render(
   <ClassComponent label="Counter" initialValue={10} />
   , document.querySelector('.app')
)

