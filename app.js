const App = require('express')();
const BodyParser = require('body-parser');
const Cors = require('cors');
const Routers = require('./routers');

App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended : true }));
App.use(Routers);

const Port = process.env.PORT || 3000;

App.listen(Port, () => {
  console.log('Server On');
});
