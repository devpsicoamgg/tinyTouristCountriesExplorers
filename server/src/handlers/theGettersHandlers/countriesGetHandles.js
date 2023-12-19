


getCountriesHandlerAll = (req, res) => {
//misma ruta para buscar como para query http://localhost:3001/countries?name=betto
const { name } = req.query;
  
   if(name) res.status(200).send("Aca está la country"+name);
   if(!name) res.status(200).send("Aca está la country");
};




getCountriesHandlerById = (req, res) => {
   const {id} = req.params
//ruta nueva
  res
    .status(200)
    .send(
      "Detalles de la country con Id " + id
    );
};

/*
se puede recibir por params y query y body 
{id} ===> params
query ===> ?name=colombia
body ===> info to post 
Para saber el param que llega se desestructura, así las cosas 

*/

module.exports = { getCountriesHandlerAll, getCountriesHandlerById };
