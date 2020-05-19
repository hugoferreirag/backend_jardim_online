const CompareModelUsers = require('../../models/users');



const Validations = {
   create: async (payload = []) => {
    const result = await keysVerification(payload);
    if(result && result.Error) return { ...result }
    else return payload;
  }
}

const keysVerification = async (_payload = []) => {
  const existsBody = Object.entries(_payload[0]).length
  if(existsBody <= 2) return { 
    Error: true, 
    Description: { 
      MessageError: 'Nenhum dado Informado!', 
      Status: 400 
    } 
  };
      for await (let [key, value] of Object.entries(_payload[0])) {
      
        if(!CompareModelUsers[key]) 
          return { 
            Error: true, 
            Description: { 
              MessageError: `Campo ${key} inexistente`,
              Status: 400 
          } 
        };
        if(value === typeof `'${CompareModelUsers[key].type}'`) 
          return { 
            Error: true, 
            Description: { 
              MessageError: `Typagem de dado para ${key} inválida : ${value} `, 
              Status: 400 
            } 
          };
        if(value.length > CompareModelUsers[key].maximumLength) 
          return { 
            Error: true, 
            Description: { 
              MessageError: `Quantidade máxima de dígitos para ${key} inválida: ${value} `, 
              Status: 400 
            } 
          };
        if(value.length < CompareModelUsers[key].minimumLength) 
          return { 
            Error: true, 
            Description: { 
              MessageError: `Quantidade minima de dígitos para ${key} inválida: ${value} `, 
              Status: 400
            } 
          };
      }
}
module.exports = Validations;
