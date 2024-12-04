import React, { useState } from "react";
import Style from "./ContentSection.module.css";
import Btn from "../../Button/Btn";
import { IoChatboxEllipses, IoMailOpenSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import Form from "../Form/Form";
import RightSection from "../righSection/RightSection";

const ContentSection = () => {
  const iconData = [
    {
      id: 1,
      text: "VIA SUPPORT CHAT",
      icon: <IoChatboxEllipses />,
    },
    {
      id: 2,
      text: "VIA CALL",
      icon: <IoMdCall />,
    },
  ];

  const data = {
    id: 3,
    text: "VIA EMAIL FORM",
    icon: <IoMailOpenSharp />,
  };

  const [rVlv, setrVlv] = useState("");

  const returnValue = (v1, v2, v3) => {
    setrVlv({ v1, v2, v3 });
  };
  return (
    <>
      <div>
        <h1 className={Style.heading}>CONTACT US</h1>
        <p className={Style.para}>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <div className={Style.contentBorder}>
        <div>
          {iconData.map((item) => (
            <Btn key={item.id} props={item} />
          ))}
        </div>
        <div>
          <button className={Style.btn}>
            {data.icon}
            {data.text}
          </button>
        </div>
        <div className={Style.contactUs}></div>
        <div>
          <Form returnValue={returnValue} />
        </div>
      </div>
      <RightSection vlv={rVlv} />
    </>
  );
};

export default ContentSection;
