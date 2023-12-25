const express = require('express')
const pushRouter = express.Router();
const {createpush}= require('../controller/push')
pushRouter.route('/').post(createpush)
module.exports = pushRouter;