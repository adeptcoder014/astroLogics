import React from 'react';
import { CurrentTransit } from './currentTransit';

const TransitDisplay = () => {
  return (
   
      <div class="max-w-sm mx-auto p-4">
        {/* <!-- Current Transit --> */}
        <div class="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-bold mb-2">Current Transit</h2>
          <div class="bg-gray-700 rounded-lg p-4">
            {/* <img src="./icons/sampleCardImg2.png" alt="Transit Chart" class="flex self-center"/> */}
            <p class="m-2 text-center font-bold">Transit: 15th Jan '24</p>
            <CurrentTransit/>
          </div>
        </div>
    
        {/* <!-- Categories --> */}
        <div class="bg-gray-800 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-bold mb-2">Categories</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-100 p-4 rounded-lg text-center">
              <img src="./icons/sampleCardImg.png" alt="Natal" class="w-12 mx-auto mb-2"/>
              <p class="font-bold">NATAL</p>
              <p class="text-xs">Navigate the natality</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-lg text-center">
              <img src="./icons/sampleCardImg1.png" alt="Planet" class="w-12 mx-auto mb-2"/>
              <p class="font-bold">PLANET</p>
              <p class="text-xs">Navigate the nativity</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-lg text-center">
              <img src="./icons/sampleCardImg2.png" alt="Transit" class="w-12 mx-auto mb-2"/>
              <p class="font-bold">TRANSIT</p>
              <p class="text-xs">Navigate the nativity</p>
            </div>
            <div class="bg-gray-700 p-4 rounded-lg text-center">
              <img src="./icons/sampleCardImg3.png" alt="Event" class="w-12 mx-auto mb-2"/>
              <p class="font-bold">EVENT</p>
              <p class="text-xs">Navigate the nativity</p>
            </div>
          </div>
        </div>
    
        {/* <!-- Upcoming Event --> */}
        <div class="bg-gray-800 p-4 rounded-lg">
          <h2 class="text-lg font-bold mb-2">Upcoming Event</h2>
          <div class="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
            <img src="./planets/mars.svg" alt="Mars" class="w-10 h-10"/>
            <div>
              <p class="font-bold">Mars sitting in 9th</p>
              <p class="text-xs">Native's similarity with his father.</p>
            </div>
            <div>
              <span class="bg-orange-600 text-xs font-bold px-2 py-1 rounded-lg">Principle</span>
              <span class="bg-blue-600 text-xs font-bold px-2 py-1 rounded-lg">Father</span>
            </div>
          </div>
        </div>
      </div>
    
    
    
  );
};

export default TransitDisplay;
