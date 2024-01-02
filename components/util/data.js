export const details = [{

    name: 'aries',
    planets: [{
        name: "mars",

        rulingHouses: [1, 8],
        planetInDifferentHouses: [
            {
                house: 1,
                description: 'mars in the first house in aries sign',
                houseRelation: 'own',
                signRelation: 'own',
                planetStrength: 'strong',
                aspect: [{
                    fromAries: '1st only',
                    fromScorpio: '6th from',
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
}]
