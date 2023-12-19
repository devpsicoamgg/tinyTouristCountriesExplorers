const { DataTypes } = require("sequelize");

// Exportamos una función que define el modelo DE HENRRY 
// Luego se inyecta la conexión a sequelize. DE HENRY 

module.exports = (sequelize) => {
  // defino el modelo con el método define con 3 argumentos (nombre modelo, atributos y 3 arg timestamp)
  sequelize.define(
    // "Country" es el nombre del modelo
    "Country",
    {
      // el id es el codigo de 3 letras que es unique y obligatorio
      id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true, // Es clave primaria
      },
      // name ==> nombre del país, único y obligatorio
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      // officialname = nombre oficial del país no obligatorio
      officialname: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      // flag = bandera única y obligatoria
      flag: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        isUrl: true, // Valida que sea URL
      },
      // Continent es el continente, ónico y obligatorio
      continent: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      // Capital es la capital y único y obligatorio
      capital: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
      // subregion no obligatoria
      subregion: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      // area no obligatoria
      area: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      // Maps es la URL de un mapa, no es obligatoria para un iframe de maps o link
      maps: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        isUrl: true, // que sea url
      },
      // población no obligatoro
      population: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      // timezones uso horario no obligatoria para mostrar que hora es allá ahora
      timezones: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
      },
      // coatOfArms URL escudo no es obligatoria
      coatOfArms: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        isUrl: true, // Valida que es URL
      },
    },
    { timestamps: false } // no agraga lo de create y update en marcas finales de la tabla.
  );
};
