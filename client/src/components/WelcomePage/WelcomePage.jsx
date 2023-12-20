import styles from "./WelcomePage.module.css";
import IMGWELCOME from "../../images/girlBusShowing.png";

const WelcomePage = () => {
  return (
    
    <>
      <div className={styles.containerWelcomePage}>
        <img
          src={IMGWELCOME}
          alt={"WELCOME PAGE"}
          className={styles.imgWelcome}
        />
        <div className={styles.textWelcome}>
          <p>
            Hello little friends! <br />
            Welcome to my individual project developed at Henry, a journey
            filled with colors and fun! <br />
            I've crafted this app with a child-friendly UI/UX, focusing on
            exploring countries, discovering their flags, and making learning an
            exciting adventure.
            <br />
            Join me by clicking the button below and let's embark on this
            amazing journey together!
          </p>
             <button>Click Me</button>
          
        </div>
      </div>
    </>
  );
};


export default WelcomePage;