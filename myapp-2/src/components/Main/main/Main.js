import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import Style from "./Main.module.css";

const Main = () => {
  return (
    <main className={Style.main}>
      <ContentSection />
    </main>
  );
};

export default Main;
