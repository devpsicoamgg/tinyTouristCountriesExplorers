import axios from "axios";
import {
  GET_ALL_COUNTRIES,
  GET_DETAIL_COUNTRY,
  GET_COUNTRY_BY_NAME,
} from "./actionTypes";

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/countries");
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDetailCountry = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_DETAIL_COUNTRY,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries/?name=${name}`
      );
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
