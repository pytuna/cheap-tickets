'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: true, 
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    numberPhone: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate:{
        is: {
          args: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          msg: "Sai số điện thoại ròi"
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: "Client"
    },
    avatar_path:{
      type: DataTypes.STRING,
      allowNull:true,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};