// https://stackoverflow.com/questions/6648512/scheduling-algorithm-for-a-round-robin-tournament

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

    for (let round = 0; round < rounds; round++) {
        const roundPairings = [];
        const newTeamIndexes = [0].concat(teamIndexes);
        const firstHalf = newTeamIndexes.slice(0, half);
        const secondHalf = newTeamIndexes.slice(half, teamCount).reverse();

        for (let i = 0; i < firstHalf.length; i++) {
            gameCount += 1;
            roundPairings.push({
                game: gameCount,
                white: teams[firstHalf[i]],
                black: teams[secondHalf[i]]
            });
        }

        // Rotating the teams array
        teamIndexes.push(teamIndexes.shift());
        bracket.push(roundPairings);
    }
    return bracket;
}

module.exports = randomize;