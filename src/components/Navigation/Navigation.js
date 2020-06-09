import React from "react";

import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className='nav'>
        <p className='navLink' onClick={() => onRouteChange("signout")}>
          Logga ut
        </p>
      </nav>
    );
  } else {
    return (
      <nav className='nav'>
        <p className='navLink' onClick={() => onRouteChange("signin")}>
          Logga in
        </p>
        <p className='navLink' onClick={() => onRouteChange("register")}>
          Skapa konto
        </p>
      </nav>
    );
  }
};

export default Navigation;
