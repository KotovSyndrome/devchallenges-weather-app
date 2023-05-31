import React, { useState } from 'react';
import { type NextPage } from "next";

const Home: NextPage = () => {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState({});
  
  return (
    <React.Fragment>
      <div className='sm:flex flex-row h-screen'>
        <div className='flex-auto bg-slate-800 sm:w-4/12 sm:h-full h-screen'>
          Sidebar
        </div>
        <div className='flex-auto bg-gray-900 sm:w-8/12 sm:h-full h-screen'>
          Main Panel
        </div>
      </div>
      {/* TODO: Set flex boxes for sidebar and for main panel, use responsive mobile-first design */}
      {/* TODO: Sidebar - props: today's weather forecast */}
      {/* TODO: Main Panel - props: next five days of forecast */}
    </React.Fragment>
  );
};

export default Home;
