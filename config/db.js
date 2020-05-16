const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '164223356@',
  database : 'jardimonlineapp'
});

connection.connect();
const query = (query) => {
  return new Promise((resolve,reject) => {
    connection.query(query, function (error, results, fields) {
       if (error) reject(error);
       resolve(results[0])
      });
      connection.end();
  });
 }

module.exports = { query };