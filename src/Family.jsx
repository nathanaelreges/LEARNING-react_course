import React from 'react'

const Family = props => (
   <div> 
      <h1>Família</h1>
      { React.cloneElement(props.children, { ...props }) }
   </div>
)

export default Family