import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error404.module.css";
import ROUTES from "../../helpers/routesHelper";

const Error404 = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate(ROUTES.HOME); 
  };

  return (
    <div className={styles.containerError404Page}>
      <p className={styles.errorText} onClick={handleNavigateToHome}>
        Oopsie-daisy!
        <br /> Error 404
      </p>
    </div>
  );
};

export default Error404;
