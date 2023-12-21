import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../helpers/routesHelper";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import TITLE from "../../images/titleMain.png";

const NavBar = () => {
  return (
    <>
      <div className={styles.containerNavBarMain}>
        <span className={styles.containerNavBarFirstOne}>
          
            <img src={TITLE} className={styles.titleMain} alt="Title" />
          
          <SearchBar />
          <Link to={ROUTES.ACTIVITIES_POST}>👨🏽‍🎨👩🏽‍🎨</Link>
        </span>

        <div className={styles.containerNavBarSecondOne}>

        </div>
      </div>
    </>
  );
};

export default NavBar;
