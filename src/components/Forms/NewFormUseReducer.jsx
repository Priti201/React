import React ,{ useReducer, useState }from 'react'

// const NewFormUseReducer = () => {
//     const [submitting, setSubmitting] = useState(false);

//     const[state, dispatch]= useReducer(reducer, {});

//     function handleSubmit(e) {
//       e.preventDefault();
//       setSubmitting(true);
  
//       setTimeout(() => {
//         setSubmitting(false);
//       }, 3000);
//     }

// //   function reducer(state, event){
// //     return{
// //         ...state,
// //         [event.target.name] : event.target.value
// //     }
// //   }
// function reducer(state, action){
//     // console.log(action);
//     const{name, value} =action;

//     return{
//         ...state,
//         [name]: value
//     }
// }
//     // const [data, setData] = useState({
//     //   name: "",
//     //   email: "",
//     //   password: "",
//     // });
   
 
// //   function handleFormChange(e) {
// //       setData((prevData)=>{
// //           return {
// //               ...prevData,
// //               [e.target.name] : e.target.value
// //           }
// //       })
// //     }

// function handleFormChange(e) {
//     // console.log(e);
//         dispatch({
//             name: e.target.name,
//             value: e.target.value
//         }) 
//  }
//     console.log(state);
//     return (
//       <div>
//         <h1>Form</h1>
//         {submitting && <div>Form is getting submitted...</div>}
//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input name="name" onChange={handleFormChange} />
//           <label>Email</label>
//           <input name="email" onChange={handleFormChange} />
//           <label>Password</label>
//           <input name="password" onChange={handleFormChange} />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
// }

// export default NewFormUseReducer

const NewFormUseReducer = () => {

    const reducer= (state, action)=>{
        const{name, value} = action
        return{
            ...state,
            [name]: value
        }
    }
    const[submitting, setSubmitting]= useState(false);
    const[state, dispatch]= useReducer(reducer, {})

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitting(true);

        setTimeout(()=>{
            setSubmitting(false);

        },3000)
    }
    const handleChange=(e)=>{
        dispatch({
            name: e.target.name,
            value: e.target.value
        })
    }
    // console.log(state);
  return (
    <div>
      <h1>Form</h1>
      {submitting && (
      <div>
        You have submitted the following:
        <ul>
            {
                Object.entries(state).map(([name, value])=>(
                    <li>{name}:{value.toString()}</li>
                ))
            }
        </ul>
      </div>
      )}
      <form onSubmit={handleSubmit}  >
        <label>Name</label>
        <input name="name" onChange={handleChange} disabled={submitting}/>
        <label>Email</label>
        <input name="email" onChange={handleChange} disabled={submitting}/>
        <label>Password</label>
        <input name="password" onChange={handleChange} disabled={submitting}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewFormUseReducer