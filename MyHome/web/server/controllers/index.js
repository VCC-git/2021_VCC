const express = require('express');
const router = express.Router();

router.use('/auto', require('./auto'));

module.exports = router;