import IMGDETAILCOUNTRY from "../../images/boyShowing.png";
import styles from "../CardCountryDetailPage/CardCountryDetailPage.module.css"


const CardCountryDetailPage = () => {
  return (
    <div className={styles.containerCardCountryDetailPage}>
      <div className={styles.textContainer}>
        <div className={styles.detailContainer}>
          <p>
            <b>Official Name:</b>{" "}
            {/* ... */}
            <br />
            <b>Continent:</b> {/* ... */}
            <br />
            <b>Capital City:</b> {/* ... */}
            <br />
            <b>Subregion:</b> {/* ... */}
            <br />
            <b>Area:</b> {/* ... */}
            <br />
            <b>Population:</b> {/* ... */}
            <br />
            <b>Activities:</b>{" "}
            {/* ... */}
            <br />
            <b>Flag:</b>{" "}
            <img
        
              className={styles.countryImage}
            />
            <br />
            <b>Coat:</b>
            <img
        
              className={styles.countryImage}
            />{" "}
            <br />
          </p>
          <a>Create an Activity</a>
          <br />
          <a>🏡 HOME</a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={IMGDETAILCOUNTRY} alt="DETAILS" />
      </div>
    </div>
  );
};

export default CardCountryDetailPage;
