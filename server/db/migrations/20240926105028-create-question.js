'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      topicId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Topics',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      points: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      img: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};