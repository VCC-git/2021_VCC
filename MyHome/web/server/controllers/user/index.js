const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

router.post('/signup', jsonParser, ctrl.post_signup);

router.post('/signin', jsonParser, ctrl.post_signin);

router.post('/forgot', jsonParser, ctrl.post_forgot);

router.get('/myName', jsonParser, ctrl.get_myName)

module.exports = router;