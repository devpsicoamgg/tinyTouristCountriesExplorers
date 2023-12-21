import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../helpers/routesHelper";
import styles from "./CardCountryPresentation.module.css";

function CardCountryPresentation({ country }) {
  const { flag, name, id, continent } = country;
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`${ROUTES.COUNTRIES}${id}`);
  };

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
        <button onClick={handleViewMore}>🔎more...</button>
      </div>
    </div>
  );
}

export default CardCountryPresentation;
