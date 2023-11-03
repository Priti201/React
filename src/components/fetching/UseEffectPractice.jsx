import React, { useEffect, useState } from 'react'

const UseEffectPractice = () => {

    const [userName, setUserName]= useState([])
    async function fetching(){
        try{
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await res.json();
        // console.log(data);
        setUserName(data)
        }
        catch(e){console.log('error occured in fetching',e)};
    }
    
    useEffect(()=>{
        fetching();
    },[]);
  return (
    <div>
       {
        userName.map(users=><div>{users.id}{users.username}</div>)
       }
    </div>
  )
}

export default UseEffectPractice