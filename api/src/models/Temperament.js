const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("temperament", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
};
