import React from "react";

const Nav = () => {
  const navData = ["MENU", "LOCATION", "ABOUT", "CONTACT"];
  return (
    <nav className="nav-center">
      <ul>
        {navData.map((elem, ind) => (
          <li key={ind}>{elem}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
