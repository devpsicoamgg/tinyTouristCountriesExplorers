/* 
RECIBE LA REQ MOSTRAR GET TODAS LAS ACTIVIDADES COMO UN ARR 
UNIFICA LOS DATOS QUE SE MOSTRARAN. 
REGRESA LOS DATOS. 
JAMAS INTERACTÚA CON DATOS, INVICA A CONTROLLER PARA QUE HAGA. 
recibe una r/ta
*/

const { activitiesGetAllController } = require("../../controllers/theGettersControllers/activitiesGetAllController");

const activitiesGetHandler = async (req, res) => {
  try {
    const activities = await activitiesGetAllController();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  activitiesGetHandler,
};