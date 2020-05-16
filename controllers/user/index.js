const Validations = require('../../validations/users');
const UserModel = require('../../models/users');

const ControllerFunctions = {
  create: async (payload) => {
    const ValidatePayloadRequest = await Validations.create([payload]);
    const ValidData = ValidatePayloadRequest
    const ResponseForModel = await UserModel.callDatabaseFunction.create(ValidData[0]);

    if(!ResponseForModel) throw { Status: 500, MessageError: 'Error Of System: Contact Support' };

    return ResponseForModel;

  }
}

module.exports = ControllerFunctions