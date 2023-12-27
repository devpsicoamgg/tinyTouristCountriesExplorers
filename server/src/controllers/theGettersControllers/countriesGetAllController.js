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
        attributes: [
          "name",
          "duration",
          "difficulty",
          "season",
          "description",
          "date_added",
        ],
        through: { attributes: [] },
      },
    ],
  });
// console.log('consulted');

module.exports = { countriesGetAllController };
