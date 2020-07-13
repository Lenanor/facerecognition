import React from "react";

import styles from "./Rank.module.css";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className={styles.textWrap}>
        <span className={styles.emoi} role='img' aria-label='hand waving hello'>
          👋{" "}
        </span>
        <span className={styles.bigBlueText}> Hej {name}!</span> <br />
        Här kan du testa om en bild innehåller{" "}
        <span className={styles.smallBlueText}>ett ansikte</span> (i nuläget
        endast ett). Det är jättelätt, kopiera bara in en bildadress i sökrutan
        nedanför och klicka på sök. <br /> <br />
        Antal bilder du hittills testat:
      </div>
      <div className={styles.bigNumber}>{entries}</div>
    </div>
  );
};

export default Rank;
