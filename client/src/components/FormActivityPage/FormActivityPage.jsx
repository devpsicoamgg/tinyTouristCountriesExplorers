import IMGFORM from "../../images/girdWord.png";
import styles from "./FormActivityPage.module.css";


const FormActivityPage = () => {
  return (
    <>
      <div className={styles.containerFormActivityPage}>
        <div className={styles.imgContainer}>
          <img src={IMGFORM} alt={"PICK SIT"} />
        </div>

        <div className={styles.formContainer}>
          <form>
            <label htmlFor="activityInput">Enter countries:</label>
            <input
              type="text"
              id="activityInput"
              name="activityInput"
              placeholder="Enter an activity..."
            />{" "}
            <br /> <br />
            <label htmlFor="activityInput">Enter an activity to do:</label>
            <input
              type="text"
              id="activityInput"
              name="activityInput"
              placeholder="Enter an activity..."
            />
            <br /> <br />
            <label htmlFor="rangeInput">Select a rating (1 to 5):</label>
            <input
              type="range"
              id="rangeInput"
              name="rangeInput"
              min="1"
              max="5"
              step="1"
              value="1"
        
            />
            <br /> <br />
            <label htmlFor="seasonInput">Select a season:</label>
            <select id="seasonInput" name="seasonInput">
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
            </select>
            <br /> <br />
            <label htmlFor="seasonInput">Descrives your activity:</label>
            <textarea
              name="textAreaActivity"
              id="textAreaActivity"
              cols="10"
              rows="10"
            >
              {" "}
            </textarea>
            <br /> <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className={styles.homeLink}>
        <p>
          🏡 HOME
        </p>
      </div>
    </>
  );
};

export default FormActivityPage;
