/*
Esta es la data base.  
se creo la DB al principio en el .env se dio el name de ella. 
Al inicio no tablas creadas pero en este template de Henry ya venía toda la parte para buscar 
los tables models que se creen en la carpeta Models. 
No se han de instalar dependencias porque ya venían. 

*/
require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, //se configuró segun name de db
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

/* Aca vendrían las relaciones:
Activity(sequelize)
Country(sequelize)*/

//UNA CIUDAD O MUCHAS CIUDADES PUEDE TENR MUCHAS ACTIVIDADES
Country.belongsToMany(Activity, { through: "country_activity" });
// UNA ACTIVIDAD O MUCHAS PUEDEN ESTAR EN UNA O MUCHAS CIUDADES
Activity.belongsToMany(Country, { through: "country_activity" });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  tinyConnection: sequelize, // para importart la conexión { conn } = require('./db.js'); //* ACA SE CAMBIO EL NOMBRE DE LA CONN
};
