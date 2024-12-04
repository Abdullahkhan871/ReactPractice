import axios from "axios";
import React, { useState } from "react";

const UserInput = ({setGetData}) => {

  const [inputValue, setInputValue] = useState("");

  function handleSubmit(eve) {
    eve.preventDefault();

    if (inputValue) {
      setGetData(inputValue)
    } else {
      alert("Please fill the input before submit");
    }
  }

  return (
    <div className="user-input">
      <form onSubmit={(eve) => handleSubmit(eve)}>
        <input
          type="text"
          onChange={(eve) => setInputValue(eve.target.value)}
          value={inputValue}
          placeholder="please Search here ..."
        />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default UserInput;
