const express = require('express');
const router = express.Router();
const ctrl = require('./auto.ctrl');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

router.get('/', jsonParser, ctrl.get_test);

module.exports = router;