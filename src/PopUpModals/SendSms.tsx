// import React from 'react'
// import './SendSms.css'
// import SmsSentSuccess from './SmsSentSuccess'

// const SendSms = () => {
//   return (
//     <div className='send-sms-container'>
//         <div className='send-sms-topic-container'>
//             <div className='rectangle'> 
//             </div>
//             <div className='send-sms-topic'>
//                 Send an SMS
//             </div>
//             <button className='close-icon'>
//             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//                 <path d="M19.194 12.7935L12.8047 19.1828" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path d="M19.1959 19.1865L12.8013 12.7905" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7792 3.66699H10.2206C6.19257 3.66699 3.66724 6.51899 3.66724 10.555V21.4457C3.66724 25.4817 6.18057 28.3337 10.2206 28.3337H21.7779C25.8192 28.3337 28.3339 25.4817 28.3339 21.4457V10.555C28.3339 6.51899 25.8192 3.66699 21.7792 3.66699Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//             </svg>

//             </button>

//         </div>
//         <div className='input-box-container'>
//             <div className='input-box'>
//                 <div className='input-box-text'>
//                     Type your message here
//                 </div>
//                 <div className='text-count'>
//                     0/240
//                 </div>

//             </div>
            
//         </div>

//         <button className='send-sms-button-container'>
//             <div className='send-sms-button-title'>
//                 Send SMS
//             </div>
//             <div className='send-icon'>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//                     <path d="M21.9354 2.58198C21.4352 2.0686 20.6949 1.87734 20.0046 2.07866L3.908 6.75952C3.1797 6.96186 2.66349 7.54269 2.52443 8.28055C2.38237 9.0315 2.87858 9.98479 3.52684 10.3834L8.5599 13.4768C9.07611 13.7939 9.74238 13.7144 10.1696 13.2835L15.9329 7.4843C16.223 7.18231 16.7032 7.18231 16.9934 7.4843C17.2835 7.77623 17.2835 8.24935 16.9934 8.55134L11.22 14.3516C10.7918 14.7814 10.7118 15.4508 11.0269 15.9702L14.1022 21.0538C14.4623 21.6577 15.0826 22 15.7628 22C15.8429 22 15.9329 22 16.013 21.9899C16.7933 21.8893 17.4135 21.3558 17.6436 20.6008L22.4156 4.52479C22.6257 3.84028 22.4356 3.09537 21.9354 2.58198Z" fill="white"/>
//                 </svg>

//             </div>

//         </button>
//     </div>
//   )
// }

// export default SendSms


import React, { useState } from 'react';
import './SendSms.css';
import SmsSentSuccess from './SmsSentSuccess';

const SendSms: React.FC = () => {
  const [showSmsSent, setShowSmsSent] = useState(false);

  const handleSendSms = () => {
    setShowSmsSent(true);
  };

  const handleCloseSmsSent = () => {
    setShowSmsSent(false);
  };

  return (
    <div className='send-sms-container'>
      <div className='send-sms-topic-container'>
        <div className='rectangle'></div>
        <div className='send-sms-topic'>
          Send an SMS
        </div>
        <button className='close-icon' onClick={() => {}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M19.194 12.7935L12.8047 19.1828" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.1959 19.1865L12.8013 12.7905" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M21.7792 3.66699H10.2206C6.19257 3.66699 3.66724 6.51899 3.66724 10.555V21.4457C3.66724 25.4817 6.18057 28.3337 10.2206 28.3337H21.7779C25.8192 28.3337 28.3339 25.4817 28.3339 21.4457V10.555C28.3339 6.51899 25.8192 3.66699 21.7792 3.66699Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className='input-box-container'>
        <div className='input-box'>
          <div className='input-box-text'>
            Type your message here
          </div>
          <div className='text-count'>
            0/240
          </div>
        </div>
      </div>
      <button className='send-sms-button-container' onClick={handleSendSms}>
        <div className='send-sms-button-title'>
          Send SMS
        </div>
        <div className='send-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M21.9354 2.58198C21.4352 2.0686 20.6949 1.87734 20.0046 2.07866L3.908 6.75952C3.1797 6.96186 2.66349 7.54269 2.52443 8.28055C2.38237 9.0315 2.87858 9.98479 3.52684 10.3834L8.5599 13.4768C9.07611 13.7939 9.74238 13.7144 10.1696 13.2835L15.9329 7.4843C16.223 7.18231 16.7032 7.18231 16.9934 7.4843C17.2835 7.77623 17.2835 8.24935 16.9934 8.55134L11.22 14.3516C10.7918 14.7814 10.7118 15.4508 11.0269 15.9702L14.1022 21.0538C14.4623 21.6577 15.0826 22 15.7628 22C15.8429 22 15.9329 22 16.013 21.9899C16.7933 21.8893 17.4135 21.3558 17.6436 20.6008L22.4156 4.52479C22.6257 3.84028 22.4356 3.09537 21.9354 2.58198Z" fill="white"/>
          </svg>
        </div>
      </button>
      <SmsSentSuccess show={showSmsSent} onClose={handleCloseSmsSent} />
    </div>
  );
};

export default SendSms;
