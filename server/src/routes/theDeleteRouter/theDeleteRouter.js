const { Router } = require("express");
const {
  deleteActivityController,
} = require("../../controllers/theDeleteController/activitiesDelController.js");
const activitiesDeleteRouter = Router();

activitiesDeleteRouter.delete("/:id", deleteActivityController);

module.exports = activitiesDeleteRouter;

/*

SE CREA RUTA PARA ELIMINAR, EL ENDPIENT SERÁ POR EL ID DE LA ACTIVITY, EL UUID CREADO. 
*/
