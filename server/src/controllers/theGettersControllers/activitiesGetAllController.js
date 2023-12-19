/*CONTROLLER HACE LA INTERACCIÓN CON API Y DB */
// handlers/activitiesHandler.js
const { Activity, Country } = require("../../db.js");

//def controlador
const activitiesGetAllController = async () => {
  try {
    //consulta a la bd por findall con los atributos, y el include para consultar la asociación
    const activities = await Activity.findAll({
      include: {
        model: Country,
        attributes: ["name"],
      },
      attributes: [
        "id",
        "name",
        "difficulty",
        "duration",
        "season",
        "description",
      ],
    });

    //retorna transformados
    return activities.map((activity) => {
      const activityObject = {
        id: activity.id,
        name: activity.name,
        difficulty: activity.difficulty,
        duration: activity.duration,
        season: activity.season,
        description: activity.description,
        country:
          activity.Countries.length > 0 ? activity.Countries[0].name : null,
      };

      return activityObject;
    });

    // si hay un error, catch lo captura
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  activitiesGetAllController,
};
