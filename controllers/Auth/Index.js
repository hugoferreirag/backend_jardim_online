const Validations = require('../../validations/users');
const UserModel = require('../../models/users');
const jwt = require("jwt-simple");
const bcrypt = require('bcrypt');
const cfg = require("../../config.js");

const ControllerFunctions = {
  auth: async (payload) => {
    if (!payload.email && !payload.password) throw { Status: 401,
       MessageError: 'Invalid login (no content email or password)' };

      const userExists = await UserModel.callDatabaseFunction.getByEmail(payload);
      
      if (userExists.invalidUser) throw { Status: 401, MessageError: 'Invalid login' };
      const user = userExists.Data.DataUser;

      const isMatch = bcrypt.compareSync(payload.password, user.password)
      if (!isMatch) throw { Status: 401, MessageError: 'Invalid Password' };

      const idUser = {id: user.id};
      const token = jwt.encode(idUser, cfg.jwtSecret);

      return { Data: { token, email: user.email, name: user.fullname }, Status: 200 };
  }
}

module.exports = ControllerFunctions