const bcrypt = require("bcryptjs");
// DB's
const {
  models: { User },
} = require("../models");
//

const users = {};

users.createNewUser = async ({ email, password, rol, lenguage }) => {
  try {
    const hashPass = bcrypt.hashSync(password);
    const newUser = await User.create({ email, password: hashPass, rol, lenguage });
    return newUser.get({ raw: true });
  } catch (error) {
    throw { msg: "Algo inesperado ha ocurrido", error };
  }
};

module.exports = users;
