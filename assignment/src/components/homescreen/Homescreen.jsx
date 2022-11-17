import React from "react";
import "./homescreen.css";

const Homescreen = () => {
  return (
    <div class="main">
      <div class="left">
        <form>
          <h3>Enter Password</h3>
          <input type="password"></input>
          <br></br>
          <button>login</button>
        </form>
      </div>
      <div class="right"></div>
    </div>
  );
};

export default Homescreen;
