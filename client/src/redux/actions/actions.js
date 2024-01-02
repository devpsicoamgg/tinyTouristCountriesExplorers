import axios from "axios";
import {
  EDIT_ACTIVITY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
  POST_NEW_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_DETAIL_COUNTRY,
  GET_COUNTRY_BY_NAME,
  GET_CONTINENT_LIST,
  FILTER_BY_CONTINENT,
  ORDER,
} from "./actionTypes";

//ACTIVITIES ACTIONS
export const editActivity = (activityId, updatedData) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud PUT o PATCH para actualizar la actividad
      const { data } = await axios.put(
        `http://localhost:3001/activities/${activityId}`,
        updatedData
      );

      // Despachar la acción para editar la actividad
      dispatch({
        type: EDIT_ACTIVITY,
        payload: { activityId, updatedData: data },
      });

      // Retornar los datos actualizados si es necesario
      return { data, summary: "Activity updated successfully" };
    } catch (error) {
      console.error("Error on request", error.response?.data || error.message);
      window.alert("An error occurred. Please check and try again.");
      throw new Error(error);
    }
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/activities");
      dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };
};

export const deleteActivity = (activityId) => {
  return async (dispatch) => {
    try {
      // Realizar la solicitud DELETE para eliminar la actividad
      await axios.delete(`http://localhost:3001/activities/${activityId}`);

      // Despachar la acción para eliminar la actividad
      dispatch({
        type: DELETE_ACTIVITY,
        payload: { activityId },
      });

      // Retornar un mensaje de éxito o cualquier otro dato necesario
      return { summary: "Activity deleted successfully" };
    } catch (error) {
      console.error("Error on request", error.response?.data || error.message);
      window.alert("An error occurred. Please check and try again.");
      throw new Error(error);
    }
  };
};

export const postNewActivity = (input) => {
  //  input.difficulty = Number(input.difficulty);
  //  input.duration = Number(input.duration);

  return async (dispatch) => {
    try {
      // Realizar la solicitud POST
      const { data } = await axios.post(
        `http://localhost:3001/activities/`,
        input
      );
      dispatch({
        type: POST_NEW_ACTIVITY,
        payload: data,
      });
      return { data, summary: data.summary };
    } catch (error) {
      console.error("Error on req", error.response?.data || error.message);
      window.alert("An error. Re-check");
      throw new Error(error);
    }
  };
};


//COUNTRIES ACTIONS
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
      dispatch({
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
      const response = await axios.get(
        `http://localhost:3001/countries/?name=${name}`
      );
      const countries = response.data || [];
      dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: countries,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

//CONTINENT
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

//FILTERS
export function filterByContinent(filter) {
  return {
    type: FILTER_BY_CONTINENT,
    payload: filter,
  };
}

//ORDER
export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
};







