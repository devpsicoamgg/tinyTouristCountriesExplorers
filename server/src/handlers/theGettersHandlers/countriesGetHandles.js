const {
  countryByNameGetController,
} = require("../../controllers/theGettersControllers/countryByNameGetController.js");
const {
  countriesGetAllController,
} = require("../../controllers/theGettersControllers/countriesGetAllController.js");
const {
  countryByIdGetController,
} = require("../../controllers/theGettersControllers/countryByIdGetController.js");

const countriesGetHandler = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const response = await countryByNameGetController(name);
      res.status(200).json(response);
    } else {
      const response = await countriesGetAllController();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const countriesGetDetailHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await countryByIdGetController(id);

    if (!response) {
      res
        .status(404)
        .json({ error: `Oops, looks like the id ${id} is not here` });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  countriesGetHandler,
  countriesGetDetailHandler,
};

/*
se puede recibir por params y query y body 
{id} ===> params
query ===> ?name=colombia
body ===> info to post 
Para saber el param que llega se desestructura, así las cosas 

*/
