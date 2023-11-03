import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const[users, setUsers]= useState([]);
    const[error, setError]= useState(null);
    const[loading, setLoading] = useState(true);
    async function fetching(){
        try{
            const res = await axios.get('https://dummyjson.com/users')
            // console.log(res.data.users);
            setUsers(res.data.users)
            setLoading(false);
        }
        catch(e){
            setError('An error occured while fetching')
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetching();
    },[])

    // console.log(users[0]);

    if(error)
    {
        return(
            <div>Error: {error}</div>
        )
    }

    if(loading)
    return <h2>Loading...</h2>


    return (
        <div>
            <h1>users</h1>
        
            {users.map((item)=>{
                return(
                    <div key={item.id}>
                    <h4>{item.id}</h4>
                    <p >{item.firstName} {item.maidenName} {item.lastName}</p>
                    </div>
                )
            })}
        
        </div>
    )
}

export default Axios