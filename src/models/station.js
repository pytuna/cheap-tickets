'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Trip, {foreignKey: 'fromStation', as:'from'})
      this.hasMany(models.Trip, {foreignKey: 'toStation', as:'to'})
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {
          msg: "Không được rỗng"
        },
        
      }
    },
    address: {
      type: DataTypes.STRING,
      validate : {
        len: [4,100]
        
      }
    },
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};