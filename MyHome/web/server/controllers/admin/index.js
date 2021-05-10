const express = require('express');
const router = express.Router();
const ctrl = require('./admin.ctrl');
const bodyParser = require('body-parser');
const { checkTokens, checkUser } = require('../../middlewares/user');

var jsonParser = bodyParser.json()
 
router.get('/notice', jsonParser, ctrl.get_noticeAdmin);

router.get('/work', jsonParser, ctrl.get_workAdmin);

router.get('/notice/:id', jsonParser, ctrl.get_adminNoticeContent);

router.get('/work/:id', jsonParser, ctrl.get_adminWorkContent);

router.post('/edit/:id', jsonParser, ctrl.post_edit);

router.post('/publish/:id', jsonParser, ctrl.post_publish);

router.post('/delete/write', checkTokens, checkUser, jsonParser, ctrl.post_writeDelete);

router.post('/notice/delete/:id', checkTokens, checkUser, jsonParser, ctrl.post_noticeDelete);

router.post('/work/delete/:id', checkTokens, checkUser, jsonParser, ctrl.post_workDelete);

module.exports = router;