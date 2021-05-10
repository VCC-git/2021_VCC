const express = require('express');
const router = express.Router();
const ctrl = require('./think.ctrl');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

router.get('/auto', jsonParser, ctrl.get_auto);

router.put('/auto', jsonParser, ctrl.put_auto);

module.exports = router;