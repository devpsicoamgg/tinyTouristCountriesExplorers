// Importa los módulos necesarios
require("dotenv").config();
const { Country } = require("../../db.js");
const { PORT_API_HOST, NAME_JSON_PORT_API, DB_HOST } = process.env;
const axios = require("axios");

// guardar datos de la API en la bd 
const saveDataControllerFromApiToDB = async () => {
  try {
    // Verifica si datos en la bd
    const existingDataCount = await Country.count();

    // Si datosno hacer nada y return el log.
    //como verificar largos para ver si la api envio? 
    if (existingDataCount > 0) {
 
      return [];
    }

    // Obtiene datos de la API
    const { data } = await axios.get(
      `http://${DB_HOST}:${PORT_API_HOST}/${NAME_JSON_PORT_API}/`
    );

    // Filtra y transforma los datos de la API
    const countriesFiltered = data
      .filter(({ capital }) => capital)
      .map(({ name, cca3, flags, timezones, continents, capital, subregion, area, population, coatOfArms, maps }) => ({
        id: cca3,
        name: name.common || "No data comes from api about common name ⛔",
        officialname: name.official || "No data comes from api official name ⛔",
        flag: flags.svg || "No data comes from api about flags in svg ⛔",
        continent: continents[0] || "No continents found ⛔",
        capital: capital[0] || "This country looks like without capital ⛔",
        subregion: subregion || "No subregion found ⛔",
        area: area || "This country do not have lands ⛔",
        maps: maps.openStreetMaps || "You'll never can find it on maps ⛔",
        population: population || "No data comes from api about population ⛔",
        timezones: timezones[0] || "No data comes from api about time zone ⛔",
        coatOfArms: coatOfArms.svg || "No data comes from api about Coat of arms ⛔",
      }));

    // F() de Sequelize para ingresar mas rápido
    await Country.bulkCreate(countriesFiltered);

    // Regresa lo filtrado
    return countriesFiltered;

    //maneja el err 
  } catch (error) {
    console.error(error);
    return "Could not load data about countries...";
  }
};

// Exporta la función para su uso en otros archivos
module.exports = { saveDataControllerFromApiToDB };
