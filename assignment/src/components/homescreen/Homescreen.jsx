import React from "react";
import Loginfrom from "../Loginform";
import "./homescreen.css";

const Homescreen = () => {
  return (
    <div class="main">
      <div class="parts">
        <button>EXIT</button>
        <h1 id="countdown">00:10:00</h1>
      </div>
      <div class="left"></div>
      <div class="right"></div>
      <Loginfrom />
    </div>
  );
};

export default Homescreen;
