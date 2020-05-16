const Express = require('express');
const ControllerUser = require('../../controllers/user');

const ChildrenRouters = Express.Router();

ChildrenRouters.post('/create', async (req, res) => {
  const { body } = req;
  try {
    const ResponseForController = await ControllerUser.create(body);
    res.status(ResponseForController.Status).json(ResponseForController.Data);
  }catch(Error) {
    console.log(Error)
    res.status(Error.Status).json(Error.MessageError);
  }
});


module.exports = ChildrenRouters;