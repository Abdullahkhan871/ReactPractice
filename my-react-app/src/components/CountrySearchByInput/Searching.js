import React, { useState } from "react";
import countries from "./Data1";

const Searching = () => {
  const [val, setVal] = useState("");

  function handle(eve) {
    setVal(eve.target.value);
  }

  return (
    <div>
      <input type="text" value={val} onChange={(eve) => handle(eve)} />
      <div className="countries-name">
        <ul>
          {countries
            .filter((item) => item.toLowerCase().includes(val.toLowerCase()))
            .map((names, ind) => (
              <li key={ind}>{names}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Searching;
