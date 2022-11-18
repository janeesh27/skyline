import React from "react";
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

      <div class="login">
        <form>
          <h3>Enter Password</h3>
          <br></br>
          <input
            type="password"
            placeholder="enter your password here.."
          ></input>
          <br></br>
          <br></br>
          <button>Enter Lab</button>
        </form>
      </div>
    </div>
  );
};

export default Homescreen;
