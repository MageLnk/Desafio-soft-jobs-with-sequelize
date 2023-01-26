const { Sequelize, DataTypes } = require("sequelize");
const {
  config: { database },
} = require("../config/config");

//const User = require("./user.model");
//const Rol = require("./rol.model");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(database.dbName, database.user, database.password, {
  host: database.host,
  port: database.port,
  dialect: database.dialect,
});

// models
const models = {
  //User: User(sequelize, DataTypes),
  //Rol: Rol(sequelize, DataTypes),
};

// relations
Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

// export
module.exports = { sequelize, models };
