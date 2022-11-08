const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
        validate: {
          isUUID: 4,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, //no puedo tener 2 razas igaules en la DB
        validate: {
          customValidator(name) {
            if (!isNaN(name)) {
              //si es un numero
              throw new Error("El nombre no deberia tener numeros");
            }
          },
        },
      },
      height: {
        type: DataTypes.STRING, // ej: 3 - 5 cm
        allowNull: false,
        validate: {
          customValidator(height) {
            let myHeight = height.split(" ");
            if (isNaN(myHeight[0]) || (myHeight[2] && isNaN(myHeight[2]))) {
              throw new Error(
                "Para definir la altura,solo puedes ingresar numeros"
              );
            }
          },
        },
      },
      weight: {
        type: DataTypes.STRING, // ej: 3 - 5 kg
        allowNull: false,
        validate: {
          customValidator(weight) {
            let myWeight = weight.split(" ");
            if (isNaN(myWeight[0]) || (myWeight[2] && isNaN(myWeight[2]))) {
              throw new Error(
                "Para definir el peso, solo puedes ingresar numeros"
              );
            }
          },
        },
      },
      life_span: {
        type: DataTypes.STRING,
        validate: {
          customValidator(life_span) {
            const myLifeSpan = life_span.split(" ");
            if (isNaN(myLifeSpan[0])) {
              throw new Error(
                "Si quieres definir la esperanza de vida, debes escribir un numero"
              );
            }
          },
        },
      },
    },
    {
      timestamps: false, //no aparece createdAt y updatedAt
    }
  );
};
