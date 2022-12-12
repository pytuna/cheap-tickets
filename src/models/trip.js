'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Station, {foreignKey: {name: 'fromStation'}, targetKey :'id', as: 'from'})
      this.belongsTo(models.Station, {foreignKey: {name:'toStation'}, targetKey :'id', as:'to'})
    }
  }
  Trip.init({
    startTime: DataTypes.DATE,
    price: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};