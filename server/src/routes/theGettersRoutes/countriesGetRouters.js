const { Router } = require("express");
const countriesGetRouter = Router();


countriesGetRouter.get('/countries', (req, res)=> {
  res.status(200).send('Llegue al endpoin get / MODULARIZADO 1 que traerá todos los paises');
}); 


countriesGetRouter.get('/countries/:id', (req, res)=> {
  res.status(200).send('Llegue al endpoin /countries de id MODULARIZADO 3 con id y esto es lo que se envio');
}); 


module.exports = countriesGetRouter;


/* 
Tener presente que en la modularización se: 
01.- se llama a router de express
02.- se bautiza la ruta para el caso countriesGetRouter
*/