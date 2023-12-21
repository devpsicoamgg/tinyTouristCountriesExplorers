/* ACA DE ALMACENA EL ESTADO COMO UN OBJETO
CONFIG INICIAL. GUARDA TODO 
USA LAS DEPENDENCIAS
MIDELWARE COMO POR QUIEN SE PASA, MEDIADOR. 
Y THUNK CON ASINCRONÍA. 
*/

import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "../reducer/reducer";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhacer(applyMiddleware(thunkMiddleware))
);

