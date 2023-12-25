import React, { useState, useEffect } from "react";
import IMGFORM from "../../images/girdWord.png";
import { useNavigate } from "react-router-dom";
import homeImg from "../../images/home.png";
import ROUTES from "../../helpers/routesHelper";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, postNewActivity } from "../../redux/actions/actions";
import styles from "./FormActivityPage.module.css";
import {
  validateDuration,
  validateDescription,
  validateName,
  validateDifficulty,
} from "../../helpers/validationFormHelper";
import SelectedCountriesList from "./SelectedCountriesList";

const FormActivityPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);

  const [formData, setFormData] = useState({
    selectedCountries: [],
    name: "",
    difficulty: "",
    duration: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    description: "",
    submit: "",
  });

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const formatValue = (name, value) => {
    if (name === "difficulty") return Number(value);
    if (name === "duration") return value;
    return name === "season"
      ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      : value;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatValue(name, value);

    const validationError =
      name === "difficulty"
        ? validateDifficulty(formattedValue)
        : name === "duration"
        ? validateDuration(formattedValue)
        : name === "description"
        ? validateDescription(formattedValue)
        : name === "name"
        ? validateName(formattedValue)
        : undefined;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationError || "",
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedValue,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCountries: [...prevFormData.selectedCountries, selectedCountryId],
    }));
  };

  const handleCountryDeselect = (deselectedCountryId) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCountries: prevFormData.selectedCountries.filter(
        (id) => id !== deselectedCountryId
      ),
    }));
  };

  const handleNavigateToHome = () => navigate(ROUTES.HOME);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.selectedCountries.length === 0) {
      setErrors({ ...errors, submit: "Please check." });
      return;
    }

    try {
      await Promise.all(
        formData.selectedCountries.map((countryId) =>
          dispatch(postNewActivity({ ...formData, id: countryId }))
        )
      );
      setErrors({
        name: "",
        difficulty: "",
        duration: "",
        description: "",
        submit: "",
      });
      setFormData({
        selectedCountries: [],
        name: "",
        difficulty: "",
        duration: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      setErrors({
        ...errors,
        submit: "An error occurred while submitting. Please try again.",
      });
    }
  };

  return (
    <>
      <div className={styles.containerFormActivityPage}>
        <div className={styles.imgContainer}>
          <img className={styles.imgForm} src={IMGFORM} alt="PICK SIT" />
        </div>

        <div className={styles.formContainer}>
          <img
            src={homeImg}
            className={styles.homeLink}
            alt="Home"
            onClick={handleNavigateToHome}
          />
          <form onSubmit={handleSubmit}>
            <h3 id="formTitle" className={styles.formTitle}>
              New Tourist Activity
            </h3>
            <div className={styles.firstOne}>
              <select
                id="activityInputCountries"
                className={styles.selectedInputCountries}
                name="countries"
                onChange={handleCountryChange}
                value=""
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              <SelectedCountriesList
                countries={countries}
                selectedCountries={formData.selectedCountries}
                handleCountryDeselect={handleCountryDeselect}
                className={styles.selectCountries}
              />
              {errors.selectedCountries && (
                <p className={styles.errorText}>{errors.selectedCountries}</p>
              )}
            </div>
            <label htmlFor="activityInputName">Enter an activity to do:</label>
            <input
              type="text"
              id="activityInputName"
              onBlur={handleInputChange}
              name="name"
              className={styles.selected}
              placeholder="Enter an activity ✈️..."
              value={formData.name}
              onChange={handleInputChange}
            />
            <br />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
            <br />
            <label htmlFor="rangeInput">Select a rating (1 to 5):</label>
            <input
              type="range"
              id="rangeInput"
              name="difficulty"
              min="1"
              max="5"
              step="1"
              value={formData.difficulty}
              onChange={handleInputChange}
              onBlur={handleInputChange}
            />
            <br />
            {errors.difficulty && (
              <span className={styles.errorText}>{errors.difficulty}</span>
            )}
            <br />
            <label htmlFor="durationInput">Enter a duration:</label>
            <input
              type="text"
              id="durationInput"
              onBlur={handleInputChange}
              name="duration"
              className={styles.selected}
              placeholder="Duration in hours 🕑..."
              value={formData.duration}
              onChange={handleInputChange}
            />
            <br />
            {errors.duration && (
              <span className={styles.errorText}>{errors.duration}</span>
            )}
            <br/>
            <label htmlFor="seasonInput">Select a season:</label>
            <select
              id="seasonInput"
              className={styles.seasonInput}
              name="season"
              onChange={handleInputChange}
              value={formData.season}
            >
              <option value="" hidden disabled>
                Select
              </option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
            <br />
            <br />
            <label htmlFor="textAreaActivity">Enter a description:</label>
            <br />
            {errors.description && (
              <p className={styles.errorText}>{errors.description}</p>
            )}
            <textarea
              id="textAreaActivity"
              onBlur={handleInputChange}
              name="description"
              cols="10"
              rows="2"
              value={formData.description}
              onChange={handleInputChange}
            />
            <br />

            <button type="submit">Submit</button>
            <br />
            {errors.submit && (
              <span className={styles.errorText}>{errors.submit}</span>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default FormActivityPage;

