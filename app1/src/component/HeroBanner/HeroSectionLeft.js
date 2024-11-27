import React from "react";
import Cta from "./Cta";
import amazon from '../../Images/amazon.png'
import flipkart from '../../Images/flipkart.png'

const HeroSectionLeft = () => {
  return (
    <div className="left">
      <div className="content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>
      <Cta />
      <div className="availability">
        <h6>Also Available On</h6>
        <img src={amazon}/>
        <img src={flipkart}/>
      </div>
    </div>
  );
};

export default HeroSectionLeft;
