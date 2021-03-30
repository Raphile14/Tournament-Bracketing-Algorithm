"use strict";
const express = require('express');
const path = require('path');
const shuffle = require('../classes/shuffle');
const round_robin = require('../classes/round_robin');
const single_eliminations = require('../classes/single_eliminations');
let router = express.Router();

router.post('/', (req, res) => {

    // Gathering and Filtering Team Data
    let teams = req.body.inputTeams.split(/\r?\n/);
    let teamsFiltered = teams.filter((el) => { return el; });
    let bracket = [];

    // Randomizing teams array if seed is set
    if (req.body.inputSeed)
        teamsFiltered = shuffle(teamsFiltered, req.body.inputSeed);

    // Generate Round Robin
    if (req.body.bracketType == 0) 
        bracket = single_eliminations(teams);
    else if (req.body.bracketType == 2) 
        bracket = round_robin(teams);

    console.log(bracket);
    return res.json(bracket);
    // return res.render('pages/output.ejs', {bracket});
});

module.exports = router;