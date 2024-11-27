import React from "react";
import Nav from "./Nav";
import Login from "./Login";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
      <Login />
    </header>
  );
};

export default Header;
