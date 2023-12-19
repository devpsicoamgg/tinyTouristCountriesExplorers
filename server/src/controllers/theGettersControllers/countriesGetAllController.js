/*CONTROLLER HACE LA INTERACCIÓN CON API Y DB */

const { Country, Activity } = require("../../db.js");
//def
const countriesGetAllController = async () =>
//consulta en bd  
await Country.findAll({
    include: [
      {
        model: Activity,
        as: "Activities",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
// console.log('consulted');

module.exports = { countriesGetAllController };