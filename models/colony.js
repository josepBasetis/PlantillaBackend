"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Colony extends Model {
    static associate(models) {}
  }
  Colony.init(
    {
      name: DataTypes.STRING,
      adress: DataTypes.STRING,
      cats: DataTypes.INTEGER,
      alimentador: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Colony",
    }
  );
  return Colony;
};
