import React from "react";

import monkey from "./logo.svg";
import Tilt from "react-tilt";

import "./Logo.css";

const Logo = () => {
  return (
    <div className='flexItem'>
      <Tilt className='Tilt' options={{ max: 35 }}>
        <div className='Tilt-inner'>
          {" "}
          <img className='monkeyLogo' src={monkey} alt='Logo' />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
