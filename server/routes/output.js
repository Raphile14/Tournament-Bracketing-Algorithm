"use strict";
const express = require('express');
const path = require('path');
const shuffle = require('../classes/shuffle');
let router = express.Router();

router.post('/', (req, res) => {

    // Gathering and Filtering Team Data
    let teams = req.body.inputTeams.split(/\r?\n/);
    let teamsFiltered = teams.filter((el) => { return el; });

    // Randomizing teams array if seed is set
    if (req.body.inputSeed)
        teamsFiltered = shuffle(teamsFiltered, req.body.inputSeed);

    return res.render('pages/output.ejs');
});

module.exports = router;