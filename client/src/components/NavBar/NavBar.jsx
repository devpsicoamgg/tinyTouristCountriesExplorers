
import styles from "./NavBar.module.css";
import TITLE from "../../images/titleMain.png";


const NavBar = () => {
  return (
    <>
      <div className={styles.containerNavBarMain}>
        <div className={styles.containerNavBarFirstOne}>
          <img src={TITLE} className={styles.titleMain} alt="Title" />
          
       👨🏽‍🎨👩🏽‍🎨
        </div>

        <div className={styles.containerNavBarSecondOne}>
       
       
        </div>
      </div>
    </>
  );
};

export default NavBar;
