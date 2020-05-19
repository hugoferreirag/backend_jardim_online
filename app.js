const App = require('express')();
const BodyParser = require('body-parser');
const Cors = require('cors');
const Routers = require('./routers');
const auth = require('./config/passport.js')();

App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended : true }));
App.use(Routers);
const Port = process.env.PORT || 3001;

App.get('/', (req, res) => {
  res.status(200).json('Welcome');
})

App.listen(Port, () => {
  console.log('Server On');
});
