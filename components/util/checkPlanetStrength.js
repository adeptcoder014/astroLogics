

// import { details } from "./data"
// const details = require('./data');

//-----------------------------------------------------------
const details = [{

    lagna: "aries",
    planets: [{
        name: "mars",

        rulingHouses: [1, 8],
        planetInDifferentHouses: [
            {
                house: 1,
                sign: 'aries',
                description: 'mars in the first house in aries sign',
                houseRelation: 'own',
                signRelation: 'own',
                planetStrength: 'powerful',
                aspect: [{
                    fromAries: '1st only',
                    fromScorpio: '6th from',
                }],
            },
            {
                house: 2,
                sign: 'taurus',
                description: 'mars in the second house in taurus sign',
                houseRelation: 'neutral',
                signRelation: 'neutral',
                aspect: [{
                    fromAries: '2nd from',
                    fromScorpio: '7th from',
                }],
            },
            {
                house: 3,
                sign: 'gemini',
                description: 'mars in the third house in gemini sign',
                houseRelation: 'neutral',
                signRelation: 'neutral',
                aspect: {
                    aries: '3rd from',
                    scorpio: '8th from',
                },
            },

        ]
    }],
},
{

    lagna: "capricorn",
    planets: [{
        name: "venus",

        rulingHouses: [5, 10],
        planetInDifferentHouses: [
            {
                house: 6,
                description: 'venus in the sixth house in gemini sign',
                houseRelation: 'own',
                signRelation: 'own',
                planetStrength: 'strong',
                aspect: [{
                    fromTaurus: '2nd',
                    fromLibra: '9th',
                }],
            },
            {
                house: 2,
                description: 'mars in the second house in taurus sign',
                houseRelation: 'neutral',
                signRelation: 'neutral',
                aspect: [{
                    fromAries: '2nd from',
                    fromScorpio: '7th from',
                }],
            },

        ]
    }],
}
]


export const checkPlanetStrength = (planet, lagna, planetSign) => {

    const found = details.find((element) => {
        if (element.lagna == lagna) {
            // console.log('hua --------');
            return element

        }
    });
    const found1 = found.planets.find((element) => {
        // console.log('hua --------',element);
        if (element.name == planet) {
            return element

        }
    });
    const found2 = found1.planetInDifferentHouses.find((element) => {
        // console.log('hua --------',element);
        if (element.sign == planetSign) {
            return element

        }
    });
    return found2
    console.log('--------', found2.planetStrength);

    // const a = details


}
// checkPlanetStrength(planet, lagna, planetSign)