function randomize(teams) {    

    // Insert Bye
    if (teams.length % 2 == 1)
        teams.push('Bye');

    const teamCount = teams.length;
    const rounds = teamCount - 1;
    const half = teamCount / 2;
    let gameCount = 0;
    let bracket = [];

    // Get the indexes and slice the first index
    const teamIndexes = teams.map((_, i) => i).slice(1);

    // Generate the first Round
    const roundPairings = [];
    const newTeamIndexes = [0].concat(teamIndexes);
    const firstHalf = newTeamIndexes.slice(0, half);
    const secondHalf = newTeamIndexes.slice(half, teamCount).reverse();

    for (let i = 0; i < firstHalf.length; i++) {
        gameCount += 1;
        roundPairings.push({
            game: gameCount, white: teams[firstHalf[i]], black: teams[secondHalf[i]]
        });
    }

    // Rotating the teams array
    teamIndexes.push(teamIndexes.shift());
    bracket.push(roundPairings);

    // Generate the next rounds
    while (bracket[bracket.length - 1].length > 1) {
        let roundPairings = [];
        let half = Math.ceil(bracket[bracket.length - 1].length / 2);

        for (let i = 0; i < half; i++) {
            gameCount += 1;
            let white = "Bye", black = "Bye";
            if (bracket[bracket.length - 1][i])
                white = "Winner of Game " + bracket[bracket.length - 1][i].game;
            if (bracket[bracket.length - 1][half + i])
                black = "Winner of Game " + bracket[bracket.length - 1][half + i].game;
            roundPairings.push({
                game: gameCount, white, black
            });
        }
        bracket.push(roundPairings);
    }    
    return {type: "Single Eliminations", bracket};
}

module.exports = randomize;