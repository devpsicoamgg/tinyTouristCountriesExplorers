const { Router } = require("express");
const activitiesGetRouter = Router();
const { getActivitiesHandlerAll } = require('../../handlers/theGettersHandlers/getActivitiesHandler')



activitiesGetRouter.get('/', getActivitiesHandlerAll); 


module.exports = activitiesGetRouter;


/* 
Tener presente que en la modularización se: 
01.- se llama a router de express
02.- se bautiza la ruta para el caso activitiesGetRouter
*/