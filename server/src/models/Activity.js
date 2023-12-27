const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",

    //ID NUMERICO UUID COMO PRIMARY KEY OBLIGA
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      // NAME CON VALIDACIÓN DE NO PALABRAS
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: {
          notIn: [["Popo", "Matar"]],
        },
      },
      //DIFICULTAD CON VALIDACIÓN DE VALOR EN RANGO
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
          customValidator(value) {
            if (value < 1 || value > 5)
              throw Error("Difficulty value invalid, must be between 1 to 5");
          },
        },
      },
      //DURACIÓN
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
      },
      // TEMPORADA
      season: {
        type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
        allowNull: false,
        unique: false,
      },
      //DESCRIPCIÓN PARRAFO EN TEXT
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        unique: false,
      },
      //FECHA DE ADICIÓN A DB EN FORMATO MM/DD/AAAA
      date_added: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      // BOLEANO DE SI CREADO EN DB Y UTIL CUANDO QUIERO CONSULTAR LLAMADO A API Y BD PARA MERGER
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      /*CAMPO VIRTUAL DE CLASE AURI. NECESARIO? NO. 
SIRVE PARA NO ALMACENAR DIRECTAMENTE EN BD*/
      summary: {
        type: DataTypes.VIRTUAL,
        get() {
          return `Summary: ${
            this.name}. 
            difficulty 💪🏼: ${this.difficulty}. 
            Season 🌤️: ${this.season}. 
            Duration 🕑: ${this.duration}. 
            Description ✍🏼: ${this.description || "No description available" }. 
            Added on 🗓️: ${this.date_added}CREATED ${this.createdInDb}`;
        },
      },
    },
    //3° ARGUMENTO PUEDE O NO ESTAR SI NECESITO FECHA DE CREACIÓN Y ACTUALIZA
    { timestamps: true }
  );
};
