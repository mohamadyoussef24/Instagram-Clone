import React from 'react';
import Sidenav from './navigation/Sidenav';
import Timeline from './timline/Timeline';
import './Homepage.css';

const homepage = () => {
  return (
    <div className='homepage'>
        <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  )
}

export default homepage