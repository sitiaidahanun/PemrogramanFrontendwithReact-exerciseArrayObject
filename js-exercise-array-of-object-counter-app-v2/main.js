function countryMedals(players, countries) {
    if (!countries) {
        return "Countries not provided";
    }

    const result = players.reduce((acc, player) => {
        if (countries.includes(player.country)) {
            let countryData = acc.find(item => item.name === player.country);

            if (!countryData) {
                countryData = { name: player.country, athlete: [], totalMedals: 0 };
                acc.push(countryData);
            }

            countryData.athlete.push(player.name);
            countryData.totalMedals += player.medals;
        }
        return acc;
    }, []);

    return result.sort((a, b) => a.name.localeCompare(b.name));
}

let playerData = [
    {
        name: "Lionel Messi",
        medals: 5,
        country: "Argentina"
    },
    {
        name: "Iker Casillas",
        medals: 7,
        country: "Spain"
    },
    {
        name: "Ahmad Waluyo",
        medals: 5,
        country: "Indonesia"
    },
    {
        name: "Alvin Arkansas",
        medals: 8,
        country: "Indonesia"
    },
    {
        name: "Gabriel Batistuta",
        medals: 1,
        country: "Argentina"
    },
    {
        name: "Xavi Hernandes",
        medals: 9,
        country: "Spain"
    },
    {
        name: "Carles Puyol",
        medals: 5,
        country: "Spain"
    },
    {
        name: "Jatmika Teja",
        medals: 6,
        country: "Indonesia"
    },
    {
        name: "Sergio Aguero",
        medals: 3,
        country: "Argentina"
    },
]

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals