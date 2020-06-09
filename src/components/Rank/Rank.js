import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div>
        <span role='img' aria-label='hand waving hello'>
          👋{" "}
        </span>
        Hej {name}, antal bilder du testat:
      </div>
      <div>{entries}</div>
    </div>
  );
};

export default Rank;
