/*  
REDUCER PERTENECE AL STORE, PERO ÉL ES QUIEN TIENE EL ESTADO
*/

import { GET_ALL_COUNTRIES, GET_DETAIL_COUNTRY } from "../actions/actionTypes";

const initialState = {
  allCountries: [],
  allCountriesBackUp: [],
  detailCountry: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      console.log(action.payload);
      return {
        ...state,
        allCountries: action.payload,
        allCountriesCopy: action.payload,
      };

    case GET_DETAIL_COUNTRY:
      return { ...state, detailCountry: action.payload };

    default:
      return { ...state };
  }
};
