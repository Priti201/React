import React from 'react'
import { useSearchParams } from 'react-router-dom'

const UseSearchParamsHook = () => {
    const[searchParam, setSearchParam]= useSearchParams();
    const searchTerm = searchParam.get('name')
    function handleInputChange(e){
        let name= e.target.value;
        if(name)
        {
            setSearchParam({name: name});
        }
    }

  return (
    <div>
        <input type="text" value={searchTerm} onChange={handleInputChange}/>

    </div>
  )
}

export default UseSearchParamsHook