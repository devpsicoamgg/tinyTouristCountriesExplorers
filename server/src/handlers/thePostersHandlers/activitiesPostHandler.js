/* 
RECIBE LA REQ PARA PROCESAR UN POST
UNIFICA LOS DATOS QUE SE MOSTRARAN. 
REGRESA LOS DATOS. 
F() CONTROLLER. 
recibe por body la req
*/

const { activitiesPostController } = require("../../controllers/thePostersControllers/activitiesPostController.js");

const activitiesPostHandler = async (req, res) => {
  const { name, difficulty, duration, season, description, id } = req.body;

  try {
    const response = await activitiesPostController(
      name,
      difficulty,
      duration,
      season,
      description,
      id
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  activitiesPostHandler,
};


/* 
Se exporta no la f() sino el objeto por medio de { }
Este recibe inf por body... 
SE HUBO DE CAMBIAR EL ORDEN DE SERVER. 
SE ENVIA INF POR BODY EN JSON. 
*/
