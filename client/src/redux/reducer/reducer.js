/*  
REDUCER PERTENECE AL STORE, PERO ÉL ES QUIEN TIENE EL ESTADO
*/

import {
  GET_ALL_COUNTRIES,
  GET_DETAIL_COUNTRY,
  GET_COUNTRY_BY_NAME,
  GET_CONTINENT_LIST,
  GET_ACTIVITIES,
  FILTER_BY_CONTINENT,
  ORDER,
} from "../actions/actionTypes";

const initialState = {
  allCountries: [],
  allCountriesBackUp: [],
  detailCountry: {},
  continentList: [],
  activitiesList: [],
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
      const filteredCountries = state.allCountriesBackUp.filter((country) =>
        country.continent.toLowerCase().includes(filter)
      );

      return {
        ...state,
        allCountries: filteredCountries,
      };
    }

    case ORDER:
      if (action.payload === "ascArea") {
        const orderedCountries = [...state.allCountries].sort(
          (a, b) => a.area - b.area
        );
        return { ...state, allCountries: orderedCountries };
      }
      if (action.payload === "descArea") {
        const orderedCountries = [...state.allCountries].sort(
          (a, b) => b.area - a.area
        );
        return { ...state, allCountries: orderedCountries };
      }
      if (action.payload === "randomArea") {
        const orderedCountries = [...state.allCountries].sort(
          () => Math.random() - 0.5
        );
        return { ...state, allCountries: orderedCountries };
      }

      if (action.payload === "ascName") {
        const orderedCountries = [...state.allCountries].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return { ...state, allCountries: orderedCountries };
      }
      if (action.payload === "descName") {
        const orderedCountries = [...state.allCountries].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return { ...state, allCountries: orderedCountries };
      }
      if (action.payload === "randomName") {
        const orderedCountries = [...state.allCountries].sort(
          () => Math.random() - 0.5
        );
        return { ...state, allCountries: orderedCountries };
      }

      if (action.payload === "ascPopulation") {
        const orderedCountries = [...state.allCountries].sort(
          (a, b) => a.population - b.population
        );
        return { ...state, allCountries: orderedCountries };
      }
      if (action.payload === "descPopulation") {
        const orderedCountries = [...state.allCountries].sort(
          (a, b) => b.population - a.population
        );
        return { ...state, allCountries: orderedCountries };
      }
      if (action.payload === "randomPopulation") {
        const orderedCountries = [...state.allCountries].sort(
          () => Math.random() - 0.5
        );
        return { ...state, allCountries: orderedCountries };
      }

      if (action.payload === "default") {
        return { ...state, allCountries: [...state.allCountries] };
      }

      break;

      case GET_ACTIVITIES:
        return {
          ...state,
          activitiesList: action.payload,
        };

    default:
      return state;
  }
};
