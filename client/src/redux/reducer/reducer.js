/*  
REDUCER PERTENECE AL STORE, PERO ÉL ES QUIEN TIENE EL ESTADO
*/

import {
  GET_ALL_COUNTRIES,
  GET_DETAIL_COUNTRY,
  GET_COUNTRY_BY_NAME,
  GET_CONTINENT_LIST,
  FILTER_BY_CONTINENT,
} from "../actions/actionTypes";

const initialState = {
  allCountries: [],
  allCountriesBackUp: [],
  detailCountry: {},
  continentList: [], 
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        allCountriesBackUp: action.payload,
      };

    case GET_DETAIL_COUNTRY:
      return { ...state, detailCountry: action.payload };

    case GET_COUNTRY_BY_NAME:
      return { ...state, allCountries: action.payload };

    case GET_CONTINENT_LIST:
      return {
        ...state,
        continentList: action.payload,
      };

      case FILTER_BY_CONTINENT: {
        const filter = action.payload.toLowerCase();
        const filteredCountries = state.allCountriesBackUp.filter(
          (country) => country.continent.toLowerCase().includes(filter)
        );
  
        return {
          ...state,
          allCountries: filteredCountries,
        };
      }


      

    default:
      return { ...state };
  }
};
