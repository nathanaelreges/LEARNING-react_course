import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member from './Member';


ReactDOM.render(
   <div>
      <Family lastName="Silva">
         <Member name="Pedro"></Member>
         <Member name="João"></Member>
         <Member name="Silvia"></Member>
         <Member name="Natália"></Member>
      </Family>
   </div>
   , document.querySelector('.app'))

