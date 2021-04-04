"use strict";
const express = require('express');
const path = require('path');
const shuffle = require('../classes/shuffle');
const round_robin = require('../classes/round_robin');
const single_eliminations = require('../classes/single_eliminations');
const double_eliminations = require('../classes/double_eliminations');
let router = express.Router();

router.post('/', (req, res) => {

    // Gathering and Filtering Team Data
    let teams = req.body.inputTeams.split(/\r?\n/);
    let teamsFiltered = teams.filter((el) => { return el; });
    let response = {};

    // Randomizing teams array if seed is set
    if (req.body.inputSeed)
        teamsFiltered = shuffle(teamsFiltered, req.body.inputSeed);

    // Generate Round Robin
    if (req.body.bracketType == 0) 
        response = single_eliminations(teamsFiltered);
    else if (req.body.bracketType == 1) 
        response = double_eliminations(teamsFiltered);
    else if (req.body.bracketType == 2) 
        response = round_robin(teamsFiltered);

    response.name = req.body.inputName;
    response.game = req.body.inputGame;
    // return res.json(response);
    return res.render('pages/output.ejs', response);
});

module.exports = router;