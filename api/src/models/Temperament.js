const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "temperament",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      timestamps: false, //no aparece createdAt y updatedAt
    }
  );
};
