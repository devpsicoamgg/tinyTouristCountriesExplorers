const { Router } = require("express");
const mainRouterManager = Router();

mainRouterManager.get('/', (req, res)=> {
  res.status(200).send('Llegue al endpoin get /');
}); 

mainRouterManager.get('/countries', (req, res)=> {
  res.status(200).send('Llegue al endpoin get /countries');
}); 

mainRouterManager.get('/countries/:id', (req, res)=> {
  res.status(200).send('Llegue al endpoin /countries de id');
}); 

mainRouterManager.get('/activities', (req, res)=> {
  res.status(200).send('Llegue al endpoin get /activities');
}); 

mainRouterManager.post('/activities', (req, res)=> {
  res.status(200).send('Llegue al endpoin /post de activities');
}); 

module.exports = mainRouterManager;
