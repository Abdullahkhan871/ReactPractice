import React from "react";

const RightSection = ({ vlv }) => {
  return (
    <div className="rightSection">
      <p>Name : {vlv.v1} </p>
      <p>Email : {vlv.v2}</p>
      <p>Commnent : {vlv.v3}</p>
    </div>
  );
};

export default RightSection;
