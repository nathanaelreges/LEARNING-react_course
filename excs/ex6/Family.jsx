import React from 'react'
import { childrenWithProps } from '.././utils/reactUtils'

const Family = props => (
   <div> 
      <h1>Família</h1>
      { childrenWithProps(props.children, props) }
   </div>
)

export default Family