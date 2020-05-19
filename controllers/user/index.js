const Validations = require('../../validations/users');
const services = require('../../services/users');
const UserModel = require('../../models/users');
const bcrypt = require('bcrypt');

const encryptPassword = async password => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}
const ControllerFunctions = {
  create: async (payload) => {
    const ValidatePayloadRequest = await Validations.create([payload]);
    const ValidData = ValidatePayloadRequest[0];
    
    if (ValidatePayloadRequest.Error) throw { 
      Status: 400, 
      MessageError: ValidatePayloadRequest.Description.MessageError 
    };

    const verifyDocument = await services.validityDocument(ValidData.document);

    if (!verifyDocument) throw {Status: 400, MessageError: 'CPF inválido!'  }
    if (!ValidData.password) throw {Status: 400, MessageError: 'Senha inválida!'  }

    ValidData.password = await encryptPassword(ValidData.password);

    const ResponseForModel = await UserModel.callDatabaseFunction.create(ValidData);
    
    if(!ResponseForModel) throw { Status: 500, MessageError: 'Error Of System: Contact Support' };

    return ResponseForModel;

  },
  getUser: async (payload) => {
    return { Status: 200, Data:{
      Message: true,
      DataUser: 'insertIntoUsers', 
    } 
}
  }}

module.exports = ControllerFunctions;