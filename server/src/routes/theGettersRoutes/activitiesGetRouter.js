const { Router } = require('express');
const { activitiesGetHandler } = require('../../handlers/theGettersHandlers/activitiesGetHandler')
const activitiesGetRouter = Router();



activitiesGetRouter.get('/', activitiesGetHandler);



module.exports = activitiesGetRouter;


/* 
Tener presente que en la modularización se: 
01.- se llama a router de express
02.- se bautiza la ruta para el caso activitiesGetRouter
*/