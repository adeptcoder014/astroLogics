import React from 'react';
import { CurrentTransit } from './currentTransit';
import Image from "next/image"
import { useRouter } from "next/router";

const TransitDisplay = () => {
  const router = useRouter();

  let cardData = [
    {
      "title": "Natal",
      "link": "/konas",
      "image":
        <Image
          alt="alt tag"
          src={require("../public/icons/sampleCardImg.png")}
          height={40}
          width={40}
          class='w-12 mx-auto mb-2'
        />

    },
    {
      "title": "Planets",
      "link": "/planets",

      "image":
        <Image
          alt="alt tag"
          src={require("../public/icons/sampleCardImg1.png")}
          height={40}
          width={40}
          class='w-12 mx-auto mb-2'

        />

    },
    {
      "title": "Transits",
      "image":
        <Image
          alt="alt tdsdag"
          src={require("../public/icons/sampleCardImg2.png")}
          height={40}
          width={40}
          class='w-12 mx-auto mb-2'

        />


    },


    {
      "title": "Events",
      "image":
        <Image
          alt="alt tag"
          src={require("../public/icons/sampleCardImg3.png")}
          height={40}
          width={40}
          class='w-12 mx-auto mb-2'

        />

    }
  ]

  const handleClick = (link) => {
    router.push(link);
  };

  return (

    <div class="bg-containerColor max-w-lg mx-auto p-1">
      {/* <!-- Current Transit --> */}
      <div class="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 class="text-lg font-bold mb-2">Current Transit</h2>
        <div class="bg-gray-700 rounded-lg p-4 shadow-lg">
          {/* <!-- <img src="./icons/sampleCardImg2.png" alt="Transit Chart" class="flex self-center" /> --> */}
          <p class="m-2 text-center font-bold">Transit: 15th Jan 24</p>
          <CurrentTransit />
        </div>
        {/* </div> */}

      </div>

      {/* <!-- Categories --> */}
      <div class="bg-gray-800 p-4 rounded-lg mb-6">
        <h2 class="text-lg font-bold mb-2">Categories</h2>
        <div class="grid grid-cols-2 gap-4">
          {cardData.map((x) => (

            <div
              onClick={() => handleClick(x.link)}

              class="bg-custom-gradient p-4 rounded-lg text-center shadow-lg">
              {/* <img src="./icons/sampleCardImg.png" alt="Natal" class="w-12 mx-auto mb-2" /> */}
              {x.image}
              <p class="font-bold">{x.title}</p>
              <p class="text-xs">Navigate the natality</p>
            </div>
          ))}

        </div>
      </div>

      {/* <!-- Upcoming Event --> */}
      <div class="bg-containerColor p-4 rounded-lg">
        <h2 class="text-lg font-bold mb-2">Upcoming Event</h2>
        <div class="bg-custom-gradient p-4 rounded-lg flex items-center justify-between">
          <div>
          <img src="./planets/mars.svg" alt="Mars" class="w-10 h-10" />
            <p class="font-bold">Mars sitting in 9th</p>
            <p class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Native similarity with his father.</p>
          </div>
          <div class='flex flex-col'>
            <span class="bg-orange-600 text-xs font-bold px-2 py-1 rounded-lg mb-3">Principle</span>
            <span class="bg-blue-600 text-xs font-bold px-2 py-1 rounded-lg">Father</span>
          </div>
        </div>
      </div>
    </div >



  );
};

export default TransitDisplay;
