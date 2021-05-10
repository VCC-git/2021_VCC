const { Router } = require('express');
const router = Router()

router.use('/user', require('./user'));
router.use('/notice', require('./notice'));
router.use('/work', require('./work'));
router.use('/admin', require('./admin'));

module.exports = router;