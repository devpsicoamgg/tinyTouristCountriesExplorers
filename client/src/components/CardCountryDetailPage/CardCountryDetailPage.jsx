import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCountry } from "../../redux/actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";
import homeImg from "../../images/home.png";
import IMGDETAILCOUNTRY from "../../images/boyShowing.png";
import ROUTES from "../../helpers/routesHelper";
import styles from "../CardCountryDetailPage/CardCountryDetailPage.module.css";


const CardCountryDetailPage = () => {
  const selectedCountry = useSelector((state) => state.detailCountry);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const populationNumber = parseInt(selectedCountry.population, 10);
  const selectedCountryArea = parseInt(selectedCountry.area, 10);
  let { id } = useParams();

  const handleNavigateToHome = () => navigate(ROUTES.HOME);

  useEffect(() => {
    dispatch(getDetailCountry(id));
  }, [dispatch, id]);

  return (
    <>
      {selectedCountry ? (
        <div className={styles.containerCardCountryDetailPage}>
          <div className={styles.textContainer}>
            <div className={styles.detailContainer}>
              <span>
                <b>Official Name:</b>{" "}
                {selectedCountry.officialname || `${selectedCountry.name} *`}.{" "}
                <br />
                <b>Capital City:</b> {selectedCountry.capital}. <br />
                <b>Continent:</b> {selectedCountry.continent}. <br />
                <b>Subregion:</b> {selectedCountry.subregion}. <br />
                <b>Area:</b> {selectedCountryArea.toLocaleString()} Km². <br />
                <b>Population:</b> {populationNumber.toLocaleString()}. <br />
                <b>Flag:</b>{" "}
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className={styles.countryImage}
                />
                <br />
                <b>Coat:</b>
                <img
                  src={selectedCountry.coatOfArms}
                  alt={selectedCountry.coatOfArms}
                  className={styles.countryImage}
                />{" "}
                <br />
                <p>
                  If you want to know where {selectedCountry.name} is located
                  <a
                    href={selectedCountry.maps}
                    className={styles.aref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Click here.{" "}
                  </a>{" "}
                  <br />
                </p>
              </span>
              <hr className={styles.hr} />
              <img
                src={homeImg}
                className={styles.homeLink}
                alt="Home"
                onClick={handleNavigateToHome}
              />
            </div>
            <div className={styles.activitiesContainer}>
              <h3>Activities:</h3>
              {selectedCountry.Activities &&
              selectedCountry.Activities.length > 0 ? (
                <>
                  {selectedCountry.Activities.map((activity, index) => (
                    <div key={index}>
                      <details className={styles.activityDetails}>
                        <summary className={styles.summaryTitle}>
                          {activity.name}
                        </summary>
                        <p>
                          {" "}
                          <b>Difficulty:</b> 💪🏼 {activity.difficulty}
                        </p>
                        <p>
                          <b>Duration:</b> 🕑 {activity.duration} Hrs
                        </p>
                        <p>
                          <b>Season:</b> 🌤️{activity.season}
                        </p>
                        <p>
                          <b>Date Added:</b> 🗓️ {activity.date_added}
                        </p>
                        <div className={styles.pSpecial}>
                          <p>
                            <b>Description:</b> ✍🏼{activity.description}
                          </p>
                        </div>
                        <hr className={styles.hr} />
                      </details>
                    </div>
                  ))}
                  <hr />
                  <a className={styles.aref} href={ROUTES.ACTIVITIES_EDIT}>
                    {" "}
                    Update 🛠️{" "}
                  </a>
                </>
              ) : (
                <div>
                  <p>Join the fun! Be the first one to</p>
                  <a className={styles.aref} href={ROUTES.ACTIVITIES_POST}>
                    {" "}
                    🛠️ create an activity 👈🏽{" "}
                  </a>
                </div>
              )}
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
