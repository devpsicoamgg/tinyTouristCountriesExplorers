const { Router } = require("express");
const activitiesPostRouter = Router();


activitiesPostRouter.post('/activities', (req, res)=> {
  res.status(200).send('Llegue al endpoin /post de activities que posteará todas las activities pero MODULARIZADO');
}); 


module.exports = activitiesPostRouter;


/* 
Tener presente que en la modularización se: 
01.- se llama a router de express
02.- se bautiza la ruta para el caso activitiesPostRouter
*/