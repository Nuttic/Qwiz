'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
  
    static associate({Question}) {
     this.hasMany(Question, { foreignKey: 'topicId' })
    }
  }
  Topic.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};