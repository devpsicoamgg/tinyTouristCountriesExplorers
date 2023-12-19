/*CONTROLLER HACE LA INTERACCIÓN CON API Y DB */
const { Country, Activity } = require("../../db.js")

const activitiesPostController = async (
  name,
  difficulty,
  duration,
  season,
  description,
  id 
) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    description,
  });

  // Busca el país por su ID
  const country = await Country.findByPk(id);
  
  // Si el país se encuentra, realiza la asociación
  if (country) {
    await newActivity.addCountries(country);
  } else {

  }

  return newActivity;
};

module.exports = {
  activitiesPostController,
};
