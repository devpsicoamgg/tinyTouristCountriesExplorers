import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../helpers/routesHelper";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import FilterByContinent from "../FiltersAndOrders/FilterByContinent/FilterByContinent";
import styles from "./NavBar.module.css";
import TITLE from "../../images/titleMain.png";
import CREATEACTIMG from "../../images/createAct.png";
import OrderByArea from "../FiltersAndOrders/OrderByArea/OrderByArea";
import OrderByName from "../FiltersAndOrders/OrderByName/OrderByName";
import OrderByPopulation from "../FiltersAndOrders/OrderByPopulation/OrderByPopulation";
import FilterByActivities from "../FiltersAndOrders/FilterByActivities/FilterByActivities";
import { getActivities } from "../../redux/actions/actions";

const NavBar = ({
  handleChange,
  handleSubmit,
  onContinentChange,
  continentList,
  orderCardsByType,
  handleActivityChange,
}) => {
  const dispatch = useDispatch(); // Obtén la función dispatch
  const navigate = useNavigate();
  const activitiesList = useSelector((state) => state.activitiesList);

  const handleNavigateToWelcomePage = () => {
    navigate(ROUTES.WELCOME_PAGE);
  };
  const handleNavigateToActivity = () => {
    navigate(ROUTES.ACTIVITIES_POST);
  };
  
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <>
      <div className={styles.containerNavBarMain}>
        <span className={styles.containerNavBarFirstOne}>
          <img
            onClick={handleNavigateToWelcomePage}
            src={TITLE}
            className={styles.titleMain}
            alt="Title"
          />
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <img src={CREATEACTIMG} alt="Activities" className={styles.createActImgLink} onClick={handleNavigateToActivity}/> 
        </span>
        <div className={styles.containerNavBarSecondOne}>
          <FilterByContinent
            continentList={continentList}
            onContinentChange={onContinentChange}
          />
          <FilterByActivities
            activitiesList={activitiesList}
            handleActivityChange={handleActivityChange}
          />
          <OrderByArea orderCardsByType={orderCardsByType} />
          <OrderByName orderCardsByType={orderCardsByType} />
          <OrderByPopulation orderCardsByType={orderCardsByType} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
