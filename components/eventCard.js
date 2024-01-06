import { useState } from "react"

export const EventCard = (props) => {

    return (
        <div className='center mt'>
            <div class="eventCard">
                <svg width="900" height="502" viewBox="0 0 900 502" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M450 251C450 221.453 444.18 192.194 432.873 164.896C421.566 137.598 404.992 112.794 384.099 91.901C363.206 71.0078 338.402 54.4344 311.104 43.1271C283.806 31.8198 254.547 26 225 26C195.453 26 166.194 31.8198 138.896 43.1271C111.598 54.4344 86.7941 71.0078 65.901 91.901C45.0078 112.794 28.4344 137.598 17.1271 164.896C5.81979 192.195 -2.58312e-06 221.453 0 251L225 251H450Z" fill="#D9D9D9" />
                    <g filter="url(#filter0_d_383_87)">
                        <rect x="225" y="26" width="5" height="226" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter1_d_383_87)">
                        <rect x="337.835" y="56.8891" width="5" height="226" transform="rotate(30 337.835 56.8891)" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter2_d_383_87)">
                        <rect x="225.889" y="252.665" width="5" height="226" transform="rotate(-120 225.889 252.665)" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter3_d_383_87)">
                        <rect x="112.835" y="56.3891" width="5" height="226" transform="rotate(-30 112.835 56.3891)" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter4_d_383_87)">
                        <rect x="33.3892" y="139.665" width="5" height="226" transform="rotate(-60 33.3892 139.665)" fill="#D9D9D9" />
                    </g>
                    <path d="M30 139L225.583 251.25L0 251V244L0.5 237L2 222.5L4.5 208L6 200.5L9 189L11 181L14.5 172L21.5 155.5L30 139Z" fill="#FB4B4B" />
                    <path d="M226.211 25.9808L226.792 251.486L114.217 56L120.279 52.5L126.591 49.433L139.898 43.4821L153.706 38.3971L160.951 35.9462L172.41 32.7942L180.338 30.5263L189.883 29.0574L207.672 26.8695L226.211 25.9808Z" fill="#F7FB4B" />
                    <path d="M339 56.9224L227 252L227.249 27H234.234L241.218 27.4987L255.686 28.9948L270.154 31.4884L277.637 32.9845L289.111 35.9767L297.094 37.9716L306.073 41.4625L322.537 48.4444L339 56.9224Z" fill="#4BFB5D" />
                    <path d="M422.003 140.106L227 253.361L340.008 58.125L346.07 61.625L351.882 65.558L363.69 74.1071L374.997 83.5221L380.742 88.5712L389.202 96.9192L395.13 102.651L401.174 110.182L411.964 124.495L422.003 140.106Z" fill="#4BFBE5" />
                    <path d="M112.106 56L225.361 251.003L30.125 137.995L33.625 131.933L37.558 126.12L46.1071 114.313L55.5221 103.006L60.5712 97.2606L68.9192 88.8013L74.6513 82.8731L82.1824 76.8288L96.4945 66.0394L112.106 56Z" fill="#FBAA4B" />
                    <path d="M421.009 139L232 251L450 250.751V243.766L449.517 236.782L448.067 222.314L445.651 207.846L444.202 200.363L441.303 188.889L439.37 180.906L435.987 171.927L429.223 155.463L421.009 139Z" fill="#4BA6FB" />
                    <path d="M900 250.5C900 280.113 894.18 309.436 882.873 336.795C871.566 364.154 854.992 389.013 834.099 409.953C813.206 430.892 788.402 447.502 761.104 458.835C733.806 470.167 704.547 476 675 476C645.453 476 616.194 470.167 588.896 458.835C561.598 447.502 536.794 430.892 515.901 409.953C495.008 389.013 478.434 364.154 467.127 336.795C455.82 309.436 450 280.113 450 250.5L675 250.5H900Z" fill="#D9D9D9" />
                    <g filter="url(#filter5_d_383_87)">
                        <rect width="5" height="226" transform="matrix(1 0 0 -1 675 476)" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter6_d_383_87)">
                        <rect width="5.00263" height="226.356" transform="matrix(0.86557 -0.500787 -0.499213 -0.866479 787.835 444.991)" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter7_d_383_87)">
                        <rect width="5.00788" height="226.119" transform="matrix(-0.499213 0.866479 0.86557 0.500787 675.889 248.804)" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter8_d_383_87)">
                        <rect width="5.00263" height="226.356" transform="matrix(0.86557 0.500787 0.499213 -0.866479 562.835 445.492)" fill="#D9D9D9" />
                    </g>
                    <g filter="url(#filter9_d_383_87)">
                        <rect width="5.00788" height="226.119" transform="matrix(0.499213 0.866479 0.86557 -0.500787 483.389 362.042)" fill="#D9D9D9" />
                    </g>
                    <path d="M480.055 363L676 251L450 251.249V258.234L450.501 265.218L452.004 279.686L454.508 294.154L456.011 301.637L459.017 313.111L461.02 321.094L464.527 330.073L471.54 346.537L480.055 363Z" fill="#0A5DFF" />
                    <path d="M676.211 475.965L676.792 249.986L564.217 445.882L570.279 449.39L576.591 452.463L589.898 458.427L603.706 463.522L610.951 465.978L622.41 469.137L630.338 471.41L639.883 472.882L657.672 475.074L676.211 475.965Z" fill="#B84BFB" />
                    <path d="M789 445.078L677 250L677.249 475H684.234L691.218 474.501L705.686 473.005L720.154 470.512L727.637 469.016L739.111 466.023L747.094 464.028L756.073 460.537L772.537 453.556L789 445.078Z" fill="#1B17BF" />
                    <path d="M872.003 361.6L677 248.107L790.008 443.753L796.07 440.246L801.882 436.304L813.69 427.737L824.997 418.302L830.742 413.243L839.202 404.877L845.13 399.133L851.174 391.586L861.964 377.244L872.003 361.6Z" fill="#5200FF" />
                    <path d="M562.106 445.882L675.361 250.47L480.125 363.715L483.625 369.79L487.558 375.615L496.107 387.447L505.522 398.778L510.571 404.535L518.919 413.012L524.651 418.953L532.182 425.01L546.495 435.822L562.106 445.882Z" fill="#3D3ACE" />
                    <path d="M871.009 363L682 251L900 251.249V258.234L899.517 265.218L898.067 279.686L895.651 294.154L894.202 301.637L891.303 313.111L889.37 321.094L885.987 330.073L879.223 346.537L871.009 363Z" fill="#EC4BFB" />
                    <defs>
                        <filter id="filter0_d_383_87" x="221" y="26" width="13" height="234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter1_d_383_87" x="220.835" y="56.8891" width="125.33" height="206.222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter2_d_383_87" x="219.389" y="135.335" width="206.222" height="125.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter3_d_383_87" x="108.835" y="53.8891" width="125.33" height="206.222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter4_d_383_87" x="29.3892" y="135.335" width="206.222" height="125.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter5_d_383_87" x="671" y="250" width="13" height="234" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter6_d_383_87" x="670.835" y="246.353" width="125.33" height="206.638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter7_d_383_87" x="669.389" y="248.804" width="206.222" height="125.577" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter8_d_383_87" x="558.835" y="249.359" width="125.33" height="206.638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                        <filter id="filter9_d_383_87" x="479.389" y="248.804" width="206.222" height="125.577" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_383_87" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_383_87" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}