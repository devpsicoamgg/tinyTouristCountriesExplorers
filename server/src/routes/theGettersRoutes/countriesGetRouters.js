const { Router } = require("express");
const countriesGetRouter = Router();
const { getCountriesHandler } = require('../../handlers/theGettersHandlers/countriesGetHandles')

countriesGetRouter.get('/', getCountriesHandlerAll); 
countriesGetRouter.get('/:id', getCountriesHandlerById); 


module.exports = countriesGetRouter;


/* 
Tener presente que en la modularización se: 
01.- se llama a router de express
02.- se bautiza la ruta para el caso countriesGetRouter
*/