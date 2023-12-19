/*CONTROLLER HACE LA INTERACCIÓN CON API Y DB */

const { Country } = require('../../db.js');
const { Op } = require("sequelize");

//def controller
const countryByNameGetController = async (name) => {
    // console.log(name); 
  // consulta
    try {
    const lowerName = name.toLowerCase();
    const countriesFound = await Country.findAll({
      where: { name: { [Op.iLike]: `%${lowerName}%` } }
    })
    //err 2 veces. 
    return countriesFound.length === 0 ? ` No countries match with ${name}, so sorry :(` : countriesFound;
  } catch (error) {
    throw new Error(`Error throwed: ${error.message}`);
  }
};



module.exports={countryByNameGetController}