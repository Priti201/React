import React from 'react'

const StateLifting = ({name,setName}) => {
   function handleChange(e){
    setName(e.target.value)
   }
  return (
    <div>
        <input type='text' value={name} onChange={handleChange}/>
    </div>
  )
}

export default StateLifting;