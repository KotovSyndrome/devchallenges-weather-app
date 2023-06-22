import React, { useState } from 'react';
import { type NextPage } from "next";
import Sidebar from '~/components/Sidebar/Sidebar';
import MainPanel from '~/components/MainPanel/MainPanel';

const Home: NextPage = () => {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState({});
  
  return (
    <React.Fragment>
      <div className='sm:flex flex-row h-screen'>
        <div className='flex-auto bg-sidebar sm:w-4/12 sm:h-full h-screen'>
          <Sidebar />
        </div>
        <div className='flex-auto bg-mainPanel sm:w-8/12 sm:h-full min-h-screen'>
          <MainPanel />
        </div>
      </div>
      {/* TODO: Sidebar - props: today's weather forecast */}
      {/* TODO: Main Panel - props: next five days of forecast */}
    </React.Fragment>
  );
};

export default Home;
