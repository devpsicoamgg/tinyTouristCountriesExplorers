import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../helpers/routesHelper";
import SearchBar from "../SearchBar/SearchBar";
import FilterByContinent from "../FiltersAndOrders/FilterByContinent/FilterByContinent";
import styles from "./NavBar.module.css";
import TITLE from "../../images/titleMain.png";

//f() de search del input un simple pasamanos en navBar

const NavBar = ({
  handleChange,
  handleSubmit,
  onContinentChange,
  continentList,
}) => {
  return (
    <>
      <div className={styles.containerNavBarMain}>
        <span className={styles.containerNavBarFirstOne}>
          <img src={TITLE} className={styles.titleMain} alt="Title" />
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
          <FilterByContinent
            continentList={continentList}
            onContinentChange={onContinentChange}
          />
          <Link to={ROUTES.ACTIVITIES_POST}>👨🏽‍🎨👩🏽‍🎨</Link>
        </span>
        <div className={styles.containerNavBarSecondOne}></div>
      </div>
    </>
  );
};

export default NavBar;
