/*CONTROLLER HACE LA INTERACCIÓN CON API Y DB */

const { Country, Activity } = require("../../db.js");
//def controller
const countryByIdGetController = async (id) =>
  //consulta db
  await Country.findOne({
    where: { id: id },
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

module.exports = { countryByIdGetController };
