import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../helpers/routesHelper";
import GIFWAIT from "../../images/waiting.gif";
import styles from "./CardCountryPresentation.module.css";


function CardCountryPresentation({ country }) {
  const [loadingImg, setLoadingImg] = useState(true);
  const { flag, name, id, continent } = country;
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setLoadingImg(false);
  };

  const handleViewMore = () => {
    navigate(`${ROUTES.COUNTRIES}${id}`);
  };

  return (
    <div className={styles.containerCardCountryPresentation}>
      <div className={styles.titleContainer}>
        <p>
         {name} - {continent} <br />
        </p>
      </div>
      <div className={styles.flagContainer}>
      {loadingImg && (
        <img
          src={GIFWAIT}
          alt="Loading img..."
          className={styles.imgFlagsCountries}
        />
      )}
      <img
        src={flag}
        alt={name}
        className={styles.imgFlagsCountries}
        onLoad={handleImageLoad}
      />
    </div>
      <div className={styles.linkContainer}>
        <button onClick={handleViewMore}>🔎more...</button>
      </div>
    </div>
  );
}

export default CardCountryPresentation;
