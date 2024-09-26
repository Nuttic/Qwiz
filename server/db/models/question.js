'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
   
    static associate({Topic}) {
      this.belongsTo(Topic, { foreignKey: 'topicId' })
    }
  }
  Question.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    topicId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    points: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};