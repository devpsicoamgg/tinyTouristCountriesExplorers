import React from "react";
import styles from "./CardsCountries.module.css";
import CardCountryPresentation from "../CardCountryPresentation/CardCountryPresentation";
import Loader from "../Loaders/Loader";

const CardsCountries = ({ allCountries, currentPage, selectedActivity, countriesPerPage }) => {
  if (allCountries.length === 0) {
    return <Loader className={styles.loader} />;
  }

  if (!Array.isArray(allCountries)) {
    //   window.alert(
    //    "No way, any country called" + allCountries
    //  );
    return <p className={styles.pErrorBack}>{allCountries} 😕 So sorry !!!</p>;
  }

  const startIndex = (currentPage - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;


const countriesToBeShown = allCountries
  .filter(
    (country) =>
      !selectedActivity ||
      (country.Activities &&
        country.Activities.some(
          (activity) => activity.name.toLowerCase() === selectedActivity.toLowerCase()
        ))
  )
  .slice(startIndex, endIndex);


  return (
    <div className={styles.containerCardsCountries}>
      {countriesToBeShown.map((country) => (
        <CardCountryPresentation key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CardsCountries;
