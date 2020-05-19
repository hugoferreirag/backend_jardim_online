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
  document: {
    type: 'number',
    maximumLength: 11,
    minimumLength: 11,
    especialCharacters: false
  },
  phone: {
    type: 'number',
    maximumLength: 11,
    minimumLength: 11,
    especialCharacters: false
  },
  postalcode: {
    type: 'number',
    maximumLength: 8,
    minimumLength: 8,
    especialCharacters: false
  },
  adress: {
    type: 'string',
    maximumLength: 100,
    minimumLength: 10,
    especialCharacters: false
  },
  city: {
    type: 'string',
    maximumLength: 100,
    minimumLength: 2,
    especialCharacters: false
  },
  state: {
    type: 'string',
    maximumLength: 100,
    minimumLength: 2,
    especialCharacters: false
  },
  country: {
    type: 'string',
    maximumLength: 100,
    minimumLength: 2,
    especialCharacters: false
  },
  cardnumber: {
    type: 'number',
    maximumLength: 16,
    minimumLength: 16,
    especialCharacters: false
  },
  validitycard: {
    type: 'number',
    maximumLength: 4,
    minimumLength: 4,
    especialCharacters: false
  },
  verificationcardcode: {
    type: 'number',
    maximumLength: 3,
    minimumLength: 3,
    especialCharacters: false
  },
  titularname: {
    type: 'string',
    maximumLength: 100,
    minimumLength: 5,
    especialCharacters: false
  },
  titulardocument: {
    type: 'number',
    maximumLength: 11,
    minimumLength: 11,
    especialCharacters: false
  },
  callDatabaseFunction: {
    ...functionsDbUsers
  }

}

module.exports = ModelUser;