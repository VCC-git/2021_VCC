const express = require('express');
const router = express.Router();

router.use('/think', require('./think'));

module.exports = router;