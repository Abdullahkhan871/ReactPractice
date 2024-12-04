import React from "react";
import Btn1 from "./Btn.module.css";

const Btn = ({ props }) => {
  return (
    <button className={Btn1.btns}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Btn;
