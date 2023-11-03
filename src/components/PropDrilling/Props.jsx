import React from "react";
import Props2 from "./Props2";

function Props({ name, age }) {
  return (
    <div>
      {/* {props.name} */}
      {/* <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{city}</h3>
        <h4>{state}</h4> */}
      <h1>Prop1</h1>
      <Props2 name={name} age={age} />
    </div>
  );
}

export default Props;
