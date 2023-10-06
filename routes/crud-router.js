const { Router } = require('express');
const cors = require('cors')
const crudRouter = Router();
const corsWhitelist = require('../middleware/whitelistCors');
const { getAllUsers, updateUser, deleteUser, createUser } = require('../service/crud-service');

crudRouter.get('/get', cors(corsWhitelist.clientX), getAllUsers)
crudRouter.post('/create',cors(corsWhitelist.clientX), createUser)
crudRouter.put('/update/',cors(corsWhitelist.clientY), updateUser)
crudRouter.delete('/delete/',cors(corsWhitelist.clientY), deleteUser)

module.exports = crudRouter 
