'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startTime: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.BIGINT
      },
      fromStation: {
        	type: Sequelize.INTEGER,
          references: {
            model: 'stations',
            key: 'id',
          },
          allowNull: false,
          
      },
      toStation: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stations',
          key: 'id'
        },
        allowNull: false,
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trips');
  }
};