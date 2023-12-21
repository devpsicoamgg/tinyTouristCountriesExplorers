import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCountry } from "../../redux/actions/actions";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../helpers/routesHelper";
import IMGDETAILCOUNTRY from "../../images/boyShowing.png";
import styles from "../CardCountryDetailPage/CardCountryDetailPage.module.css";
import Loader from "../Loaders/Loader";

const CardCountryDetailPage = () => {
  const selectedCountry = useSelector((state) => state.detailCountry);
  const dispatch = useDispatch();
  const populationNumber = parseInt(selectedCountry.population, 10);
  const selectedCountryArea = parseInt(selectedCountry.area, 10);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getDetailCountry(id));
  }, [dispatch, id]);

  return (
    <>
      {selectedCountry ? (
        <div className={styles.containerCardCountryDetailPage}>
          <div className={styles.textContainer}>
            <div className={styles.detailContainer}>
              <p>
                <b>Official Name:</b>{" "}
                {selectedCountry.officialname || `${selectedCountry.name} *`}.{" "}
                <br />
                <b>Capital City:</b> {selectedCountry.capital}. <br />
                <b>Continent:</b> {selectedCountry.continent}. <br />
                <b>Subregion:</b> {selectedCountry.subregion}. <br />
                <b>Area:</b> {selectedCountryArea.toLocaleString()} Km². <br />
                <b>Population:</b> {populationNumber.toLocaleString()}. <br />
                <b>Activities:</b>{" "}
                {selectedCountry.Activities &&
                selectedCountry.Activities.length > 0 ? (
                  <>
                    {selectedCountry.Activities.map((activity, index) => (
                      <span key={index}>{activity.name}</span>
                    ))}
                  </>
                ) : (
                  "Join the fun! Be the first one to create an activity."
                )}{" "}
                <br />
                <b>Flag:</b>{" "}
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className={styles.countryImage}
                />
                <br />
                <b>Coat:</b>
                <img
                  src={
                    selectedCountry.coatOfArms || `${selectedCountry.flag} *`
                  }
                  alt={selectedCountry.flag}
                  className={styles.countryImage}
                />{" "}
                <br />
              </p>
              <Link to={ROUTES.ACTIVITIES_POST}>Create an Activity</Link>
              <br />
              <Link to={ROUTES.HOME}>🏡 HOME</Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={IMGDETAILCOUNTRY} alt={"DETAILS"} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CardCountryDetailPage;
