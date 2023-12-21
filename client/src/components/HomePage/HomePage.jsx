import styles from "./HomePage.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions/actions";
import CardsCountries from "../CardsCountries/CardsCountries";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);


   //se despacha la acción x useEffect getAll en el didMount
   useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);



  return (
    <div className={styles.containerHomePage}>
  <NavBar />
  <CardsCountries
        className={styles.CardsCountries}
        allCountries={allCountries}
      />

    </div>
  );
};

export default HomePage;
