import React from "react";

import "./Rank.css";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='textWrap'>
        <span className='emoi' role='img' aria-label='hand waving hello'>
          👋{" "}
        </span>
        <span className='bigBlueText'> Hej {name}!</span> <br />
        Här kan du testa om en bild innehåller{" "}
        <span className='smallBlueText'>ett ansikte</span> (i nuläget endast
        ett). Det är jättelätt, kopiera bara in en bildadress i sökrutan
        nedanför och klicka på sök. <br /> <br />
        Antal bilder du hittills testat:
      </div>
      <div className='bigNumber'>{entries}</div>
    </div>
  );
};

export default Rank;
