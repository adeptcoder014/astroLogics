export const SineWave = ({ whichHouse, planet, lagnaSign }) => {

    const colorCodes = {
        aries: {
            color1: '#690000',
            color2: '#FF0000',
        },
        taurus: {
            color1: '#FF8A00',
            color2: '#A15802',
        },
        gemini: {
            color1: '#FAFF00',
            color2: '#9B9E00',
        },
        cancer: {
            color1: '#00FF1A',
            color2: '#008B0E',
        },
        leo: {
            color1: '#00F5D7',
            color2: '#003630',
        },
        virgo: {
            color1: '#0085FF',
            color2: '#014584',
        },
        libra: {
            color1: '#0057FF',
            color2: '#002469',
        },
        scorpio: {
            color1: '#0500FF',
            color2: '#02006B',
        },
        sagittarius: {
            color1: '#360056',
            color2: '#9E00FF',
        },
        capricorn: {
            color1: '#0500E2',
            color2: '#01004A',
        },
        aquarius: {
            color1: '#210066',
            color2: '#5200FF',
        },
        pisces: {
            color1: '#E900FF',
            color2: '#4C0253',
        },
    }
    const lagnaColorCodes = {

        aries: {
            firstHouse: colorCodes.aries,
            secondHouse: colorCodes.taurus,
            thirdHouse: colorCodes.gemini,
            fourthHouse: colorCodes.cancer,
            fifthHouse: colorCodes.leo,
            sixthHouse: colorCodes.virgo,
            seventhHouse: colorCodes.libra,
            eighthHouse: colorCodes.scorpio,
            ninthHouse: colorCodes.sagittarius,
            tenthHouse: colorCodes.capricorn,
            eleventhHouse: colorCodes.aquarius,
            twelfthHouse: colorCodes.aries,

        },
        taurus: {
            firstHouse: colorCodes.taurus,
            secondHouse: colorCodes.gemini,
            thirdHouse: colorCodes.cancer,
            fourthHouse: colorCodes.leo,
            fifthHouse: colorCodes.virgo,
            sixthHouse: colorCodes.libra,
            seventhHouse: colorCodes.scorpio,
            eighthHouse: colorCodes.sagittarius,
            ninthHouse: colorCodes.capricorn,
            tenthHouse: colorCodes.aquarius,
            eleventhHouse: colorCodes.sagittarius,
            twelfthHouse: colorCodes.aries,

        },
        gemini: {
            firstHouse: colorCodes.gemini,
            secondHouse: colorCodes.cancer,
            thirdHouse: colorCodes.leo,
            fourthHouse: colorCodes.virgo,
            fifthHouse: colorCodes.libra,
            sixthHouse: colorCodes.scorpio,
            seventhHouse: colorCodes.sagittarius,
            eighthHouse: colorCodes.capricorn,
            ninthHouse: colorCodes.aquarius,
            tenthHouse: colorCodes.pisces,
            eleventhHouse: colorCodes.aries,
            twelfthHouse: colorCodes.taurus,

        }, cancer: {
            firstHouse: colorCodes.cancer,
            secondHouse: colorCodes.leo,
            thirdHouse: colorCodes.virgo,
            fourthHouse: colorCodes.libra,
            fifthHouse: colorCodes.scorpio,
            sixthHouse: colorCodes.sagittarius,
            seventhHouse: colorCodes.capricorn,
            eighthHouse: colorCodes.aquarius,
            ninthHouse: colorCodes.pisces,
            tenthHouse: colorCodes.aries,
            eleventhHouse: colorCodes.taurus,
            twelfthHouse: colorCodes.gemini,

        }, 
        leo: {
            firstHouse: colorCodes.leo,
            secondHouse: colorCodes.virgo,
            thirdHouse: colorCodes.libra,
            fourthHouse: colorCodes.scorpio,
            fifthHouse: colorCodes.sagittarius,
            sixthHouse: colorCodes.capricorn,
            seventhHouse: colorCodes.aquarius,
            eighthHouse: colorCodes.pisces,
            ninthHouse: colorCodes.aries,
            tenthHouse: colorCodes.taurus,
            eleventhHouse: colorCodes.gemini,
            twelfthHouse: colorCodes.cancer,

        },
        virgo: {
            firstHouse: colorCodes.virgo,
            secondHouse: colorCodes.libra,
            thirdHouse: colorCodes.scorpio,
            fourthHouse: colorCodes.sagittarius,
            fifthHouse: colorCodes.capricorn,
            sixthHouse: colorCodes.aquarius,
            seventhHouse: colorCodes.pisces,
            eighthHouse: colorCodes.aries,
            ninthHouse: colorCodes.taurus,
            tenthHouse: colorCodes.gemini,
            eleventhHouse: colorCodes.cancer,
            twelfthHouse: colorCodes.leo,

        },
        libra: {
            firstHouse: colorCodes.libra,
            secondHouse: colorCodes.scorpio,
            thirdHouse: colorCodes.sagittarius,
            fourthHouse: colorCodes.capricorn,
            fifthHouse: colorCodes.aquarius,
            sixthHouse: colorCodes.pisces,
            seventhHouse: colorCodes.aries,
            eighthHouse: colorCodes.taurus,
            ninthHouse: colorCodes.gemini,
            tenthHouse: colorCodes.cancer,
            eleventhHouse: colorCodes.leo,
            twelfthHouse: colorCodes.virgo,

        },
         scorpio: {
            firstHouse: colorCodes.scorpio,
            secondHouse: colorCodes.sagittarius,
            thirdHouse: colorCodes.capricorn,
            fourthHouse: colorCodes.aquarius,
            fifthHouse: colorCodes.pisces,
            sixthHouse: colorCodes.aries,
            seventhHouse: colorCodes.taurus,
            eighthHouse: colorCodes.gemini,
            ninthHouse: colorCodes.cancer,
            tenthHouse: colorCodes.leo,
            eleventhHouse: colorCodes.virgo,
            twelfthHouse: colorCodes.libra,

        },
        sagittarius: {
            firstHouse: colorCodes.sagittarius,
            secondHouse: colorCodes.capricorn,
            thirdHouse: colorCodes.aquarius,
            fourthHouse: colorCodes.pisces,
            fifthHouse: colorCodes.aries,
            sixthHouse: colorCodes.taurus,
            seventhHouse: colorCodes.gemini,
            eighthHouse: colorCodes.cancer,
            ninthHouse: colorCodes.leo,
            tenthHouse: colorCodes.virgo,
            eleventhHouse: colorCodes.libra,
            twelfthHouse: colorCodes.scorpio,

        },
         capricorn: {
            firstHouse: colorCodes.capricorn,
            secondHouse: colorCodes.aquarius,
            thirdHouse: colorCodes.pisces,
            fourthHouse: colorCodes.aries,
            fifthHouse: colorCodes.taurus,
            sixthHouse: colorCodes.gemini,
            seventhHouse: colorCodes.cancer,
            eighthHouse: colorCodes.leo,
            ninthHouse: colorCodes.virgo,
            tenthHouse: colorCodes.libra,
            eleventhHouse: colorCodes.scorpio,
            twelfthHouse: colorCodes.sagittarius,

        },
        aquarius: {
            firstHouse: colorCodes.aquarius,
            secondHouse: colorCodes.pisces,
            thirdHouse: colorCodes.aries,
            fourthHouse: colorCodes.taurus,
            fifthHouse: colorCodes.gemini,
            sixthHouse: colorCodes.cancer,
            seventhHouse: colorCodes.leo,
            eighthHouse: colorCodes.virgo,
            ninthHouse: colorCodes.libra,
            tenthHouse: colorCodes.scorpio,
            eleventhHouse: colorCodes.sagittarius,
            twelfthHouse: colorCodes.capricorn,

        },
        pisces: {
            firstHouse: colorCodes.pisces,
            secondHouse: colorCodes.aries,
            thirdHouse: colorCodes.taurus,
            fourthHouse: colorCodes.gemini,
            fifthHouse: colorCodes.cancer,
            sixthHouse: colorCodes.leo,
            seventhHouse: colorCodes.virgo,
            eighthHouse: colorCodes.libra,
            ninthHouse: colorCodes.scorpio,
            tenthHouse: colorCodes.sagittarius,
            eleventhHouse: colorCodes.capricorn,
            twelfthHouse: colorCodes.aquarius,

        }
    }


    console.log('lagnaSign ---', lagnaSign);
    return (
        <svg width="301" height="176" viewBox="0 0 301 176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 87.3971C150 77.1556 148.06 67.0143 144.291 57.5524C140.522 48.0904 134.997 39.4931 128.033 32.2512C121.069 25.0094 112.801 19.2648 103.701 15.3455C94.6018 11.4263 84.8491 9.40906 75 9.40906C65.1509 9.40906 55.3982 11.4263 46.2987 15.3455C37.1993 19.2648 28.9314 25.0094 21.967 32.2512C15.0026 39.4931 9.47814 48.0904 5.70903 57.5524C1.93993 67.0143 -8.61039e-07 77.1556 0 87.3971L75 87.3971H150Z" fill="#D9D9D9" />
            {/* ----- 1st ----------------- */}
            <path d="M10 48.5764L75.1945 87.4838L0 87.3971V84.9708L0.166667 82.5445L0.666667 77.5186L1.5 72.4928L2 69.8932L3 65.9071L3.66667 63.1342L4.83333 60.0147L7.16667 54.2955L10 48.5764Z" fill="url(#paint0_linear_493_3266)" />
            {/* ----- 3rd ----------------- */}
            <path d="M76.0654 9.00528L75.5974 87.5655L38.0738 19.8066L40.1358 18.5687L42.2811 17.4808L46.8024 15.3669L51.4903 13.5531L53.9495 12.677L57.837 11.5438L60.5269 10.7294L63.7614 10.1884L69.7884 9.37172L76.0654 9.00528Z" fill="url(#paint1_linear_493_3266)" />
            {/* ----- 4th ----------------- */}
            <path d="M113 19.7702L76 87.3971L76.0824 9.39709H78.3898L80.6971 9.56998L85.4766 10.0886L90.2561 10.9531L92.7283 11.4717L96.5189 12.509L99.1559 13.2006L102.122 14.4108L107.561 16.8312L113 19.7702Z" fill="url(#paint2_linear_493_3266)" />

            {/* ----- 5th ----------------- */}
            <path d="M140.119 48.644L75.5917 87.7711L113.077 20.4434L115.238 21.7411L117.317 23.1881L121.546 26.3241L122.241 26.9505L124.308 28.7888L127.361 31.8167L129.5 33.8971L131.699 36.6109L135.633 41.7603L140.119 48.644Z" fill="url(#paint3_linear_493_3266)" />
            {/* ----- 2th ----------------- */}
            <path d="M37.8731 18.8992L75.1205 87.3982L10.043 48.226L11.2411 46.0681L12.5836 43.9969L15.4984 39.787L18.7019 35.7503L20.4186 33.6983L23.253 30.6731L25.1996 28.5536L27.7504 26.3857L32.5953 22.5125L37.8731 18.8992Z" fill="url(#paint4_linear_493_3266)" />
            <path d="M300 87.2238C300 97.4881 298.06 107.652 294.291 117.135C290.522 126.618 284.997 135.234 278.033 142.492C271.069 149.75 262.801 155.507 253.701 159.435C244.602 163.363 234.849 165.385 225 165.385C215.151 165.385 205.398 163.363 196.299 159.435C187.199 155.507 178.931 149.75 171.967 142.492C165.003 135.234 159.478 126.618 155.709 117.135C151.94 107.652 150 97.4881 150 87.2238L225 87.2238H300Z" fill="#D9D9D9" />
            {/* ----- 7th ----------------- */}
            <path d="M159.974 126.397L225 87.3971L150 86.8971V87.484V89.916L150.166 92.3481L150.665 97.386L151.496 102.424L151.995 105.03L152.992 109.025L153.657 111.805L154.821 114.932L157.148 120.664L159.974 126.397Z" fill="url(#paint5_linear_493_3266)" />
            {/* ----- 9th ----------------- */}
            <path d="M225.714 165.897L226.021 87.7326L225.5 87.3971L188 155.407L190.011 156.617L192.106 157.677L196.021 159.732L201.104 161.488L203.508 162.333L207.312 163.42L210.484 164.346L213.653 164.85L219.559 165.599L225.714 165.897Z" fill="url(#paint6_linear_493_3266)" />
            {/* ----- 10th ----------------- */}
            <path d="M263 154.667L225.667 87.0505V165.33H227.995L230.323 165.157L235.146 164.639L239.968 163.774L242.463 163.256L246.287 162.219L248.948 161.527L251.941 160.317L257.429 157.897L263 154.667Z" fill="url(#paint7_linear_493_3266)" />
            {/* ----- 11th ----------------- */}
            <path d="M290.729 125.844L225.908 87.4523L243.5 120.897L263 154.397L265.783 152.919L267.719 151.562L269.756 149.935L273.564 146.655L275.5 144.897L279.633 140.829L281.632 138.835L283.676 136.221L287.326 131.255L290.729 125.844Z" fill="url(#paint8_linear_493_3266)" />
            {/* ----- 8th ----------------- */}
            <path d="M188.425 156.564L226.043 86.6646L160.044 125.897L160.044 126.476L161.268 128.687L162.64 130.81L165.616 135.125L168.885 139.264L170.637 141.368L173.528 144.472L175.513 146.646L178.113 148.872L183.049 152.85L188.425 156.564Z" fill="url(#paint9_linear_493_3266)" />
            {/* ----- 12th ----------------- */}
            <path d="M289.977 126.484L226 87.3971L300.309 87.1737L299.95 89.9468L299.789 92.3677L299.305 97.3824L298.5 102.397L298.017 104.991L297.051 108.968L296.098 111.958L294.97 115.071L292.715 120.777L289.977 126.484Z" fill="url(#paint10_linear_493_3266)" />
            {/* ----- 6th ----------------- */}
            <path d="M140.003 48.3959L77.0002 87.2166L150 87.3971L150.043 87.2166V85.1851L149.882 82.7642L149.399 77.7495L148.594 72.7348L148.111 70.141L147.144 66.1638L146.5 63.3971L145.373 60.2845L142.741 54.1023L140.003 48.3959Z" fill="url(#paint11_linear_493_3266)" />


            {/* First House =========================================================================================================== */}

            {/* ----- Sun----------------- */}

            {whichHouse === '1' & planet === 'sun' ?
                (<g filter="url(#filter0_d_493_3266)">
                    <path d="M27 74C27 79.5228 22.5228 84 17 84C11.4772 84 7 79.5228 7 74C7 68.4772 11.4772 64 17 64C22.5228 64 27 68.4772 27 74Z" fill="url(#paint12_radial_493_3266)" />
                </g>) : (null)}

            {/* ----- Moon----------------- */}
            {whichHouse === '1' & planet === 'moon' ?

                <g filter="url(#filter1_d_493_3266)">
                    <path d="M27.1005 74C27.1005 79.5228 36.6234 82.5 31.1005 82.5C25.5777 82.5 20.0995 81 19.1005 75C18.1934 69.5522 23.5777 65 29.1005 65C34.6234 65 27.1005 68.4772 27.1005 74Z" fill="url(#paint13_linear_493_3266)" />
                </g>
                : (null)}
            {/* ----- Mercury ----------------- */}
            {whichHouse === '1' & planet === 'mercury' ?

                <g filter="url(#filter2_d_493_3266)">
                    <circle cx="16.5" cy="74.5" r="7.5" fill="url(#paint14_linear_493_3266)" />
                </g>
                : (null)}
            {/* ----- Venus ----------------- */}
            {whichHouse === '1' & planet === 'venus' ?

                <g filter="url(#filter3_d_493_3266)">
                    <path d="M28 76C28 80.9706 23.9706 85 19 85C14.0294 85 10 80.9706 10 76C10 71.0294 14.0294 67 19 67C23.9706 67 28 71.0294 28 76Z" fill="url(#paint15_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Mars ----------------- */}
            {whichHouse === '1' & planet === 'mars' ?

                <g filter="url(#filter4_d_493_3266)">
                    <path d="M28 75.5C28 80.7467 23.7467 85 18.5 85C13.2533 85 9 80.7467 9 75.5C9 70.2533 13.2533 66 18.5 66C23.7467 66 28 70.2533 28 75.5Z" fill="url(#paint16_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Jupiter ----------------- */}
            {whichHouse === '1' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter5_d_493_3266)">
                        <path d="M29 73C29 79.0751 24.0751 84 18 84C11.9249 84 7 79.0751 7 73C7 66.9249 11.9249 62 18 62C24.0751 62 29 66.9249 29 73Z" fill="url(#paint17_linear_493_3266)" />
                    </g>
                    <path d="M10.7783 79.2032C12.3557 78.9881 14.2411 77.439 15.5736 76.6617C17.2759 75.6687 16.4612 73.3818 17.9074 72.25C19.4015 71.0806 21.8463 71.5307 23.6191 71.5307C24.7193 71.5307 25.7386 70.906 26.6668 70.4118C27.6049 69.9123 27.3673 70.2213 26.6988 70.7075C25.7935 71.3659 24.878 71.9833 24.088 72.7269C23.3639 73.4084 22.4223 74.869 21.3174 74.9833C20.266 75.0921 19.2413 75.331 18.1258 75.367C17.4833 75.3877 16.8926 76.2474 16.4155 76.6377C15.2094 77.6246 13.1592 77.8773 12.0731 78.9635" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M18.0669 74.9832C19.3231 74.8995 20.7257 74.1946 21.5915 73.3289C22.7226 72.1977 21.1101 73.5625 20.4166 73.891C19.9236 74.1245 19.3496 74.3599 18.7889 74.3599C17.8448 74.3599 19.0127 73.47 19.1911 73.1131C19.587 72.3214 21.1417 72.7774 21.8072 72.7774" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </>
                : (null)}
            {/* ----- Saturn ----------------- */}
            {whichHouse === '1' & planet === 'saturn' ?
                <>
                    <path d="M34.3134 62.7458C36.3494 65.3668 32.9348 72.0826 26.6866 77.7458C20.4384 83.409 13.7227 85.8752 11.6866 83.2541C9.65056 80.6331 13.0652 73.9174 19.3134 68.2541C25.5616 62.5909 32.2773 60.1247 34.3134 62.7458ZM13.0841 81.9875C14.8687 84.2848 20.7549 82.1232 26.2312 77.1596C31.7076 72.1959 34.7004 66.3097 32.9159 64.0124C31.1313 61.7152 25.2451 63.8767 19.7688 68.8404C14.2924 73.804 11.2996 79.6902 13.0841 81.9875Z" fill="url(#paint18_linear_493_3266)" />

                    <g filter="url(#filter6_d_493_3266)">
                        <path d="M31.2104 73.7609C31.2104 78.5056 27.6496 82.352 23.2571 82.352C18.8645 82.352 15.3037 78.5056 15.3037 73.7609C15.3037 69.0163 18.8645 65.1699 23.2571 65.1699C27.6496 65.1699 31.2104 69.0163 31.2104 73.7609Z" fill="url(#paint19_radial_493_3266)" />
                    </g>
                </> : (null)}

            {/* ----- Node ----------------- */}
            {whichHouse === '1' & planet === 'node' ?

                <>
                    <g filter="url(#filter7_d_493_3266)">
                        <path d="M21.7227 73.5C21.7227 67.9772 12.1999 65 17.7227 65C23.2456 65 28.7237 66.5 29.7227 72.5C30.6298 77.9478 25.2456 82.5 19.7227 82.5C14.1999 82.5 21.7227 79.0228 21.7227 73.5Z" fill="url(#paint20_linear_493_3266)" />
                    </g>
                </>
                : (null)}
            {/* Second House =========================================================================================================== */}
            {/* ----- Sun----------------- */}
            {whichHouse === '2' & planet === 'sun' ?

                <g filter="url(#filter8_d_493_3266)">
                    <path d="M42 45C42 50.5228 37.5228 55 32 55C26.4772 55 22 50.5228 22 45C22 39.4772 26.4772 35 32 35C37.5228 35 42 39.4772 42 45Z" fill="url(#paint21_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Moon----------------- */}
            {whichHouse === '2' & planet === 'moon' ?

                <g filter="url(#filter9_d_493_3266)">
                    <path d="M42.1005 45C42.1005 50.5228 51.6234 53.5 46.1005 53.5C40.5777 53.5 35.0995 52 34.1005 46C33.1934 40.5522 38.5777 36 44.1005 36C49.6234 36 42.1005 39.4772 42.1005 45Z" fill="url(#paint22_linear_493_3266)" />
                </g> : (null)}
            {/* ----- Mercury ----------------- */}
            {whichHouse === '2' & planet === 'mercury' ?

                <g filter="url(#filter10_d_493_3266)">
                    <circle cx="31.5" cy="45.5" r="7.5" fill="url(#paint23_linear_493_3266)" />
                </g> : (null)}
            {/* ----- Venus ----------------- */}
            {whichHouse === '2' & planet === 'venus' ?

                <g filter="url(#filter11_d_493_3266)">
                    <path d="M43 47C43 51.9706 38.9706 56 34 56C29.0294 56 25 51.9706 25 47C25 42.0294 29.0294 38 34 38C38.9706 38 43 42.0294 43 47Z" fill="url(#paint24_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Mars ----------------- */}
            {whichHouse === '2' & planet === 'mars' ?

                <g filter="url(#filter12_d_493_3266)">
                    <path d="M43 46.5C43 51.7467 38.7467 56 33.5 56C28.2533 56 24 51.7467 24 46.5C24 41.2533 28.2533 37 33.5 37C38.7467 37 43 41.2533 43 46.5Z" fill="url(#paint25_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Jupiter ----------------- */}
            {whichHouse === '2' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter13_d_493_3266)">
                        <path d="M44 44C44 50.0751 39.0751 55 33 55C26.9249 55 22 50.0751 22 44C22 37.9249 26.9249 33 33 33C39.0751 33 44 37.9249 44 44Z" fill="url(#paint26_linear_493_3266)" />
                    </g>
                    <path d="M25.7783 50.2032C27.3557 49.9881 29.2411 48.439 30.5736 47.6617C32.2759 46.6687 31.4612 44.3818 32.9074 43.25C34.4015 42.0806 36.8463 42.5307 38.6191 42.5307C39.7193 42.5307 40.7386 41.906 41.6668 41.4118C42.6049 40.9123 42.3673 41.2213 41.6988 41.7075C40.7935 42.3659 39.878 42.9833 39.088 43.7269C38.3639 44.4084 37.4223 45.869 36.3174 45.9833C35.266 46.0921 34.2413 46.331 33.1258 46.367C32.4833 46.3877 31.8926 47.2474 31.4155 47.6377C30.2094 48.6246 28.1592 48.8773 27.0731 49.9635" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M33.0669 45.9832C34.3231 45.8995 35.7257 45.1946 36.5915 44.3289C37.7226 43.1977 36.1101 44.5625 35.4166 44.891C34.9236 45.1245 34.3496 45.3599 33.7889 45.3599C32.8448 45.3599 34.0127 44.47 34.1911 44.1131C34.587 43.3214 36.1417 43.7774 36.8072 43.7774" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {/* ----- Saturn ----------------- */}
            {whichHouse === '2' & planet === 'saturn' ?
                <>
                    <path d="M49.3134 33.7458C51.3494 36.3668 47.9348 43.0826 41.6866 48.7458C35.4384 54.409 28.7227 56.8752 26.6866 54.2541C24.6506 51.6331 28.0652 44.9174 34.3134 39.2541C40.5616 33.5909 47.2773 31.1247 49.3134 33.7458ZM28.0841 52.9875C29.8687 55.2848 35.7549 53.1232 41.2312 48.1596C46.7076 43.1959 49.7004 37.3097 47.9159 35.0124C46.1313 32.7152 40.2451 34.8767 34.7688 39.8404C29.2924 44.804 26.2996 50.6902 28.0841 52.9875Z" fill="url(#paint27_linear_493_3266)" />
                    <g filter="url(#filter14_d_493_3266)">
                        <path d="M46.2104 44.7609C46.2104 49.5056 42.6496 53.352 38.2571 53.352C33.8645 53.352 30.3037 49.5056 30.3037 44.7609C30.3037 40.0163 33.8645 36.1699 38.2571 36.1699C42.6496 36.1699 46.2104 40.0163 46.2104 44.7609Z" fill="url(#paint28_radial_493_3266)" />
                    </g>
                </> : (null)}
            {/* ----- Node ----------------- */}
            {whichHouse === '2' & planet === 'node' ?

                <g filter="url(#filter15_d_493_3266)">
                    <path d="M36.7227 44.5C36.7227 38.9772 27.1999 36 32.7227 36C38.2456 36 43.7237 37.5 44.7227 43.5C45.6298 48.9478 40.2456 53.5 34.7227 53.5C29.1999 53.5 36.7227 50.0228 36.7227 44.5Z" fill="url(#paint29_linear_493_3266)" />
                </g> : (null)}

            {/* Third House =========================================================================================================== */}

            {/* ----- Sun----------------- */}
            {whichHouse === '3' & planet === 'sun' ?

                <g filter="url(#filter16_d_493_3266)">
                    <path d="M68 30C68 35.5228 63.5228 40 58 40C52.4772 40 48 35.5228 48 30C48 24.4772 52.4772 20 58 20C63.5228 20 68 24.4772 68 30Z" fill="url(#paint30_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Moon----------------- */}
            {whichHouse === '3' & planet === 'moon' ?

                <g filter="url(#filter17_d_493_3266)">
                    <path d="M68.1005 30C68.1005 35.5228 77.6234 38.5 72.1005 38.5C66.5777 38.5 61.0995 37 60.1005 31C59.1934 25.5522 64.5777 21 70.1005 21C75.6234 21 68.1005 24.4772 68.1005 30Z" fill="url(#paint31_linear_493_3266)" />
                </g> : (null)}
            {/* ----- Mercury ----------------- */}
            {whichHouse === '3' & planet === 'mercury' ?

                <g filter="url(#filter18_d_493_3266)">
                    <circle cx="57.5" cy="30.5" r="7.5" fill="url(#paint32_linear_493_3266)" />
                </g> : (null)}
            {/* ----- Venus ----------------- */}
            {whichHouse === '3' & planet === 'venus' ?

                <g filter="url(#filter19_d_493_3266)">
                    <path d="M69 32C69 36.9706 64.9706 41 60 41C55.0294 41 51 36.9706 51 32C51 27.0294 55.0294 23 60 23C64.9706 23 69 27.0294 69 32Z" fill="url(#paint33_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Mars ----------------- */}
            {whichHouse === '3' & planet === 'mars' ?

                <g filter="url(#filter20_d_493_3266)">
                    <path d="M69 31.5C69 36.7467 64.7467 41 59.5 41C54.2533 41 50 36.7467 50 31.5C50 26.2533 54.2533 22 59.5 22C64.7467 22 69 26.2533 69 31.5Z" fill="url(#paint34_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Jupiter ----------------- */}
            {whichHouse === '3' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter21_d_493_3266)">
                        <path d="M70 29C70 35.0751 65.0751 40 59 40C52.9249 40 48 35.0751 48 29C48 22.9249 52.9249 18 59 18C65.0751 18 70 22.9249 70 29Z" fill="url(#paint35_linear_493_3266)" />
                    </g>
                    <path d="M51.7783 35.2032C53.3557 34.9881 55.2411 33.439 56.5736 32.6617C58.2759 31.6687 57.4612 29.3818 58.9074 28.25C60.4015 27.0806 62.8463 27.5307 64.6191 27.5307C65.7193 27.5307 66.7386 26.906 67.6668 26.4118C68.6049 25.9123 68.3673 26.2213 67.6988 26.7075C66.7935 27.3659 65.878 27.9833 65.088 28.7269C64.3639 29.4084 63.4223 30.869 62.3174 30.9833C61.266 31.0921 60.2413 31.331 59.1258 31.367C58.4833 31.3877 57.8926 32.2474 57.4155 32.6377C56.2094 33.6246 54.1592 33.8773 53.0731 34.9635" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M59.0669 30.9832C60.3231 30.8995 61.7257 30.1946 62.5915 29.3289C63.7226 28.1977 62.1101 29.5625 61.4166 29.891C60.9236 30.1245 60.3496 30.3599 59.7889 30.3599C58.8448 30.3599 60.0127 29.47 60.1911 29.1131C60.587 28.3214 62.1417 28.7774 62.8072 28.7774" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {/* ----- Saturn ----------------- */}
            {whichHouse === '3' & planet === 'saturn' ?
                <>
                    <path d="M75.3134 18.7458C77.3494 21.3668 73.9348 28.0826 67.6866 33.7458C61.4384 39.409 54.7227 41.8752 52.6866 39.2541C50.6506 36.6331 54.0652 29.9174 60.3134 24.2541C66.5616 18.5909 73.2773 16.1247 75.3134 18.7458ZM54.0841 37.9875C55.8687 40.2848 61.7549 38.1232 67.2312 33.1596C72.7076 28.1959 75.7004 22.3097 73.9159 20.0124C72.1313 17.7152 66.2451 19.8767 60.7688 24.8404C55.2924 29.804 52.2996 35.6902 54.0841 37.9875Z" fill="url(#paint36_linear_493_3266)" />
                    <g filter="url(#filter22_d_493_3266)">
                        <path d="M72.2104 29.7609C72.2104 34.5056 68.6496 38.352 64.2571 38.352C59.8645 38.352 56.3037 34.5056 56.3037 29.7609C56.3037 25.0163 59.8645 21.1699 64.2571 21.1699C68.6496 21.1699 72.2104 25.0163 72.2104 29.7609Z" fill="url(#paint37_radial_493_3266)" />
                    </g>
                </> : (null)}
            {/* ----- Node ----------------- */}
            {whichHouse === '3' & planet === 'node' ?

                <g filter="url(#filter23_d_493_3266)">
                    <path d="M62.7227 29.5C62.7227 23.9772 53.1999 21 58.7227 21C64.2456 21 69.7237 22.5 70.7227 28.5C71.6298 33.9478 66.2456 38.5 60.7227 38.5C55.1999 38.5 62.7227 35.0228 62.7227 29.5Z" fill="url(#paint38_linear_493_3266)" />
                </g> : (null)}

            {/* Fourth House =========================================================================================================== */}
            {whichHouse === '4' & planet === 'sun' ?

                <g filter="url(#filter24_d_493_3266)">
                    <path d="M99 30C99 35.5228 94.5228 40 89 40C83.4772 40 79 35.5228 79 30C79 24.4772 83.4772 20 89 20C94.5228 20 99 24.4772 99 30Z" fill="url(#paint39_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '4' & planet === 'moon' ?

                <g filter="url(#filter25_d_493_3266)">
                    <path d="M99.1005 30C99.1005 35.5228 108.623 38.5 103.101 38.5C97.5777 38.5 92.0995 37 91.1005 31C90.1934 25.5522 95.5777 21 101.101 21C106.623 21 99.1005 24.4772 99.1005 30Z" fill="url(#paint40_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '4' & planet === 'mercury' ?

                <g filter="url(#filter26_d_493_3266)">
                    <circle cx="88.5" cy="30.5" r="7.5" fill="url(#paint41_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '4' & planet === 'venus' ?

                <g filter="url(#filter27_d_493_3266)">
                    <path d="M100 32C100 36.9706 95.9706 41 91 41C86.0294 41 82 36.9706 82 32C82 27.0294 86.0294 23 91 23C95.9706 23 100 27.0294 100 32Z" fill="url(#paint42_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '4' & planet === 'mars' ?

                <g filter="url(#filter28_d_493_3266)">
                    <path d="M100 31.5C100 36.7467 95.7467 41 90.5 41C85.2533 41 81 36.7467 81 31.5C81 26.2533 85.2533 22 90.5 22C95.7467 22 100 26.2533 100 31.5Z" fill="url(#paint43_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '4' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter29_d_493_3266)">
                        <path d="M101 29C101 35.0751 96.0751 40 90 40C83.9249 40 79 35.0751 79 29C79 22.9249 83.9249 18 90 18C96.0751 18 101 22.9249 101 29Z" fill="url(#paint44_linear_493_3266)" />
                    </g>
                    <path d="M82.7783 35.2032C84.3557 34.9881 86.2411 33.439 87.5736 32.6617C89.2759 31.6687 88.4612 29.3818 89.9074 28.25C91.4015 27.0806 93.8463 27.5307 95.6191 27.5307C96.7193 27.5307 97.7386 26.906 98.6668 26.4118C99.6049 25.9123 99.3673 26.2213 98.6988 26.7075C97.7935 27.3659 96.878 27.9833 96.088 28.7269C95.3639 29.4084 94.4223 30.869 93.3174 30.9833C92.266 31.0921 91.2413 31.331 90.1258 31.367C89.4833 31.3877 88.8926 32.2474 88.4155 32.6377C87.2094 33.6246 85.1592 33.8773 84.0731 34.9635" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M90.0669 30.9832C91.3231 30.8995 92.7257 30.1946 93.5915 29.3289C94.7226 28.1977 93.1101 29.5625 92.4166 29.891C91.9236 30.1245 91.3496 30.3599 90.7889 30.3599C89.8448 30.3599 91.0127 29.47 91.1911 29.1131C91.587 28.3214 93.1417 28.7774 93.8072 28.7774" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {whichHouse === '4' & planet === 'saturn' ?
                <>
                    <path d="M106.313 18.7458C108.349 21.3668 104.935 28.0826 98.6866 33.7458C92.4384 39.409 85.7227 41.8752 83.6866 39.2541C81.6506 36.6331 85.0652 29.9174 91.3134 24.2541C97.5616 18.5909 104.277 16.1247 106.313 18.7458ZM85.0841 37.9875C86.8687 40.2848 92.7549 38.1232 98.2312 33.1596C103.708 28.1959 106.7 22.3097 104.916 20.0124C103.131 17.7152 97.2451 19.8767 91.7688 24.8404C86.2924 29.804 83.2996 35.6902 85.0841 37.9875Z" fill="url(#paint45_linear_493_3266)" />
                    <g filter="url(#filter30_d_493_3266)">
                        <path d="M103.21 29.7609C103.21 34.5056 99.6496 38.352 95.2571 38.352C90.8645 38.352 87.3037 34.5056 87.3037 29.7609C87.3037 25.0163 90.8645 21.1699 95.2571 21.1699C99.6496 21.1699 103.21 25.0163 103.21 29.7609Z" fill="url(#paint46_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '4' & planet === 'node' ?

                <g filter="url(#filter31_d_493_3266)">
                    <path d="M93.7227 29.5C93.7227 23.9772 84.1999 21 89.7227 21C95.2456 21 100.724 22.5 101.723 28.5C102.63 33.9478 97.2456 38.5 91.7227 38.5C86.1999 38.5 93.7227 35.0228 93.7227 29.5Z" fill="url(#paint47_linear_493_3266)" />
                </g> : (null)}

            {/* Fifth House =========================================================================================================== */}
            {whichHouse === '5' & planet === 'sun' ?

                <g filter="url(#filter32_d_493_3266)">
                    <path d="M125 46C125 51.5228 120.523 56 115 56C109.477 56 105 51.5228 105 46C105 40.4772 109.477 36 115 36C120.523 36 125 40.4772 125 46Z" fill="url(#paint48_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '5' & planet === 'moon' ?

                <g filter="url(#filter33_d_493_3266)">
                    <path d="M125.101 46C125.101 51.5228 134.623 54.5 129.101 54.5C123.578 54.5 118.1 53 117.101 47C116.193 41.5522 121.578 37 127.101 37C132.623 37 125.101 40.4772 125.101 46Z" fill="url(#paint49_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '5' & planet === 'mercury' ?

                <g filter="url(#filter34_d_493_3266)">
                    <circle cx="114.5" cy="46.5" r="7.5" fill="url(#paint50_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '5' & planet === 'venus' ?

                <g filter="url(#filter35_d_493_3266)">
                    <path d="M126 48C126 52.9706 121.971 57 117 57C112.029 57 108 52.9706 108 48C108 43.0294 112.029 39 117 39C121.971 39 126 43.0294 126 48Z" fill="url(#paint51_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '5' & planet === 'mars' ?

                <g filter="url(#filter36_d_493_3266)">
                    <path d="M126 47.5C126 52.7467 121.747 57 116.5 57C111.253 57 107 52.7467 107 47.5C107 42.2533 111.253 38 116.5 38C121.747 38 126 42.2533 126 47.5Z" fill="url(#paint52_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '5' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter37_d_493_3266)">
                        <path d="M127 45C127 51.0751 122.075 56 116 56C109.925 56 105 51.0751 105 45C105 38.9249 109.925 34 116 34C122.075 34 127 38.9249 127 45Z" fill="url(#paint53_linear_493_3266)" />
                    </g>

                    <path d="M108.778 51.2032C110.356 50.9881 112.241 49.439 113.574 48.6617C115.276 47.6687 114.461 45.3818 115.907 44.25C117.402 43.0806 119.846 43.5307 121.619 43.5307C122.719 43.5307 123.739 42.906 124.667 42.4118C125.605 41.9123 125.367 42.2213 124.699 42.7075C123.793 43.3659 122.878 43.9833 122.088 44.7269C121.364 45.4084 120.422 46.869 119.317 46.9833C118.266 47.0921 117.241 47.331 116.126 47.367C115.483 47.3877 114.893 48.2474 114.415 48.6377C113.209 49.6246 111.159 49.8773 110.073 50.9635" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M116.067 46.9832C117.323 46.8995 118.726 46.1946 119.591 45.3289C120.723 44.1977 119.11 45.5625 118.417 45.891C117.924 46.1245 117.35 46.3599 116.789 46.3599C115.845 46.3599 117.013 45.47 117.191 45.1131C117.587 44.3214 119.142 44.7774 119.807 44.7774" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {whichHouse === '5' & planet === 'saturn' ?
                <>
                    <path d="M132.313 34.7458C134.349 37.3668 130.935 44.0826 124.687 49.7458C118.438 55.409 111.723 57.8752 109.687 55.2541C107.651 52.6331 111.065 45.9174 117.313 40.2541C123.562 34.5909 130.277 32.1247 132.313 34.7458ZM111.084 53.9875C112.869 56.2848 118.755 54.1232 124.231 49.1596C129.708 44.1959 132.7 38.3097 130.916 36.0124C129.131 33.7152 123.245 35.8767 117.769 40.8404C112.292 45.804 109.3 51.6902 111.084 53.9875Z" fill="url(#paint54_linear_493_3266)" />
                    <g filter="url(#filter38_d_493_3266)">
                        <path d="M129.21 45.7609C129.21 50.5056 125.65 54.352 121.257 54.352C116.865 54.352 113.304 50.5056 113.304 45.7609C113.304 41.0163 116.865 37.1699 121.257 37.1699C125.65 37.1699 129.21 41.0163 129.21 45.7609Z" fill="url(#paint55_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '5' & planet === 'node' ?

                <g filter="url(#filter39_d_493_3266)">
                    <path d="M119.723 45.5C119.723 39.9772 110.2 37 115.723 37C121.246 37 126.724 38.5 127.723 44.5C128.63 49.9478 123.246 54.5 117.723 54.5C112.2 54.5 119.723 51.0228 119.723 45.5Z" fill="url(#paint56_linear_493_3266)" />
                </g> : (null)}
            {/* Sixth House =========================================================================================================== */}
            {whichHouse === '6' & planet === 'sun' ?

                <g filter="url(#filter40_d_493_3266)">
                    <path d="M135 74C135 79.5228 130.523 84 125 84C119.477 84 115 79.5228 115 74C115 68.4772 119.477 64 125 64C130.523 64 135 68.4772 135 74Z" fill="url(#paint57_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '6' & planet === 'moon' ?

                <g filter="url(#filter41_d_493_3266)">
                    <path d="M135.101 74C135.101 79.5228 144.623 82.5 139.101 82.5C133.578 82.5 128.1 81 127.101 75C126.193 69.5522 131.578 65 137.101 65C142.623 65 135.101 68.4772 135.101 74Z" fill="url(#paint58_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '6' & planet === 'mercury' ?

                <g filter="url(#filter42_d_493_3266)">
                    <circle cx="124.5" cy="74.5" r="7.5" fill="url(#paint59_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '6' & planet === 'venus' ?

                <g filter="url(#filter43_d_493_3266)">
                    <path d="M136 76C136 80.9706 131.971 85 127 85C122.029 85 118 80.9706 118 76C118 71.0294 122.029 67 127 67C131.971 67 136 71.0294 136 76Z" fill="url(#paint60_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '1' & planet === 'mars' ?

                <g filter="url(#filter44_d_493_3266)">
                    <path d="M136 75.5C136 80.7467 131.747 85 126.5 85C121.253 85 117 80.7467 117 75.5C117 70.2533 121.253 66 126.5 66C131.747 66 136 70.2533 136 75.5Z" fill="url(#paint61_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '6' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter45_d_493_3266)">
                        <path d="M137 73C137 79.0751 132.075 84 126 84C119.925 84 115 79.0751 115 73C115 66.9249 119.925 62 126 62C132.075 62 137 66.9249 137 73Z" fill="url(#paint62_linear_493_3266)" />

                    </g>
                    <path d="M118.778 79.2032C120.356 78.9881 122.241 77.439 123.574 76.6617C125.276 75.6687 124.461 73.3818 125.907 72.25C127.402 71.0806 129.846 71.5307 131.619 71.5307C132.719 71.5307 133.739 70.906 134.667 70.4118C135.605 69.9123 135.367 70.2213 134.699 70.7075C133.793 71.3659 132.878 71.9833 132.088 72.7269C131.364 73.4084 130.422 74.869 129.317 74.9833C128.266 75.0921 127.241 75.331 126.126 75.367C125.483 75.3877 124.893 76.2474 124.415 76.6377C123.209 77.6246 121.159 77.8773 120.073 78.9635" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M126.067 74.9832C127.323 74.8995 128.726 74.1946 129.591 73.3289C130.723 72.1977 129.11 73.5625 128.417 73.891C127.924 74.1245 127.35 74.3599 126.789 74.3599C125.845 74.3599 127.013 73.47 127.191 73.1131C127.587 72.3214 129.142 72.7774 129.807 72.7774" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {whichHouse === '6' & planet === 'saturn' ?
                <>

                    <path d="M142.313 62.7458C144.349 65.3668 140.935 72.0826 134.687 77.7458C128.438 83.409 121.723 85.8752 119.687 83.2541C117.651 80.6331 121.065 73.9174 127.313 68.2541C133.562 62.5909 140.277 60.1247 142.313 62.7458ZM121.084 81.9875C122.869 84.2848 128.755 82.1232 134.231 77.1596C139.708 72.1959 142.7 66.3097 140.916 64.0124C139.131 61.7152 133.245 63.8767 127.769 68.8404C122.292 73.804 119.3 79.6902 121.084 81.9875Z" fill="url(#paint63_linear_493_3266)" />
                    <g filter="url(#filter46_d_493_3266)">
                        <path d="M139.21 73.7609C139.21 78.5056 135.65 82.352 131.257 82.352C126.865 82.352 123.304 78.5056 123.304 73.7609C123.304 69.0163 126.865 65.1699 131.257 65.1699C135.65 65.1699 139.21 69.0163 139.21 73.7609Z" fill="url(#paint64_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '6' & planet === 'node' ?

                <g filter="url(#filter47_d_493_3266)">
                    <path d="M129.723 73.5C129.723 67.9772 120.2 65 125.723 65C131.246 65 136.724 66.5 137.723 72.5C138.63 77.9478 133.246 82.5 127.723 82.5C122.2 82.5 129.723 79.0228 129.723 73.5Z" fill="url(#paint65_linear_493_3266)" />
                </g> : (null)}
            {/* Seventh House =========================================================================================================== */}
            {whichHouse === '7' & planet === 'sun' ?

                <g filter="url(#filter48_d_493_3266)">
                    <path d="M174 103C174 108.523 169.523 113 164 113C158.477 113 154 108.523 154 103C154 97.4772 158.477 93 164 93C169.523 93 174 97.4772 174 103Z" fill="url(#paint66_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '7' & planet === 'moon' ?

                <g filter="url(#filter49_d_493_3266)">
                    <path d="M174.101 103C174.101 108.523 183.623 111.5 178.101 111.5C172.578 111.5 167.1 110 166.101 104C165.193 98.5522 170.578 94 176.101 94C181.623 94 174.101 97.4772 174.101 103Z" fill="url(#paint67_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '7' & planet === 'mercury' ?

                <g filter="url(#filter50_d_493_3266)">
                    <circle cx="163.5" cy="103.5" r="7.5" fill="url(#paint68_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '7' & planet === 'venus' ?

                <g filter="url(#filter51_d_493_3266)">
                    <path d="M175 105C175 109.971 170.971 114 166 114C161.029 114 157 109.971 157 105C157 100.029 161.029 96 166 96C170.971 96 175 100.029 175 105Z" fill="url(#paint69_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '7' & planet === 'mars' ?

                <g filter="url(#filter52_d_493_3266)">
                    <path d="M175 104.5C175 109.747 170.747 114 165.5 114C160.253 114 156 109.747 156 104.5C156 99.2533 160.253 95 165.5 95C170.747 95 175 99.2533 175 104.5Z" fill="url(#paint70_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '7' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter53_d_493_3266)">
                        <path d="M176 102C176 108.075 171.075 113 165 113C158.925 113 154 108.075 154 102C154 95.9249 158.925 91 165 91C171.075 91 176 95.9249 176 102Z" fill="url(#paint71_linear_493_3266)" />
                    </g>
                    <path d="M157.778 108.203C159.356 107.988 161.241 106.439 162.574 105.662C164.276 104.669 163.461 102.382 164.907 101.25C166.402 100.081 168.846 100.531 170.619 100.531C171.719 100.531 172.739 99.906 173.667 99.4118C174.605 98.9123 174.367 99.2213 173.699 99.7075C172.793 100.366 171.878 100.983 171.088 101.727C170.364 102.408 169.422 103.869 168.317 103.983C167.266 104.092 166.241 104.331 165.126 104.367C164.483 104.388 163.893 105.247 163.415 105.638C162.209 106.625 160.159 106.877 159.073 107.963" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M165.067 103.983C166.323 103.9 167.726 103.195 168.591 102.329C169.723 101.198 168.11 102.563 167.417 102.891C166.924 103.125 166.35 103.36 165.789 103.36C164.845 103.36 166.013 102.47 166.191 102.113C166.587 101.321 168.142 101.777 168.807 101.777" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {whichHouse === '7' & planet === 'saturn' ?
                <>
                    <path d="M181.313 91.7458C183.349 94.3668 179.935 101.083 173.687 106.746C167.438 112.409 160.723 114.875 158.687 112.254C156.651 109.633 160.065 102.917 166.313 97.2541C172.562 91.5909 179.277 89.1247 181.313 91.7458ZM160.084 110.987C161.869 113.285 167.755 111.123 173.231 106.16C178.708 101.196 181.7 95.3097 179.916 93.0124C178.131 90.7152 172.245 92.8767 166.769 97.8404C161.292 102.804 158.3 108.69 160.084 110.987Z" fill="url(#paint72_linear_493_3266)" />
                    <g filter="url(#filter54_d_493_3266)">
                        <path d="M178.21 102.761C178.21 107.506 174.65 111.352 170.257 111.352C165.865 111.352 162.304 107.506 162.304 102.761C162.304 98.0163 165.865 94.1699 170.257 94.1699C174.65 94.1699 178.21 98.0163 178.21 102.761Z" fill="url(#paint73_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '7' & planet === 'node' ?

                <g filter="url(#filter55_d_493_3266)">
                    <path d="M168.723 102.5C168.723 96.9772 159.2 94 164.723 94C170.246 94 175.724 95.5 176.723 101.5C177.63 106.948 172.246 111.5 166.723 111.5C161.2 111.5 168.723 108.023 168.723 102.5Z" fill="url(#paint74_linear_493_3266)" />
                </g> : (null)}
            {/* Eigth House =========================================================================================================== */}
            {whichHouse === '8' & planet === 'sun' ?

                <g filter="url(#filter56_d_493_3266)">
                    <path d="M190 132C190 137.523 185.523 142 180 142C174.477 142 170 137.523 170 132C170 126.477 174.477 122 180 122C185.523 122 190 126.477 190 132Z" fill="url(#paint75_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '8' & planet === 'moon' ?

                <g filter="url(#filter57_d_493_3266)">
                    <path d="M190.101 132C190.101 137.523 199.623 140.5 194.101 140.5C188.578 140.5 183.1 139 182.101 133C181.193 127.552 186.578 123 192.101 123C197.623 123 190.101 126.477 190.101 132Z" fill="url(#paint76_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '8' & planet === 'mercury' ?

                <g filter="url(#filter58_d_493_3266)">
                    <circle cx="179.5" cy="132.5" r="7.5" fill="url(#paint77_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '8' & planet === 'venus' ?

                <g filter="url(#filter59_d_493_3266)">
                    <path d="M191 134C191 138.971 186.971 143 182 143C177.029 143 173 138.971 173 134C173 129.029 177.029 125 182 125C186.971 125 191 129.029 191 134Z" fill="url(#paint78_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '8' & planet === 'mars' ?

                <g filter="url(#filter60_d_493_3266)">
                    <path d="M191 133.5C191 138.747 186.747 143 181.5 143C176.253 143 172 138.747 172 133.5C172 128.253 176.253 124 181.5 124C186.747 124 191 128.253 191 133.5Z" fill="url(#paint79_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '8' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter61_d_493_3266)">
                        <path d="M192 131C192 137.075 187.075 142 181 142C174.925 142 170 137.075 170 131C170 124.925 174.925 120 181 120C187.075 120 192 124.925 192 131Z" fill="url(#paint80_linear_493_3266)" />
                    </g>
                    <path d="M173.778 137.203C175.356 136.988 177.241 135.439 178.574 134.662C180.276 133.669 179.461 131.382 180.907 130.25C182.402 129.081 184.846 129.531 186.619 129.531C187.719 129.531 188.739 128.906 189.667 128.412C190.605 127.912 190.367 128.221 189.699 128.708C188.793 129.366 187.878 129.983 187.088 130.727C186.364 131.408 185.422 132.869 184.317 132.983C183.266 133.092 182.241 133.331 181.126 133.367C180.483 133.388 179.893 134.247 179.415 134.638C178.209 135.625 176.159 135.877 175.073 136.963" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M181.067 132.983C182.323 132.9 183.726 132.195 184.591 131.329C185.723 130.198 184.11 131.563 183.417 131.891C182.924 132.125 182.35 132.36 181.789 132.36C180.845 132.36 182.013 131.47 182.191 131.113C182.587 130.321 184.142 130.777 184.807 130.777" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {whichHouse === '8' & planet === 'saturn' ?
                <>
                    <path d="M197.313 120.746C199.349 123.367 195.935 130.083 189.687 135.746C183.438 141.409 176.723 143.875 174.687 141.254C172.651 138.633 176.065 131.917 182.313 126.254C188.562 120.591 195.277 118.125 197.313 120.746ZM176.084 139.987C177.869 142.285 183.755 140.123 189.231 135.16C194.708 130.196 197.7 124.31 195.916 122.012C194.131 119.715 188.245 121.877 182.769 126.84C177.292 131.804 174.3 137.69 176.084 139.987Z" fill="url(#paint81_linear_493_3266)" />
                    <g filter="url(#filter62_d_493_3266)">
                        <path d="M194.21 131.761C194.21 136.506 190.65 140.352 186.257 140.352C181.865 140.352 178.304 136.506 178.304 131.761C178.304 127.016 181.865 123.17 186.257 123.17C190.65 123.17 194.21 127.016 194.21 131.761Z" fill="url(#paint82_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '8' & planet === 'node' ?

                <g filter="url(#filter63_d_493_3266)">
                    <path d="M184.723 131.5C184.723 125.977 175.2 123 180.723 123C186.246 123 191.724 124.5 192.723 130.5C193.63 135.948 188.246 140.5 182.723 140.5C177.2 140.5 184.723 137.023 184.723 131.5Z" fill="url(#paint83_linear_493_3266)" />
                </g> : (null)}
            {/* Ninth House =========================================================================================================== */}

            {whichHouse === '9' & planet === 'sun' ?

                <g filter="url(#filter64_d_493_3266)">
                    <path d="M218 149C218 154.523 213.523 159 208 159C202.477 159 198 154.523 198 149C198 143.477 202.477 139 208 139C213.523 139 218 143.477 218 149Z" fill="url(#paint84_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '9' & planet === 'moon' ?

                <g filter="url(#filter65_d_493_3266)">
                    <path d="M218.101 149C218.101 154.523 227.623 157.5 222.101 157.5C216.578 157.5 211.1 156 210.101 150C209.193 144.552 214.578 140 220.101 140C225.623 140 218.101 143.477 218.101 149Z" fill="url(#paint85_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '9' & planet === 'mercury' ?

                <g filter="url(#filter66_d_493_3266)">
                    <circle cx="207.5" cy="149.5" r="7.5" fill="url(#paint86_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '9' & planet === 'venus' ?

                <g filter="url(#filter67_d_493_3266)">
                    <path d="M219 151C219 155.971 214.971 160 210 160C205.029 160 201 155.971 201 151C201 146.029 205.029 142 210 142C214.971 142 219 146.029 219 151Z" fill="url(#paint87_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '9' & planet === 'mars' ?

                <g filter="url(#filter68_d_493_3266)">
                    <path d="M219 150.5C219 155.747 214.747 160 209.5 160C204.253 160 200 155.747 200 150.5C200 145.253 204.253 141 209.5 141C214.747 141 219 145.253 219 150.5Z" fill="url(#paint88_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '9' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter69_d_493_3266)">
                        <path d="M220 148C220 154.075 215.075 159 209 159C202.925 159 198 154.075 198 148C198 141.925 202.925 137 209 137C215.075 137 220 141.925 220 148Z" fill="url(#paint89_linear_493_3266)" />
                    </g>
                    <path d="M201.778 154.203C203.356 153.988 205.241 152.439 206.574 151.662C208.276 150.669 207.461 148.382 208.907 147.25C210.402 146.081 212.846 146.531 214.619 146.531C215.719 146.531 216.739 145.906 217.667 145.412C218.605 144.912 218.367 145.221 217.699 145.708C216.793 146.366 215.878 146.983 215.088 147.727C214.364 148.408 213.422 149.869 212.317 149.983C211.266 150.092 210.241 150.331 209.126 150.367C208.483 150.388 207.893 151.247 207.415 151.638C206.209 152.625 204.159 152.877 203.073 153.963" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M209.067 149.983C210.323 149.9 211.726 149.195 212.591 148.329C213.723 147.198 212.11 148.563 211.417 148.891C210.924 149.125 210.35 149.36 209.789 149.36C208.845 149.36 210.013 148.47 210.191 148.113C210.587 147.321 212.142 147.777 212.807 147.777" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {whichHouse === '9' & planet === 'saturn' ?
                <>
                    <path d="M225.313 137.746C227.349 140.367 223.935 147.083 217.687 152.746C211.438 158.409 204.723 160.875 202.687 158.254C200.651 155.633 204.065 148.917 210.313 143.254C216.562 137.591 223.277 135.125 225.313 137.746ZM204.084 156.987C205.869 159.285 211.755 157.123 217.231 152.16C222.708 147.196 225.7 141.31 223.916 139.012C222.131 136.715 216.245 138.877 210.769 143.84C205.292 148.804 202.3 154.69 204.084 156.987Z" fill="url(#paint90_linear_493_3266)" />
                    <g filter="url(#filter70_d_493_3266)">
                        <path d="M222.21 148.761C222.21 153.506 218.65 157.352 214.257 157.352C209.865 157.352 206.304 153.506 206.304 148.761C206.304 144.016 209.865 140.17 214.257 140.17C218.65 140.17 222.21 144.016 222.21 148.761Z" fill="url(#paint91_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '9' & planet === 'node' ?

                <g filter="url(#filter71_d_493_3266)">
                    <path d="M212.723 148.5C212.723 142.977 203.2 140 208.723 140C214.246 140 219.724 141.5 220.723 147.5C221.63 152.948 216.246 157.5 210.723 157.5C205.2 157.5 212.723 154.023 212.723 148.5Z" fill="url(#paint92_linear_493_3266)" />
                </g> : (null)}
            {/* Tenth House =========================================================================================================== */}
            {whichHouse === '10' & planet === 'sun' ?

                <g filter="url(#filter72_d_493_3266)">
                    <path d="M249 148C249 153.523 244.523 158 239 158C233.477 158 229 153.523 229 148C229 142.477 233.477 138 239 138C244.523 138 249 142.477 249 148Z" fill="url(#paint93_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '10' & planet === 'moon' ?

                <g filter="url(#filter73_d_493_3266)">
                    <path d="M249.101 148C249.101 153.523 258.623 156.5 253.101 156.5C247.578 156.5 242.1 155 241.101 149C240.193 143.552 245.578 139 251.101 139C256.623 139 249.101 142.477 249.101 148Z" fill="url(#paint94_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '10' & planet === 'mercury' ?

                <g filter="url(#filter74_d_493_3266)">
                    <circle cx="238.5" cy="148.5" r="7.5" fill="url(#paint95_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '10' & planet === 'venus' ?

                <g filter="url(#filter75_d_493_3266)">
                    <path d="M250 150C250 154.971 245.971 159 241 159C236.029 159 232 154.971 232 150C232 145.029 236.029 141 241 141C245.971 141 250 145.029 250 150Z" fill="url(#paint96_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '10' & planet === 'mars' ?

                <g filter="url(#filter76_d_493_3266)">
                    <path d="M250 149.5C250 154.747 245.747 159 240.5 159C235.253 159 231 154.747 231 149.5C231 144.253 235.253 140 240.5 140C245.747 140 250 144.253 250 149.5Z" fill="url(#paint97_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '10' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter77_d_493_3266)">
                        <path d="M251 147C251 153.075 246.075 158 240 158C233.925 158 229 153.075 229 147C229 140.925 233.925 136 240 136C246.075 136 251 140.925 251 147Z" fill="url(#paint98_linear_493_3266)" />
                    </g>
                    <path d="M232.778 153.203C234.356 152.988 236.241 151.439 237.574 150.662C239.276 149.669 238.461 147.382 239.907 146.25C241.402 145.081 243.846 145.531 245.619 145.531C246.719 145.531 247.739 144.906 248.667 144.412C249.605 143.912 249.367 144.221 248.699 144.708C247.793 145.366 246.878 145.983 246.088 146.727C245.364 147.408 244.422 148.869 243.317 148.983C242.266 149.092 241.241 149.331 240.126 149.367C239.483 149.388 238.893 150.247 238.415 150.638C237.209 151.625 235.159 151.877 234.073 152.963" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M240.067 148.983C241.323 148.9 242.726 148.195 243.591 147.329C244.723 146.198 243.11 147.563 242.417 147.891C241.924 148.125 241.35 148.36 240.789 148.36C239.845 148.36 241.013 147.47 241.191 147.113C241.587 146.321 243.142 146.777 243.807 146.777" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {whichHouse === '10' & planet === 'saturn' ?
                <>
                    <path d="M256.313 136.746C258.349 139.367 254.935 146.083 248.687 151.746C242.438 157.409 235.723 159.875 233.687 157.254C231.651 154.633 235.065 147.917 241.313 142.254C247.562 136.591 254.277 134.125 256.313 136.746ZM235.084 155.987C236.869 158.285 242.755 156.123 248.231 151.16C253.708 146.196 256.7 140.31 254.916 138.012C253.131 135.715 247.245 137.877 241.769 142.84C236.292 147.804 233.3 153.69 235.084 155.987Z" fill="url(#paint99_linear_493_3266)" />
                    <g filter="url(#filter78_d_493_3266)">
                        <path d="M253.21 147.761C253.21 152.506 249.65 156.352 245.257 156.352C240.865 156.352 237.304 152.506 237.304 147.761C237.304 143.016 240.865 139.17 245.257 139.17C249.65 139.17 253.21 143.016 253.21 147.761Z" fill="url(#paint100_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '10' & planet === 'node' ?

                <g filter="url(#filter79_d_493_3266)">
                    <path d="M243.723 147.5C243.723 141.977 234.2 139 239.723 139C245.246 139 250.724 140.5 251.723 146.5C252.63 151.948 247.246 156.5 241.723 156.5C236.2 156.5 243.723 153.023 243.723 147.5Z" fill="url(#paint101_linear_493_3266)" />
                </g> : (null)}
            {/* Eleventh House =========================================================================================================== */}
            {whichHouse === '11' & planet === 'sun' ?

                <g filter="url(#filter80_d_493_3266)">
                    <path d="M275 132C275 137.523 270.523 142 265 142C259.477 142 255 137.523 255 132C255 126.477 259.477 122 265 122C270.523 122 275 126.477 275 132Z" fill="url(#paint102_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '11' & planet === 'moon' ?

                <g filter="url(#filter81_d_493_3266)">
                    <path d="M275.101 132C275.101 137.523 284.623 140.5 279.101 140.5C273.578 140.5 268.1 139 267.101 133C266.193 127.552 271.578 123 277.101 123C282.623 123 275.101 126.477 275.101 132Z" fill="url(#paint103_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '11' & planet === 'mercury' ?

                <g filter="url(#filter82_d_493_3266)">
                    <circle cx="264.5" cy="132.5" r="7.5" fill="url(#paint104_linear_493_3266)" />
                </g> : (null)}
            {whichHouse === '11' & planet === 'venus' ?

                <g filter="url(#filter83_d_493_3266)">
                    <path d="M276 134C276 138.971 271.971 143 267 143C262.029 143 258 138.971 258 134C258 129.029 262.029 125 267 125C271.971 125 276 129.029 276 134Z" fill="url(#paint105_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '11' & planet === 'mars' ?

                <g filter="url(#filter84_d_493_3266)">
                    <path d="M276 133.5C276 138.747 271.747 143 266.5 143C261.253 143 257 138.747 257 133.5C257 128.253 261.253 124 266.5 124C271.747 124 276 128.253 276 133.5Z" fill="url(#paint106_radial_493_3266)" />
                </g> : (null)}
            {whichHouse === '11' & planet === 'jupiter' ?
                <>
                    <g filter="url(#filter85_d_493_3266)">
                        <path d="M277 131C277 137.075 272.075 142 266 142C259.925 142 255 137.075 255 131C255 124.925 259.925 120 266 120C272.075 120 277 124.925 277 131Z" fill="url(#paint107_linear_493_3266)" />
                    </g>
                    <path d="M258.778 137.203C260.356 136.988 262.241 135.439 263.574 134.662C265.276 133.669 264.461 131.382 265.907 130.25C267.402 129.081 269.846 129.531 271.619 129.531C272.719 129.531 273.739 128.906 274.667 128.412C275.605 127.912 275.367 128.221 274.699 128.708C273.793 129.366 272.878 129.983 272.088 130.727C271.364 131.408 270.422 132.869 269.317 132.983C268.266 133.092 267.241 133.331 266.126 133.367C265.483 133.388 264.893 134.247 264.415 134.638C263.209 135.625 261.159 135.877 260.073 136.963" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M266.067 132.983C267.323 132.9 268.726 132.195 269.591 131.329C270.723 130.198 269.11 131.563 268.417 131.891C267.924 132.125 267.35 132.36 266.789 132.36C265.845 132.36 267.013 131.47 267.191 131.113C267.587 130.321 269.142 130.777 269.807 130.777" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}

            {whichHouse === '11' & planet === 'saturn' ?
                <>
                    <path d="M282.313 120.746C284.349 123.367 280.935 130.083 274.687 135.746C268.438 141.409 261.723 143.875 259.687 141.254C257.651 138.633 261.065 131.917 267.313 126.254C273.562 120.591 280.277 118.125 282.313 120.746ZM261.084 139.987C262.869 142.285 268.755 140.123 274.231 135.16C279.708 130.196 282.7 124.31 280.916 122.012C279.131 119.715 273.245 121.877 267.769 126.84C262.292 131.804 259.3 137.69 261.084 139.987Z" fill="url(#paint108_linear_493_3266)" />
                    <g filter="url(#filter86_d_493_3266)">
                        <path d="M279.21 131.761C279.21 136.506 275.65 140.352 271.257 140.352C266.865 140.352 263.304 136.506 263.304 131.761C263.304 127.016 266.865 123.17 271.257 123.17C275.65 123.17 279.21 127.016 279.21 131.761Z" fill="url(#paint109_radial_493_3266)" />
                    </g>
                </> : (null)}
            {whichHouse === '11' & planet === 'node' ?

                <g filter="url(#filter87_d_493_3266)">
                    <path d="M269.723 131.5C269.723 125.977 260.2 123 265.723 123C271.246 123 276.724 124.5 277.723 130.5C278.63 135.948 273.246 140.5 267.723 140.5C262.2 140.5 269.723 137.023 269.723 131.5Z" fill="url(#paint110_linear_493_3266)" />
                </g> : (null)}


            {/* Twelfth House =========================================================================================================== */}
            {/* ----- Sun----------------- */}
            {whichHouse === '12' & planet === 'sun' ?

                <g filter="url(#filter88_d_493_3266)">
                    <path d="M288 102C288 107.523 283.523 112 278 112C272.477 112 268 107.523 268 102C268 96.4772 272.477 92 278 92C283.523 92 288 96.4772 288 102Z" fill="url(#paint111_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Sun----------------- */}
            {whichHouse === '12' & planet === 'moon' ?

                <g filter="url(#filter89_d_493_3266)">
                    <path d="M288.101 102C288.101 107.523 297.623 110.5 292.101 110.5C286.578 110.5 281.1 109 280.101 103C279.193 97.5522 284.578 93 290.101 93C295.623 93 288.101 96.4772 288.101 102Z" fill="url(#paint112_linear_493_3266)" />
                </g> : (null)}
            {/* ----- mercury----------------- */}
            {whichHouse === '12' & planet === 'mercury' ?

                <g filter="url(#filter90_d_493_3266)">
                    <circle cx="277.5" cy="102.5" r="7.5" fill="url(#paint113_linear_493_3266)" />
                </g> : (null)}
            {/* ----- Venus----------------- */}
            {whichHouse === '12' & planet === 'venus' ?

                <g filter="url(#filter91_d_493_3266)">
                    <path d="M289 104C289 108.971 284.971 113 280 113C275.029 113 271 108.971 271 104C271 99.0294 275.029 95 280 95C284.971 95 289 99.0294 289 104Z" fill="url(#paint114_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Mars----------------- */}
            {whichHouse === '12' & planet === 'mars' ?

                <g filter="url(#filter92_d_493_3266)">
                    <path d="M289 103.5C289 108.747 284.747 113 279.5 113C274.253 113 270 108.747 270 103.5C270 98.2533 274.253 94 279.5 94C284.747 94 289 98.2533 289 103.5Z" fill="url(#paint115_radial_493_3266)" />
                </g> : (null)}
            {/* ----- Jupiter----------------- */}
            {whichHouse === '12' & planet === 'jupiter' ?

                <>
                    <g filter="url(#filter93_d_493_3266)">
                        <path d="M290 101C290 107.075 285.075 112 279 112C272.925 112 268 107.075 268 101C268 94.9249 272.925 90 279 90C285.075 90 290 94.9249 290 101Z" fill="url(#paint116_linear_493_3266)" />
                    </g>
                    <path d="M271.778 107.203C273.356 106.988 275.241 105.439 276.574 104.662C278.276 103.669 277.461 101.382 278.907 100.25C280.402 99.0806 282.846 99.5307 284.619 99.5307C285.719 99.5307 286.739 98.906 287.667 98.4118C288.605 97.9123 288.367 98.2213 287.699 98.7075C286.793 99.3659 285.878 99.9833 285.088 100.727C284.364 101.408 283.422 102.869 282.317 102.983C281.266 103.092 280.241 103.331 279.126 103.367C278.483 103.388 277.893 104.247 277.415 104.638C276.209 105.625 274.159 105.877 273.073 106.963" stroke="#D99848" stroke-opacity="0.68" stroke-width="2" stroke-linecap="square" />
                    <path d="M279.067 102.983C280.323 102.9 281.726 102.195 282.591 101.329C283.723 100.198 282.11 101.563 281.417 101.891C280.924 102.125 280.35 102.36 279.789 102.36C278.845 102.36 280.013 101.47 280.191 101.113C280.587 100.321 282.142 100.777 282.807 100.777" stroke="#D96248" stroke-opacity="0.66" stroke-width="2" stroke-linecap="square" />
                </> : (null)}
            {/* ----- Saturn----------------- */}
            {whichHouse === '12' & planet === 'saturn' ?

                <>
                    <path d="M295.313 90.7458C297.349 93.3668 293.935 100.083 287.687 105.746C281.438 111.409 274.723 113.875 272.687 111.254C270.651 108.633 274.065 101.917 280.313 96.2541C286.562 90.5909 293.277 88.1247 295.313 90.7458ZM274.084 109.987C275.869 112.285 281.755 110.123 287.231 105.16C292.708 100.196 295.7 94.3097 293.916 92.0124C292.131 89.7152 286.245 91.8767 280.769 96.8404C275.292 101.804 272.3 107.69 274.084 109.987Z" fill="url(#paint117_linear_493_3266)" />
                    <g filter="url(#filter94_d_493_3266)">
                        <path d="M292.21 101.761C292.21 106.506 288.65 110.352 284.257 110.352C279.865 110.352 276.304 106.506 276.304 101.761C276.304 97.0163 279.865 93.1699 284.257 93.1699C288.65 93.1699 292.21 97.0163 292.21 101.761Z" fill="url(#paint118_radial_493_3266)" />
                    </g>
                </> : (null)}
            {/* ----- Node----------------- */}
            {whichHouse === '12' & planet === 'node' ?

                <g filter="url(#filter95_d_493_3266)">
                    <path d="M282.723 101.5C282.723 95.9772 273.2 93 278.723 93C284.246 93 289.724 94.5 290.723 100.5C291.63 105.948 286.246 110.5 280.723 110.5C275.2 110.5 282.723 107.023 282.723 101.5Z" fill="url(#paint119_linear_493_3266)" />
                </g>
                : (null)}

            {/* =========================================================================================================== */}

            <defs>
                <filter id="filter0_d_493_3266" x="5" y="64" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter1_d_493_3266" x="17" y="65" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter2_d_493_3266" x="7" y="67" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter3_d_493_3266" x="8" y="67" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter4_d_493_3266" x="7" y="66" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter5_d_493_3266" x="5" y="62" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter6_d_493_3266" x="13.3037" y="65.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter7_d_493_3266" x="14" y="65" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter8_d_493_3266" x="20" y="35" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter9_d_493_3266" x="32" y="36" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter10_d_493_3266" x="22" y="38" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter11_d_493_3266" x="23" y="38" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter12_d_493_3266" x="22" y="37" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter13_d_493_3266" x="20" y="33" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter14_d_493_3266" x="28.3037" y="36.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter15_d_493_3266" x="29" y="36" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter16_d_493_3266" x="46" y="20" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter17_d_493_3266" x="58" y="21" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter18_d_493_3266" x="48" y="23" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter19_d_493_3266" x="49" y="23" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter20_d_493_3266" x="48" y="22" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter21_d_493_3266" x="46" y="18" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter22_d_493_3266" x="54.3037" y="21.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter23_d_493_3266" x="55" y="21" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter24_d_493_3266" x="77" y="20" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter25_d_493_3266" x="89" y="21" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter26_d_493_3266" x="79" y="23" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter27_d_493_3266" x="80" y="23" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter28_d_493_3266" x="79" y="22" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter29_d_493_3266" x="77" y="18" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter30_d_493_3266" x="85.3037" y="21.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter31_d_493_3266" x="86" y="21" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter32_d_493_3266" x="103" y="36" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter33_d_493_3266" x="115" y="37" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter34_d_493_3266" x="105" y="39" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter35_d_493_3266" x="106" y="39" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter36_d_493_3266" x="105" y="38" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter37_d_493_3266" x="103" y="34" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter38_d_493_3266" x="111.304" y="37.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter39_d_493_3266" x="112" y="37" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter40_d_493_3266" x="113" y="64" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter41_d_493_3266" x="125" y="65" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter42_d_493_3266" x="115" y="67" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter43_d_493_3266" x="116" y="67" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter44_d_493_3266" x="115" y="66" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter45_d_493_3266" x="113" y="62" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter46_d_493_3266" x="121.304" y="65.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter47_d_493_3266" x="122" y="65" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter48_d_493_3266" x="152" y="93" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter49_d_493_3266" x="164" y="94" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter50_d_493_3266" x="154" y="96" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter51_d_493_3266" x="155" y="96" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter52_d_493_3266" x="154" y="95" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter53_d_493_3266" x="152" y="91" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter54_d_493_3266" x="160.304" y="94.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter55_d_493_3266" x="161" y="94" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter56_d_493_3266" x="168" y="122" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter57_d_493_3266" x="180" y="123" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter58_d_493_3266" x="170" y="125" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter59_d_493_3266" x="171" y="125" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter60_d_493_3266" x="170" y="124" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter61_d_493_3266" x="168" y="120" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter62_d_493_3266" x="176.304" y="123.17" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter63_d_493_3266" x="177" y="123" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter64_d_493_3266" x="196" y="139" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter65_d_493_3266" x="208" y="140" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter66_d_493_3266" x="198" y="142" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter67_d_493_3266" x="199" y="142" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter68_d_493_3266" x="198" y="141" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter69_d_493_3266" x="196" y="137" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter70_d_493_3266" x="204.304" y="140.17" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter71_d_493_3266" x="205" y="140" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter72_d_493_3266" x="227" y="138" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter73_d_493_3266" x="239" y="139" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter74_d_493_3266" x="229" y="141" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter75_d_493_3266" x="230" y="141" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter76_d_493_3266" x="229" y="140" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter77_d_493_3266" x="227" y="136" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter78_d_493_3266" x="235.304" y="139.17" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter79_d_493_3266" x="236" y="139" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter80_d_493_3266" x="253" y="122" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter81_d_493_3266" x="265" y="123" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter82_d_493_3266" x="255" y="125" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter83_d_493_3266" x="256" y="125" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter84_d_493_3266" x="255" y="124" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter85_d_493_3266" x="253" y="120" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter86_d_493_3266" x="261.304" y="123.17" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter87_d_493_3266" x="262" y="123" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter88_d_493_3266" x="266" y="92" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter89_d_493_3266" x="278" y="93" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter90_d_493_3266" x="268" y="95" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter91_d_493_3266" x="269" y="95" width="20" height="20" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter92_d_493_3266" x="268" y="94" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter93_d_493_3266" x="266" y="90" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter94_d_493_3266" x="274.304" y="93.1699" width="17.9067" height="19.182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <filter id="filter95_d_493_3266" x="275" y="93" width="15.8232" height="19.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_3266" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_3266" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_493_3266" x1="58" y1="48.5764" x2="16.9773" y2="97.0927" gradientUnits="userSpaceOnUse">
                    {/* <stop offset="0.00124763" stop-color="#690000" /> */}
                    <stop offset="0.00124763" stop-color={lagnaColorCodes[lagnaSign]?.firstHouse?.color1} />
                    <stop offset="0.839821" stop-color={lagnaColorCodes[lagnaSign]?.firstHouse?.color2} />
                    {/* <stop offset="0.839821" stop-color="#FF0000" /> */}
                </linearGradient>
                <linearGradient id="paint1_linear_493_3266" x1="12.3821" y1="47.9076" x2="108.914" y2="45.4328" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0749723" stop-color={lagnaColorCodes[lagnaSign]?.thirdHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.thirdHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint2_linear_493_3266" x1="66.9152" y1="30.8904" x2="120.823" y2="57.5392" gradientUnits="userSpaceOnUse">
                    <stop offset="0.124226" stop-color={lagnaColorCodes[lagnaSign]?.fourthHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.fourthHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint3_linear_493_3266" x1="74.1971" y1="42.3211" x2="159.73" y2="151.739" gradientUnits="userSpaceOnUse">
                    <stop stop-color={lagnaColorCodes[lagnaSign]?.fifthHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.fifthHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint4_linear_493_3266" x1="41.0548" y1="77.2006" x2="75.6462" y2="52.2403" gradientUnits="userSpaceOnUse">
                    <stop stop-color={lagnaColorCodes[lagnaSign]?.secondHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.secondHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint5_linear_493_3266" x1="178.208" y1="53.2721" x2="210.79" y2="150.911" gradientUnits="userSpaceOnUse">
                    <stop offset="0.172155" stop-color={lagnaColorCodes[lagnaSign]?.seventhHouse?.color1} />
                    <stop offset="0.906205" stop-color={lagnaColorCodes[lagnaSign]?.seventhHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint6_linear_493_3266" x1="239.279" y1="137.016" x2="192.681" y2="119.673" gradientUnits="userSpaceOnUse">
                    <stop stop-color={lagnaColorCodes[lagnaSign]?.ninthHouse?.color1} />
                    <stop offset="0.800118" stop-color={lagnaColorCodes[lagnaSign]?.ninthHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint7_linear_493_3266" x1="221" y1="134.363" x2="259.53" y2="124.375" gradientUnits="userSpaceOnUse">
                    <stop stop-color={lagnaColorCodes[lagnaSign]?.tenthHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.tenthHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint8_linear_493_3266" x1="281.299" y1="96.6794" x2="246.298" y2="126.823" gradientUnits="userSpaceOnUse">
                    <stop offset="0.111335" stop-color={lagnaColorCodes[lagnaSign]?.eleventhHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.eleventhHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint9_linear_493_3266" x1="173.023" y1="95.2189" x2="244.021" y2="140.354" gradientUnits="userSpaceOnUse">
                    <stop stop-color={lagnaColorCodes[lagnaSign]?.eighthHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.eighthHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint10_linear_493_3266" x1="263.667" y1="111.833" x2="267.087" y2="84.656" gradientUnits="userSpaceOnUse">
                    <stop stop-color={lagnaColorCodes[lagnaSign]?.twelfthHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.twelfthHouse?.color2} />
                </linearGradient>
                <linearGradient id="paint11_linear_493_3266" x1="117.167" y1="40.0784" x2="141.31" y2="111.969" gradientUnits="userSpaceOnUse">
                    <stop offset="0.116908" stop-color={lagnaColorCodes[lagnaSign]?.sixthHouse?.color1} />
                    <stop offset="1" stop-color={lagnaColorCodes[lagnaSign]?.sixthHouse?.color2} />
                </linearGradient>
                <radialGradient id="paint12_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.3583e-06 59.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint13_linear_493_3266" x1="17.5996" y1="74" x2="36.0996" y2="77.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint14_linear_493_3266" x1="12" y1="69.25" x2="19.875" y2="80.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint15_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.100002 67) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint16_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.325 68.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint17_linear_493_3266" x1="11" y1="64" x2="21.85" y2="82.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint18_linear_493_3266" x1="19.3134" y1="68.2541" x2="27.3618" y2="77.1339" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint19_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.9189 67.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint20_linear_493_3266" x1="31.2236" y1="73.5" x2="12.7236" y2="70" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint21_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 30.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint22_linear_493_3266" x1="32.5996" y1="45" x2="51.0996" y2="48.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint23_linear_493_3266" x1="27" y1="40.25" x2="34.875" y2="51.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint24_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.1 38) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint25_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.325 39.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint26_linear_493_3266" x1="26" y1="35" x2="36.85" y2="53.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint27_linear_493_3266" x1="34.3134" y1="39.2541" x2="42.3618" y2="48.1339" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint28_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.9189 38.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint29_linear_493_3266" x1="46.2236" y1="44.5" x2="27.7236" y2="41" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint30_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41 15.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint31_linear_493_3266" x1="58.5996" y1="30" x2="77.0996" y2="33.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint32_linear_493_3266" x1="53" y1="25.25" x2="60.875" y2="36.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint33_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.1 23) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint34_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(53.325 24.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint35_linear_493_3266" x1="52" y1="20" x2="62.85" y2="38.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint36_linear_493_3266" x1="60.3134" y1="24.2541" x2="68.3618" y2="33.1339" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint37_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.9189 23.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint38_linear_493_3266" x1="72.2236" y1="29.5" x2="53.7236" y2="26" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint39_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72 15.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint40_linear_493_3266" x1="89.5996" y1="30" x2="108.1" y2="33.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint41_linear_493_3266" x1="84" y1="25.25" x2="91.875" y2="36.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint42_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72.1 23) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint43_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(84.325 24.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint44_linear_493_3266" x1="83" y1="20" x2="93.85" y2="38.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint45_linear_493_3266" x1="91.3134" y1="24.2541" x2="99.3618" y2="33.1339" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint46_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(90.9189 23.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint47_linear_493_3266" x1="103.224" y1="29.5" x2="84.7236" y2="26" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint48_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98 31.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint49_linear_493_3266" x1="115.6" y1="46" x2="134.1" y2="49.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint50_linear_493_3266" x1="110" y1="41.25" x2="117.875" y2="52.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint51_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.1 39) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint52_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(110.325 40.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint53_linear_493_3266" x1="109" y1="36" x2="119.85" y2="54.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint54_linear_493_3266" x1="117.313" y1="40.2541" x2="125.362" y2="49.1339" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint55_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(116.919 39.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint56_linear_493_3266" x1="129.224" y1="45.5" x2="110.724" y2="42" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint57_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108 59.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint58_linear_493_3266" x1="125.6" y1="74" x2="144.1" y2="77.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint59_linear_493_3266" x1="120" y1="69.25" x2="127.875" y2="80.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint60_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108.1 67) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint61_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120.325 68.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint62_linear_493_3266" x1="119" y1="64" x2="129.85" y2="82.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint63_linear_493_3266" x1="127.313" y1="68.2541" x2="135.362" y2="77.1339" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint64_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(126.919 67.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint65_linear_493_3266" x1="139.224" y1="73.5" x2="120.724" y2="70" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint66_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(147 88.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint67_linear_493_3266" x1="164.6" y1="103" x2="183.1" y2="106.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint68_linear_493_3266" x1="159" y1="98.25" x2="166.875" y2="109.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint69_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(147.1 96) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint70_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(159.325 97.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint71_linear_493_3266" x1="158" y1="93" x2="168.85" y2="111.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint72_linear_493_3266" x1="166.313" y1="97.2541" x2="174.362" y2="106.134" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint73_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.919 96.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint74_linear_493_3266" x1="178.224" y1="102.5" x2="159.724" y2="99" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint75_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163 117.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint76_linear_493_3266" x1="180.6" y1="132" x2="199.1" y2="135.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint77_linear_493_3266" x1="175" y1="127.25" x2="182.875" y2="138.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint78_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.1 125) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint79_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(175.325 126.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint80_linear_493_3266" x1="174" y1="122" x2="184.85" y2="140.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint81_linear_493_3266" x1="182.313" y1="126.254" x2="190.362" y2="135.134" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint82_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(181.919 125.122) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint83_linear_493_3266" x1="194.224" y1="131.5" x2="175.724" y2="128" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint84_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(191 134.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint85_linear_493_3266" x1="208.6" y1="149" x2="227.1" y2="152.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint86_linear_493_3266" x1="203" y1="144.25" x2="210.875" y2="155.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint87_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(191.1 142) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint88_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(203.325 143.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint89_linear_493_3266" x1="202" y1="139" x2="212.85" y2="157.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint90_linear_493_3266" x1="210.313" y1="143.254" x2="218.362" y2="152.134" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint91_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(209.919 142.122) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint92_linear_493_3266" x1="222.224" y1="148.5" x2="203.724" y2="145" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint93_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(222 133.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint94_linear_493_3266" x1="239.6" y1="148" x2="258.1" y2="151.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint95_linear_493_3266" x1="234" y1="143.25" x2="241.875" y2="154.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint96_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(222.1 141) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint97_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(234.325 142.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint98_linear_493_3266" x1="233" y1="138" x2="243.85" y2="156.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint99_linear_493_3266" x1="241.313" y1="142.254" x2="249.362" y2="151.134" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint100_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(240.919 141.122) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint101_linear_493_3266" x1="253.224" y1="147.5" x2="234.724" y2="144" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint102_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248 117.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint103_linear_493_3266" x1="265.6" y1="132" x2="284.1" y2="135.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint104_linear_493_3266" x1="260" y1="127.25" x2="267.875" y2="138.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint105_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.1 125) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint106_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260.325 126.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint107_linear_493_3266" x1="259" y1="122" x2="269.85" y2="140.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint108_linear_493_3266" x1="267.313" y1="126.254" x2="275.362" y2="135.134" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint109_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(266.919 125.122) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint110_linear_493_3266" x1="279.224" y1="131.5" x2="260.724" y2="128" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
                <radialGradient id="paint111_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(261 87.5) rotate(47.3373) scale(34.6771 57.8055)">
                    <stop offset="0.291" stop-color="#FFC700" />
                    <stop offset="0.578871" stop-color="#E7C755" />
                    <stop offset="0.931" stop-color="#FF8A00" />
                </radialGradient>
                <linearGradient id="paint112_linear_493_3266" x1="278.6" y1="102" x2="297.1" y2="105.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.163291" stop-color="white" />
                    <stop offset="0.45031" stop-color="#D4DBE8" />
                    <stop offset="0.589666" stop-color="#ACBEC2" />
                </linearGradient>
                <linearGradient id="paint113_linear_493_3266" x1="273" y1="97.25" x2="280.875" y2="108.875" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.26403" stop-color="#B7BCCB" />
                    <stop offset="0.591642" stop-color="#676F8F" />
                    <stop offset="0.934374" stop-color="#161616" />
                </linearGradient>
                <radialGradient id="paint114_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(261.1 95) rotate(40.5328) scale(40.8535 68.1012)">
                    <stop offset="0.216914" stop-color="#FFECD3" />
                    <stop offset="0.478505" stop-color="#D17900" />
                    <stop offset="0.746562" stop-color="#211301" />
                </radialGradient>
                <radialGradient id="paint115_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(273.325 96.85) rotate(57.1715) scale(17.5236 29.2112)">
                    <stop offset="0.0792596" stop-color="#FA5936" />
                    <stop offset="0.423948" stop-color="#DE0000" />
                    <stop offset="1" stop-color="#970707" />
                </radialGradient>
                <linearGradient id="paint116_linear_493_3266" x1="272" y1="92" x2="282.85" y2="110.35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EA9D3F" />
                    <stop offset="0.325367" stop-color="#F2C691" />
                    <stop offset="0.635137" stop-color="#DC9D4E" />
                    <stop offset="0.877246" stop-color="#F0C38C" />
                </linearGradient>
                <linearGradient id="paint117_linear_493_3266" x1="280.313" y1="96.2541" x2="288.362" y2="105.134" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CB6011" />
                    <stop offset="1" stop-color="#572601" />
                </linearGradient>
                <radialGradient id="paint118_radial_493_3266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(279.919 95.1224) rotate(62.9393) scale(15.6547 24.9927)">
                    <stop offset="0.198935" stop-color="#EBB574" />
                    <stop offset="0.589487" stop-color="#864D23" />
                    <stop offset="0.906637" stop-color="#957E5C" />
                </radialGradient>
                <linearGradient id="paint119_linear_493_3266" x1="292.224" y1="101.5" x2="273.724" y2="98" gradientUnits="userSpaceOnUse">
                    <stop offset="0.321" stop-color="#2F3D3E" />
                    <stop offset="0.581" stop-color="#5D6573" />
                    <stop offset="0.921" stop-color="#ACBEC2" />
                </linearGradient>
            </defs>
        </svg>

    )
}




