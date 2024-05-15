import { useEffect, useState } from "react"

export const EventCard = (props) => {
  

    return (
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
    )
}