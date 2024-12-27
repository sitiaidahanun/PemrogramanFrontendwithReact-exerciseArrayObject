function mostRecommended(games) {
    if (games.length < 2) {
        return "Data cannot be compared";
    }

    const recommended = {};

    for (const game of games) {
        const genreKey = game.genre.replace(/[- ](.)/g, (_, char) => char.toUpperCase()).replace(/[- ]/g, '');

        if (!recommended[genreKey] || game.rating > recommended[genreKey].rating) {
            recommended[genreKey] = { 
                title: game.title, 
                genre: game.genre, 
                developer: game.developer, 
                rating: game.rating 
            };
        }
    }

    return recommended;
}
const allGames = [
    { title: 'The Witcher 3: Wild Hunt', genre: 'actionAdventure', developer: 'CD Projekt Red', rating: 10 },
    { title: 'The Last of Us Part I', genre: 'actionAdventure', developer: 'Naughty Dog', rating: 9.6 },
    { title: 'WWE 2K22', genre: 'fighting', developer: 'Visual Concepts', rating: 7.5 },
    { title: "Tom Clancy's Ghost Recon: Wildlands", genre: 'firstPersonShooter', developer: 'Ubisoft Belgrade', rating: 7.9 },
    { title: 'The Sims 4', genre: 'simulation', developer: 'Maxis', rating: 9.2 },
    { title: 'Tekken 7', genre: 'fighting', developer: 'BANDAI NAMCO Studios', rating: 9.5 },
    { title: 'Cities: Skylines', genre: 'simulation', developer: 'Colossal Order', rating: 9.4 },
    { title: 'Far Cry 5', genre: 'firstPersonShooter', developer: 'Ubisoft Montreal', rating: 8.9 },
    { title: 'Project CARS 3', genre: 'racing', developer: 'Slightly Mad Studios', rating: 6.8 },
    { title: 'Hot Wheels Unleashed', genre: 'racing', developer: 'Milestone', rating: 9.2 }
]

console.log(mostRecommended(allGames));
console.log(mostRecommended([{ title: 'Tekken 7', genre: 'fighting', developer: 'BANDAI NAMCO Studios', rating: 9.5 }]));

module.exports = mostRecommended
