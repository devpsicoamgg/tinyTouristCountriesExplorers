import styles from "./HomePage.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getDetailCountry } from "../../redux/actions/actions";
import CardsCountries from "../CardsCountries/CardsCountries";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const [page, setPage] = useState(1);

  //se despacha la acción x useEffect getAll en el didMount
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const PageToBeChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const totalPages = Math.ceil(allCountries.length / 10);

  return (
    <div className={styles.containerHomePage}>
      <NavBar />
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
