import axios from "axios"
import { useEffect, useState } from "react"
import astroServer from "../constants/url"
import { checkPlanetStrength } from "../util/checkPlanetStrength"
import { useRouter } from "next/router";

//============================================================
const ge = {
    capricorn: 'male'
}
const me = {
    capricorn: 'male'
}
export default function Test() {
    const router = useRouter();
    const data = router.query
    console.log('data ---------------',data);

    //============================================================
    const [planet, setPlanet] = useState({})
    const [house, setHouse] = useState({})
    const [currentTransit, setCurrentTransit] = useState({})
    //============================================================

    useEffect(() => {
        astroServer.get('/user/get').then(res => {
            // console.log(res.data[0].planets[0]);
            setPlanet(res?.data[0]?.planets[0]);
            setHouse(res?.data[0]?.houses[0]);
        }),
            astroServer.post('/almanac/get', {
                "date": "2024-1-3",
                "time": "11:43"
            }).then(res => {
                setCurrentTransit(res?.data?.data)
            })
    }, [])
    // console.log(currentTransit[4].position.name);
   
    //============================================================

    const planet_any = 'mars'
    const lagna = 'aries'
    const planetSign = 'gemini'

    const planetAspect = 'aries'
    //============================================================

    let planetaryPerformanceStrength = checkPlanetStrength(planet_any, lagna, planetSign)
    let planetaryAspect = house.rashi
    // console.log('planetaryPerformanceStrength ----', planetaryPerformanceStrength.aspect[planetAspect]);
    let x = planetaryPerformanceStrength.aspect[planetAspect]

    let obj = {
        planetaryAspect: `planetary aspect is : ${ge[planetaryAspect]} and is ${x} ${planetAspect}`,
        planetaryPerformanceStrength: `the strength of the house @ which the planet is deposited is ${planetaryPerformanceStrength?.planetStrength}`,
        planetaryIntent: `the house rashi is in : ${house.rashi}`,
        planetaryIntention: `planeatary-house rulership is : ${planet.rulerOf}`,
    }
    // console.log('obj  ----', obj);

    let color = 'red'

    return (
        // =============== VIEW ===========================
        <div>
            <svg width="922" height="451" viewBox="0 0 922 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M472 225C472 195.453 466.18 166.194 454.873 138.896C443.566 111.598 426.992 86.7942 406.099 65.901C385.206 45.0078 360.402 28.4344 333.104 17.1271C305.806 5.81979 276.547 -1.29156e-06 247 0C217.453 1.29156e-06 188.194 5.8198 160.896 17.1271C133.598 28.4344 108.794 45.0078 87.901 65.901C67.0078 86.7942 50.4344 111.598 39.1271 138.896C27.8198 166.195 22 195.453 22 225L247 225H472Z" fill="#D9D9D9" />
                <path d="M922 226C922 255.547 916.18 284.806 904.873 312.104C893.566 339.402 876.992 364.206 856.099 385.099C835.206 405.992 810.402 422.566 783.104 433.873C755.806 445.18 726.547 451 697 451C667.453 451 638.194 445.18 610.896 433.873C583.598 422.566 558.794 405.992 537.901 385.099C517.008 364.206 500.434 339.402 489.127 312.104C477.82 284.805 472 255.547 472 226L697 226H922Z" fill="#D9D9D9" />
                <g filter="url(#filter0_d_374_13)">
                    <rect x="247" width="5" height="226" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter1_d_374_13)">
                    <rect x="358.835" y="28.8891" width="5" height="226" transform="rotate(30 358.835 28.8891)" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter2_d_374_13)">
                    <rect x="247.889" y="226.665" width="5" height="226" transform="rotate(-120 247.889 226.665)" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter3_d_374_13)">
                    <rect x="134.835" y="30.3891" width="5" height="226" transform="rotate(-30 134.835 30.3891)" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter4_d_374_13)">
                    <rect x="55.3892" y="113.665" width="5" height="226" transform="rotate(-60 55.3892 113.665)" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter5_d_374_13)">
                    <path d="M51.5108 114.409C51.7785 113.911 52.4043 113.734 52.8927 114.017L245.65 225.75L22.4707 224.755C21.8733 224.752 21.4115 224.23 21.4822 223.637L25.7864 187.492C26.2615 183.503 27.0327 179.554 28.0937 175.679L35.5651 148.393C37.1831 142.483 39.4665 136.777 42.3713 131.382L51.5108 114.409Z" fill="url(#paint0_linear_374_13)" />
                </g>
                <g filter="url(#filter6_d_374_13)">
                    <path d="M471.974 225.068C471.991 225.632 471.538 226.098 470.973 226.097L248.174 225.713L441.951 114.985C442.469 114.688 443.13 114.91 443.366 115.459L457.71 148.913C459.294 152.605 460.6 156.411 461.619 160.297L468.792 187.664C470.345 193.59 471.221 199.674 471.403 205.798L471.974 225.068Z" fill="url(#paint1_linear_374_13)" />
                </g>
                <g filter="url(#filter7_d_374_13)">
                    <circle cx="18" cy="210" r="15" fill="#F7FF9B" />
                </g>
                <g filter="url(#filter8_d_374_13)">
                    <circle cx="70" cy="107" r="15" fill="#F7FF9B" />
                </g>
                <defs>
                    <filter id="filter0_d_374_13" x="243" y="0" width="13" height="234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter1_d_374_13" x="241.835" y="28.8891" width="125.33" height="206.222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter2_d_374_13" x="241.389" y="109.335" width="206.222" height="125.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter3_d_374_13" x="130.835" y="27.8891" width="125.33" height="206.222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter4_d_374_13" x="51.3892" y="109.335" width="206.222" height="125.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter5_d_374_13" x="17.4751" y="109.882" width="232.175" height="119.868" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.76934 0 0 0 0 0.348108 0 0 0 0 0.348108 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter6_d_374_13" x="243.174" y="110.853" width="231.801" height="119.245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="-1" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.76934 0 0 0 0 0.348108 0 0 0 0 0.348108 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter7_d_374_13" x="0" y="193" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_374_13" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <filter id="filter8_d_374_13" x="52" y="90" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_374_13" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_374_13" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_374_13" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_374_13" x1="72" y1="155.5" x2="73" y2="253.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0.166881" stop-color="#F84C4C" />
                        <stop offset="1" stop-color="#6E2727" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_374_13" x1="353" y1="270.5" x2="345.299" y2="169.638" gradientUnits="userSpaceOnUse">
                        <stop offset="0.547843" stop-color="#2B2263" />
                        <stop offset="0.911367" stop-color="#443985" />
                    </linearGradient>
                </defs>
            </svg>



        </div>

    )
}