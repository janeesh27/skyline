import React from "react";
import "./homescreen.css";

const Homescreen = () => {
  return (
    <div class="main">
      <div class="left"></div>
      <div class="right"></div>

      <div class="login">
        <form>
          <h3>Enter Password</h3>
          <br></br>
          <input type="password"></input>
          <br></br>
          <br></br>
          <button>login</button>
        </form>
      </div>
    </div>
  );
};

export default Homescreen;
