const express = require('express');
const router = express.Router();

router.use('/input', require('./input'));
router.use('/output', require('./output'));

module.exports = router;