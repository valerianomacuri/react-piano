import React, { FunctionComponent } from "react";
import "./style.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>
        Created by{" "}
        <a href="https://valerianomacuri.vercel.app">Leonardo Valeriano</a> with{" "}
        <a href="https://fullstack.io">Fullstack.io</a>
      </span>
      <br />
      {currentYear}
    </footer>
  );
};
