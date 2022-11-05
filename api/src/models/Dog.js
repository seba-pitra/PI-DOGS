const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, //no puedo tener 3 razas igaules en la DB
    },
    height: {
      type: DataTypes.INTEGER, //
      allowNull: false,
    },
    weight: {
      //peso
      type: DataTypes.INTEGER, //fijarse despues como es bien en la API
      allowNull: false,
    },
    //esperanza de vida:
    life_span: {
      //En la BD no va CamelCase
      type: DataTypes.STRING,
    },
  });
};
