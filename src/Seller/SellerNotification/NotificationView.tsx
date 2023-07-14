import React from 'react';
import './NotificationView.css';
import { TickSquare } from 'react-iconly';

const NotificationView = () => {
  return (
    <div className='notification-view-container'>
      <div className='notification-view-leftside'>
        <div className='notification-view-checkbox'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.334 2.75024H7.665C4.644 2.75024 2.75 4.88924 2.75 7.91624V16.0842C2.75 19.1112 4.635 21.2502 7.665 21.2502H16.333C19.364 21.2502 21.25 19.1112 21.25 16.0842V7.91624C21.25 4.88924 19.364 2.75024 16.334 2.75024Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className='notification-view-details'>
          <div className='notification-view-title'>
            Order Updates - Order #22131
          </div>
          <div className='notification-view-content'>
            Et ullamcorper vel iaculis bibendum nisl amet leo.
          </div>
        </div>
      </div>
      <div className='notification-view-rightside'>
        <div className='notification-count'>
          1
        </div>
      </div>
    </div>
  );
};

export default NotificationView;
