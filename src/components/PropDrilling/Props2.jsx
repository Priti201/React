import React from "react";
import Props3 from "./Props3";

const Props2 = ({ name, age }) => {
  return (
    <div>
      <h1>Props2</h1>
      <Props3 name={name} />
      <h2>{age}</h2>
    </div>
  );
};

export default Props2;
