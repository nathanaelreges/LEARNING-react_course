import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member from './Member';


ReactDOM.render(
   <div>
      <Family>
         <Member name="Pedro" lastName="Silva"></Member>
      </Family>
   </div>
   , document.querySelector('.app'))

