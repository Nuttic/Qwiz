'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
   
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userId' })
    }
  }
  Score.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    points: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};