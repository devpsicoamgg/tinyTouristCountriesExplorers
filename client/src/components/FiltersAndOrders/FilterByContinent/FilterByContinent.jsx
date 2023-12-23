import React from "react";
import styles from "./FilterByContinent.module.css";

const FilterByContinent = ({ continentList, onContinentChange }) => {
  const handleContinentChange = (event) => {
    const selectedContinent = event.target.value;
    onContinentChange(selectedContinent);
  };

  return (
    <div className={styles.containerFilterByContinent}>
      <select
        id="continentFilter"
        className={styles.selectByContinent}
        onChange={handleContinentChange}
      >
        <option value="">All Continents</option>
        {continentList.map((continent, index) => (
          <option key={index} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByContinent;
