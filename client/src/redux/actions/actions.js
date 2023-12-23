import axios from "axios";
import {
  GET_ALL_COUNTRIES,
  GET_DETAIL_COUNTRY,
  GET_COUNTRY_BY_NAME,
  GET_CONTINENT_LIST,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  GET_ACTIVITIES_LIST,
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



export const getContinentList = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/countries");
      const continentList = Array.from(
        new Set(response.data.map((country) => country.continent))
      );
      dispatch({
        type: GET_CONTINENT_LIST,
        payload: continentList,
      });
    } catch (error) {
      console.error("Error fetching continent list:", error);
    }
  };
};

export function filterByContinent(filter) {
  return {
    type: FILTER_BY_CONTINENT,
    payload: filter,
  };
}


