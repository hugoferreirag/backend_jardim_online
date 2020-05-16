const database = require('../../config/db.js');
const table = 'users'
const functions = {
  create: async (payload) => {
    const keys = Object.keys(payload).toString().toLowerCase();
    const values = Object.values(payload).join("','").toString()
      const insertIntoUsers = await database.query(`INSERT INTO ${table} 
       (${keys})
        VALUES
       ('${values}') `);
      delete payload.password
      return { Status: 200, Data:{
        Message: 'suceffuly user create',
        DataUser: payload, 
      } };
  },
  update: () => {
      console.log('atualizou');
  },
}
module.exports = functions;
                 