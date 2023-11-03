import React, { useState } from 'react'

const Forms = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[entry, setEntry] = useState([])
    function handleSubmit(e){
      e.preventDefault();
      // const newEntry = {id:new Date().getTime().toString(), email : email, password : password};
      if(email && password)
     {
        const newEntry = {id:new Date().getTime().toString(), email , password };

        setEntry([...entry, newEntry])
        // console.log(entry);
        setEmail('');
        setPassword('');
     }
     else{
      alert('please fill all the fileds')
     }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type='text' name='email' id='email' autoComplete='off'
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}/>
                <br/>

                <label htmlFor="password">Password</label>
                <input type='password' name='password' id='password'
                value={password} autoComplete="off"
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <button type='submit'>Login</button>
        </form>
        <div>
          {
            entry.map((curr)=>{
              const{id, email, password}= curr
              return(
                //  <div key={curr.id}>
                //   {curr.email}<br/>
                //   {curr.password} 
                <div key={id}>
                  {email} <br/>
                  {password}
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Forms