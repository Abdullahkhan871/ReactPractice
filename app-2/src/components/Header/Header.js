import React from "react";
import style from "./Header.module.css";
import Nav from "./Nav/Nav";
import { Logo } from "./BrandLogo/Logo";

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
