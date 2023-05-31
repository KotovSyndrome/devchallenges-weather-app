import React, { useState } from 'react'


// TODO: Request current location and convert into address via geosearch
// TODO: Conditionally render geosearch menu

const Sidebar = () => {
    const [weatherState, setWeatherState] = useState("Weather Unavailable");
  
    return (
    <React.Fragment>
      <div className='relative'>
        <button type="button" className="absolute top-10 left-10 text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
        <button type="button" className="absolute top-10 right-10 text-gray-700 border border-gray-700 bg-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500">
          {/* <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#323232" stroke-width="2"/>
            <path d="M19 12H21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12H5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 19L12 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 3L12 5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#323232" stroke-width="2"/>
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
    </ React.Fragment>
  )
}

export default Sidebar