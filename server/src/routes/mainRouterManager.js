const { Router } = require("express");
const countriesGetRouter = require('./theGettersRoutes/countriesGetRouters.js')
const activitiesGetRouter = require('./theGettersRoutes/activitiesGetRouter.js')
const activitiesPostRouter = require('./thePostersRouters/activitiesPostRouter.js')
const mainRouterManager = Router();




mainRouterManager.use("/", countriesGetRouter) 
mainRouterManager.use("/", activitiesGetRouter) 
mainRouterManager.use("/", activitiesPostRouter) 



module.exports = mainRouterManager;

/* 
Este me trae las rutas segun lo que se pide. por ello se importan. 
Concibo que con miras a poder evidenciar mejor los errores es mejor la modularización 
y al saber que un err es especifico la modularización ayuda 
*/
