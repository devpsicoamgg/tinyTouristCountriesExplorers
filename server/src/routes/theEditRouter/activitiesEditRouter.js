const { Router } = require("express");
const {
  editActivity,
} = require("../../controllers/activitiesPutController/activitiesPutController");
const activitiesEditRouter = Router();

activitiesEditRouter.put("/:id", editActivity);

module.exports = activitiesEditRouter;

/*

SE CREA RUTA PARA EDICIÓN, EL ENDPIENT SERÁ POR EL ID DE LA ACTIVITY, EL UUID CREADO. 
*/
