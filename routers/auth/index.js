const Express = require('express');
const ControllerAuth = require('../../controllers/auth');

const ChildrenRouters = Express.Router();

ChildrenRouters.post('/login', async (req, res) => {
  const { body } = req;
  try {
    const ResponseForController = await  ControllerAuth.auth(body);
    res.status(ResponseForController.Status).json(ResponseForController.Data);
  } catch(Error) {
    console.log(Error);
    res.status(Error.Status).json(Error.MessageError);
  }
});


module.exports = ChildrenRouters;