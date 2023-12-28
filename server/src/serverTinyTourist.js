/*SERVIDOR -> 
Se requiere express. 
Rebauticé el server por como concibo el desarrollo y nombres 
Todo vendrá de src.
lo primero rutas que llevan a !== endpoins 
*/

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouterManager = require("./routes/mainRouterManager");

const serverTinyTourist = express();

serverTinyTourist.use(morgan("dev")); // siempre de primeras y manda condigo status, solo en development enviro
serverTinyTourist.use(cors()); // los headers y lios de ahi para lo relativo al post y pueda cambiar a lenguaje de
serverTinyTourist.use(express.json()); //para mi después del cors por que cors tiene que ver con cabeceras, enseña a js a que lea json
serverTinyTourist.use(mainRouterManager); // me traigo las rutas main

module.exports = serverTinyTourist;
/*
Midelware como intermediarios. SE hace antes de la 
resolución de la app. 
USE - OCUPA ESTOS.
*Morgan como dev de entorno de desarrollo. 
para recibir los codigos de status. 
*/
