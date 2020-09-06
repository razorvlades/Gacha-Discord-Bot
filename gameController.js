const gameData = require('./gameData');

function getResetTime(name) {
    const game = gameData.find(game => game.game === game);

    return game.dailyReset;
}

function getGameInfo(name) {
    return gameData.find(obj => obj.game.toLowerCase() === name.toLowerCase());
}

module.exports = { getResetTime, getGameInfo }