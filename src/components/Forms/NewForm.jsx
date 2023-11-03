import React, { useState } from "react";

const NewForm = () => {
  const [submitting, setSubmitting] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
//   function handleFormChange(e) {
//     if (e.target.name === "name")
//      setData({ ...data, name: e.target.value });
//     else if (e.target.name === "email")
//       setData({ ...data, email: e.target.value });
//     else
//      setData({ ...data, password: e.target.value });
//   }

function handleFormChange(e) {
    setData((prevData)=>{
        return {
            ...prevData,
            [e.target.name] : e.target.value
        }
    })
  }
  console.log(data);
  return (
    <div>
      <h1>Form</h1>
      {submitting && <div>Form is getting submitted...</div>}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" onChange={handleFormChange} />
        <label>Email</label>
        <input name="email" onChange={handleFormChange} />
        <label>Password</label>
        <input name="password" onChange={handleFormChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;
