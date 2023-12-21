import styles from "./CardsCountries.module.css";
import React from "react";
import CardCountryPresentation from "../CardCountryPresentation/CardCountryPresentation";
import Loader from "../Loaders/Loader";

const CardsCountries = ({ allCountries, currentPage, PageToBeChange }) => {
  if (allCountries.length === 0) {
    return <Loader className={styles.loader}  />;
  }

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const countriesToBeShown = allCountries.slice(startIndex, endIndex);

  return (
    <div className={styles.containerCardsCountries}>
      {countriesToBeShown.map((country) => (
        <CardCountryPresentation key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CardsCountries;
