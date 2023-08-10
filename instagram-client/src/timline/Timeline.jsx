import React from 'react';
import './Timeline.css';
import Suggestions from './Suggestions';
import Posts from '../posts/Posts';

const Timeline = () => {
  return (
    <div className='timeline'>
        <div className="timeline_left">
          <div className="timeline__posts">
            <Posts />
            <Posts />
            <Posts />
          </div>
        </div>
        <div className="timeline_right"><Suggestions /></div>
        
    </div>
  )
}

export default Timeline