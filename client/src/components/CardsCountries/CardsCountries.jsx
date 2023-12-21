import styles from "./CardsCountries.module.css";
import React from "react";
import CardCountryPresentation from "../CardCountryPresentation/CardCountryPresentation";
import Loader from "../Loaders/Loader";

const CardsCountries = ({ allCountries }) => {
  if (allCountries.length === 0) {
    return <Loader className={styles.loader}  />;
  }

  return (
    <div className={styles.containerCardsCountries}>
      {allCountries.map((country) => (
        <CardCountryPresentation key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CardsCountries;
