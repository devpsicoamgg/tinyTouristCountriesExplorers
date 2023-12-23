import styles from "./HomePage.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  getDetailCountry,
  getCountryByName,
  getContinentList,
  filterByContinent,
  getActivities,
} from "../../redux/actions/actions";
import CardsCountries from "../CardsCountries/CardsCountries";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const continentList = useSelector((state) => state.continentList);

  const [searchByString, setSearchByString] = useState("");
  const [page, setPage] = useState(1);

  //se setea un estado con el valor que va entrando al input se pasa a navbar
  const handleChange = (event) => {
    event.preventDefault();
    setSearchByString(event.target.value);
  };

  //se despachan accioens de bsuqyeda invocando al estado y dejando el estado local se pasan a navbar
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(searchByString));
    setPage(1);
  };

  const handleContinentChange = (selectedContinent) => {
    dispatch(
      filterByContinent(
        selectedContinent === "Continents" ? "" : selectedContinent
      )
    );
    setPage(1);
  };

  //se despacha la acción x useEffect getAll en el didMount
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getContinentList());
    dispatch(getActivities());
  }, [dispatch]);

  const PageToBeChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const totalPages = Math.ceil(allCountries.length / 10);

  return (
    <div className={styles.containerHomePage}>
      <NavBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        continentList={continentList}
        onContinentChange={handleContinentChange}
      />

      <CardsCountries
        className={styles.CardsCountries}
        allCountries={allCountries}
        getDetailCountry={getDetailCountry}
        currentPage={page}
        PageToBeChange={PageToBeChange}
      />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        PageToBeChange={PageToBeChange}
      />
    </div>
  );
};

export default HomePage;
