
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
                    aries: '1st only',
                    scorpio: '6th from',
                }],
            },
            {
                house: 2,
                sign: 'taurus',
                description: 'mars in the second house in taurus sign',
                houseRelation: 'neutral',
                signRelation: 'neutral',
                aspect: [{
                    aries: '2nd from',
                    scorpio: '7th from',
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
            {
                house: 9,
                sign: 'sagittarius',
                description: 'mars in the ninth house in sagittarius sign',
                houseRelation: 'enemy',
                signRelation: 'enemy',
                aspect: {
                    aries: '9th from',
                    scorpio: '2nd from',
                },
            },


        ]
    }],
},
{

    lagna: "capricorn",
    planets: [
        {
            name: "venus",

            rulingHouses: [5, 10],
            planetInDifferentHouses: [
                {
                    house: 6,
                    sign: 'gemini',

                    description: 'venus in the sixth house in gemini sign',
                    houseRelation: 'own',
                    signRelation: 'own',
                    planetStrength: 'strong',
                    taurus: {
                        placesAway: '2nd',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                    libra: {
                        placesAway: '9th',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                },
                {
                    house: 11,
                    sign: 'scorpio',

                    description: 'mars in the second house in taurus sign',
                    houseRelation: 'neutral',
                    signRelation: 'neutral',
                    
                    taurus: {
                        placesAway: '7th',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                    libra: {
                        placesAway: '2nd',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                },

            ]
        },
        {
            name: "saturn",

            rulingHouses: [1, 2],
            planetInDifferentHouses: [
                {
                    house: 1,
                    sign: 'capricorn',

                    description: 'venus in the sixth house in gemini sign',
                    houseRelation: 'own',
                    signRelation: 'own',
                    planetStrength: 'strong',
                    capricorn: {
                        placesAway: '1st',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                    aquarius: {
                        placesAway: '12th',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                },
                {
                    house: 2,
                    sign: 'aquarius',

                    description: 'mars in the second house in taurus sign',
                    houseRelation: 'neutral',
                    signRelation: 'neutral',
                    planetStrength: 'strong',

                    capricorn: {
                        placesAway: '12th',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                    aquarius: {
                        placesAway: '1st',
                        description: 'some story related of some kind',
                        reason: 'reason'
                    },
                },

            ]
        },



    ],
}
]



//==========================================================================
export const getHouseTranistFromCurrentTransitSign = (lagna,planet, ) => {

}
//==========================================================================
export const checkPlanetStrength = (planet, lagna, planetSign) => {
    // console.log('checkPlanetStrength ---------------', planet, lagna, planetSign);

    const found = details?.find((element) => {
        if (element.lagna == lagna) {
            return element

        }
    });
    const found1 = found?.planets?.find((element) => {
        // console.log('hua --------',element);
        if (element?.name == planet) {
            return element

        }
    });
    const found2 = found1?.planetInDifferentHouses?.find((element) => {
        // console.log('hua --------',element);
        if (element?.sign == planetSign) {
            return element

        }
    });
    // console.log('found --------',found1);
    return found2
    // console.log('--------', found2.planetStrength);

    // const a = details


}
// checkPlanetStrength(planet, lagna, planetSign)