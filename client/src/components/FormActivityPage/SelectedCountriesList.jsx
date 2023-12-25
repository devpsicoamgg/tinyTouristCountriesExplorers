import React from "react";
import styles from "./SelectedCountriesList.module.css";

const SelectedCountriesList = ({
  countries,
  selectedCountries,
  handleCountryDeselect,
}) => (
  <div className={styles.selectedCountriesList}>
    {selectedCountries.map((countryId, index) => (
      <span key={countryId} className={styles.selectedCountry}>
        {countries.find((country) => country.id === countryId).name}
        <span
          className={styles.removeIcon}
          onClick={() => handleCountryDeselect(countryId)}
        >
          ⛔
        </span>
        {index < selectedCountries.length - 1 && ", "}
      </span>
    ))}
  </div>
);

export default SelectedCountriesList;
