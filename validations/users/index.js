const CompareModelUsers = require('../../models/users');



const Validations = {
   create: async (payload = []) => {
    await keysVerification(payload);
    return payload;
  }
}

const keysVerification = async (_payload = []) => {
  Object.entries(_payload[0]).map((element) => {
      
    const key = element[0];
    const value = element[1];

    if(!CompareModelUsers[key]) 
      throw { Error: true, Description: { MessageError: 'Invalid data key', Status: 400 } };
    if(value === typeof `'${CompareModelUsers[key].type}'`) 
      throw { Error: true, Description: { MessageError: 'Invalid typeof of data key', Status: 400 } };
    if(value.length > CompareModelUsers[key].maximumLength) 
      throw { Error: true, Description: { MessageError: 'Invalid maximum length of data key', Status: 400 } };
    if(value.length < CompareModelUsers[key].minimumLength) 
      throw { Error: true, Description: { MessageError: 'Invalid minimum length of data key', Status: 400} };

  });
}
module.exports = Validations;
