import React from "react";
import style from "./Nav.module.css";

const Nav = () => {
  const data = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Contact",
    },
  ];

  return (
    <nav>
      <ul className={style.ul}>
        {data.map((item) => (
          <li className={style.li} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
