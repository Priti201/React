import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
const Details = ({user}) => {
    // console.log(user);
    const[searchParam, setSearchParam]= useSearchParams();
    const searchTerm = searchParam.get('name') || ''
    function handleInputChange(e){
        let name= e.target.value;
        if(name)
        {
            setSearchParam({name: name});
        }
    }
  return (
    <div>
    <h2>User Details</h2>
    <input type="text" value={searchTerm} onChange={handleInputChange}/>

    <ul>
        {user?.filter((user)=>user.name.toLowerCase().includes(searchTerm?.toLowerCase()))
        .map((item)=>(
            <li key={item.id}>
                <Link to={item.id}>{item.name}</Link>
            </li>
        ))}
    </ul>
    <Outlet/>
    </div>
  )
}

export default Details