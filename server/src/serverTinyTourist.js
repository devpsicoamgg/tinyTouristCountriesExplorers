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

serverTinyTourist.use(morgan("dev"));
serverTinyTourist.use(express.json());
serverTinyTourist.use(cors());
serverTinyTourist.use(mainRouterManager); //Rutas

module.exports = serverTinyTourist;
/*
Midelware como intermediarios. SE hace antes de la 
resolución de la app. 
USE - OCUPA ESTOS.
*Morgan como dev de entorno de desarrollo. 
para recibir los codigos de status. 
*/