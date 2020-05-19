const Express = require('express');
const ControllerUser = require('../../controllers/user');
const auth = require('../../config/passport.js')();

const ChildrenRouters = Express.Router();

ChildrenRouters.post('/create', async (req, res) => {
  const { body } = req;
  try {
    const ResponseForController = await ControllerUser.create(body);
    res.status(ResponseForController.Status).json(ResponseForController.data);
  }catch(Error) {
    console.log(Error)
    res.status(Error.Status).json(Error.MessageError);
  }
});
ChildrenRouters.get('/get', auth.authenticate(), async (req, res) => {
  try {
    const ResponseForController = await ControllerUser.getUser('ok');
    res.status(ResponseForController.Status).json(ResponseForController.data);
  }catch(Error) {
    console.log(Error)
    res.status(Error.Status).json(Error.MessageError);
  }
});


module.exports = ChildrenRouters;