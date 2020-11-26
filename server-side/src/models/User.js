const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      cep: DataTypes.STRING,
      street: DataTypes.STRING,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
      uf: DataTypes.STRING
    }, { sequelize })
  }
}

module.exports = User;