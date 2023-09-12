import React from 'react'

function Input(props) {
  return (
   <input type ="text" placeholder=' Search Monster' onChange ={(e)=>props.nameChangeHandler(e)}/>
  )
}

export default Input