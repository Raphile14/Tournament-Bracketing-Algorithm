"use strict";
const express = require('express');
const path = require('path');
let router = express.Router();

router.get('/', (req, res) => {
    return res.render('pages/input.ejs');
})

module.exports = router;