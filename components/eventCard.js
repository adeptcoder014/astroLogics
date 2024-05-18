import { useEffect, useState } from "react"

export const EventCard = (props) => {
  

    return (
        <div className="bg-containerColor p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Upcoming Event</h2>
        <div className="bg-custom-gradient p-4 rounded-lg flex items-center justify-between">
          <div>
          <img src="./planets/mars.svg" alt="Mars" className="w-10 h-10" />
            <p className="font-bold">Mars sitting in 9th</p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Native similarity with his father.</p>
          </div>
          <div className='flex flex-col'>
            <span className="bg-orange-600 text-xs font-bold px-2 py-1 rounded-lg mb-3">Principle</span>
            <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded-lg">Father</span>
          </div>
        </div>
      </div>
    )
}