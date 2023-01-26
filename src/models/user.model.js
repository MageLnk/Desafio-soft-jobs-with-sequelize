const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define("usuarios", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(25),
    },
    lenguage: DataTypes.STRING(20),
  });

  return User;
};

module.exports = userModel;
