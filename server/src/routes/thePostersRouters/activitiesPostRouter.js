const { Router } = require("express");
const activitiesPostRouter = Router();
const {activitiesPostHandler} = require("../../handlers/thePostersHandlers/activitiesPostHandler")



activitiesPostRouter.post('/', activitiesPostHandler); 


module.exports = activitiesPostRouter;


/* 
Tener presente que en la modularización se: 
01.- se llama a router de express
02.- se bautiza la ruta para el caso activitiesPostRouter
*/