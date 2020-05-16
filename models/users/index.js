const functionsDbUsers = require('./functions');
const ModelUser = {

  fullName: {
    type: 'string',
    maximumLength: undefined,
    minimumLength: 5,
    especialCharacters: false,
  },
  email: {
    type: 'string',
    maximumLength: 100,
    minimumLength: 10,
    especialCharacters: true
  },
  password: {
    type: 'string',
    maximumLength: 28,
    minimumLength: 8,
    especialCharacters: true
  },
  callDatabaseFunction: {
    ...functionsDbUsers
  }

}

module.exports = ModelUser;