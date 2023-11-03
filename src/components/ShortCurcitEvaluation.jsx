import React, { useState } from 'react'

const ShortCurcitEvaluation = () => {
    const[isActive, setIsActive] = useState(false);
  return (
    <>
    {
        (isActive) && (<div>
            Hello!!
        </div>)
        
    }
    <button onClick={()=>setIsActive(!isActive)} >Click Me!!</button>
  </>
  )
}

export default ShortCurcitEvaluation