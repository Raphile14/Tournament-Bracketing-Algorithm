// https://github.com/Daplie/knuth-shuffle
// https://www.npmjs.com/package/seedrandom
const seedrandom = require('seedrandom');

function shuffle(array, seed) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    let seededRandom = seedrandom(seed);

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(seededRandom() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

module.exports = shuffle;