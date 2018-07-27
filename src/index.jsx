import React from 'react'
import ReactDOM from 'react-dom'
import FirstComp, { SecondComp } from './component'


ReactDOM.render(
   <div>
      <FirstComp val="Show!" />
      <SecondComp val="Show!" />
   </div>
   , document.querySelector('.app'))

