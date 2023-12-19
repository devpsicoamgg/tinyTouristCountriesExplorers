const { Router } = require("express");
const mainRouterManager = Router();
const countriesGetRouter = require('./theGettersRoutes/countriesGetRouters.js')
const activitiesGetRouter = require('./theGettersRoutes/activitiesGetRouter.js')
const activitiesPostRouter = require('./thePostersRouters/activitiesPostRouter.js')




mainRouterManager.use("/countries", countriesGetRouter) 
mainRouterManager.use("/activities", activitiesGetRouter) 
mainRouterManager.use("/activities", activitiesPostRouter) 



module.exports = mainRouterManager;

/* 
Este me trae las rutas segun lo que se pide. por ello se importan. 
Concibo que con miras a poder evidenciar mejor los errores es mejor la modularización 
y al saber que un err es especifico la modularización ayuda. 
Para la modularización se ponen las rutas en sus carpetas segun el método Http. 
Cada archivo ha de traer el router de express y usarlo. este main es usado por server.
Routers se relaciona con handlers y controllers. 
El handler es el 2° arg de la router, el que maneja la req. 
handeler recibe la request, unifica datos y regresa la response
Por su lado el handler invoca al controller 🚫 no interactúa con fuentes externas
para el caso del PI, Fake api y bd. 
El controller otra f() que interactua con las fuentes externas 
*/
