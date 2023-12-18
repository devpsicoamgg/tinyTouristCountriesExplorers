const { Router } = require("express");
const activitiesGetRouter = Router();


activitiesGetRouter.get('/activities', (req, res)=> {
  res.status(200).send('Llegue al endpoin get /activities para obtener todas las activities pero modularizado');
}); 


module.exports = activitiesGetRouter;


/* 
Tener presente que en la modularización se: 
01.- se llama a router de express
02.- se bautiza la ruta para el caso activitiesGetRouter
*/