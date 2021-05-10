const express = require('express');
const router = express.Router();
const ctrl = require('./notice.ctrl');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
 
router.get('/', jsonParser, ctrl.get_notice);

router.get('/:id', jsonParser, ctrl.get_noticeContent);

module.exports = router;