import React from "react";
import styles from "./CardCountryPresentation.module.css";

function CardCountryPresentation({ country }) {
  const { flag, name, id, continent } = country;




  return (
    <div className={styles.containerCardCountryPresentation}>
      <div className={styles.titleContainer}>
        <p>
          {name} - {continent}
        </p>
      </div>
      <div className={styles.flagContainer}>
        <img src={flag} alt={name} className={styles.imgFlagsCountries} />
      </div>
      <div className={styles.linkContainer}>
        <button>🔎more...</button>
      </div>
    </div>
  );
}

export default CardCountryPresentation;
