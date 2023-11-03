// import React, { useReducer } from 'react'

// const UseReducerPractice = () => {
//     function reducer(state, action){
//         const{type, value}= action;
       
//         return {
//             ...state,
//             [type]:value
//         }
//     }
// const initialState ={
//     name:'',
//     age:0
// }
// const[state, dispatch]= useReducer(reducer, initialState);

//  function handleChange(e){
//     // console.log(e.target.value);
//     dispatch({
//         type:e.target.name,
//          value: e.target.value
        
//     })
//  }
//  console.log(state, 'state');
// return(
//     <div>
//         <input type='text' name='name' onChange={handleChange}/>
//         <input type='number'name='age' onChange={handleChange}/>
//         <h1>{state.name} {state.age}</h1>
//     </div>
// )
// }

import React, { useReducer, useState } from 'react'
function reducer(state, action){
            return {
                ...state, [action.type] : action.payload
            }

}

const UseReducerPractice = () => {
    const[filled, setFilled]= useState(false);
    const initialState= {
        name:'',
        age:0,
        email:'',
        password:''
    }
    
    const[state, dispatch]= useReducer(reducer, initialState)

    function handleChange(e){
        dispatch({
            type: e.target.name,
            payload: e.target.value
        })
    }
    function handleClick(){
        setFilled(true)
    }
  return (
    <div>
        Name:
        <input type='text' name='name' onChange={handleChange}/>
        Age:
        <input type='number' name='age' onChange={handleChange}/>
        Email:
        <input type='email' name='email' onChange={handleChange}/>
        Password:
        <input type="password" name='password'onChange={handleChange}/>

        <button onClick={handleClick}>Submit</button>

        {
            (filled) && (<div className='light'>
                <p>Hello my name is {state.name} and i am {state.age}years old</p>
                <p>my email is {state.email} and password is {state.password}</p>
            </div>)
        }
    </div>
  )
}

export default UseReducerPractice;
