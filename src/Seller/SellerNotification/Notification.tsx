import React from 'react'
import './Notification.css';
import Form from 'react-bootstrap/Form';
import NotificationView from './NotificationView';
import { TickSquare} from 'react-iconly'

const Notification = () => {
  return (
    <div className='notification-container'>

    <div>Notifications (10)
        
    </div>
    

    <div className="underline"></div> 
    <div className='checkbox-container'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8.44141 12.0002L10.8154 14.3732L15.5614 9.6272" stroke="#CBCBCB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="0.5" y="0.5" width="23" height="23" rx="5.5" stroke="#4A037D" />
    </svg> 

    <div> Mark all as read </div>
    </div>


    <NotificationView/>
    <div className="underline-2"></div>

    <NotificationView/>
    <div className="underline-2"></div>

    <NotificationView/>
    <div className="underline-2"></div>

    <NotificationView/>
    <div className="underline-2"></div>

    <NotificationView/>
    <div className="underline-2"></div>

    </div>
    

  )
}

export default Notification
