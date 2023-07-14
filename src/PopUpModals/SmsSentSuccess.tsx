import React from 'react';
import { Modal } from 'react-bootstrap';
import './SmsSentSuccess.css';

interface SmsSentSuccessProps {
  onClose: () => void;
}

const SmsSentSuccess: React.FC<SmsSentSuccessProps> = ({ onClose }) => {
  return (
    <Modal show={true} onHide={onClose} backdrop="static" keyboard={false} centered>
      {/* <Modal.Body> */}
        <div className='popup-message-container'>
          <div className='message-container'>
            <div className='sms-text'>SMS Sent Successfully!</div>
          </div>
          <div className='success-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M55.6307 9.39648H26.3684C16.171 9.39648 9.77783 16.7047 9.77783 27.047V54.9543C9.77783 65.2966 16.1407 72.6048 26.3684 72.6048H55.6273C65.8585 72.6048 72.2247 65.2966 72.2247 54.9543V27.047C72.2247 16.7047 65.8585 9.39648 55.6307 9.39648Z" stroke="url(#paint0_linear_1509_43395)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28.9827 41.0008L36.9961 49.1086L53.0163 32.8931" stroke="url(#paint1_linear_1509_43395)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_1509_43395" x1="-1.65369" y1="40.2657" x2="93.083" y2="45.584" gradientUnits="userSpaceOnUse">
                  <stop offset="0.16759" stopColor="#9F00D9"/>
                  <stop offset="1" stopColor="#00DDFF"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1509_43395" x1="24.5831" y1="40.8123" x2="60.9012" y2="43.8709" gradientUnits="userSpaceOnUse">
                  <stop offset="0.16759" stopColor="#9F00D9"/>
                  <stop offset="1" stopColor="#00DDFF"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <button className='close-button' onClick={onClose}>
            <div className='close-button-text'>Close</div>
            <div className='close-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.60166 8.82937C5.48966 8.82937 5.37766 8.78678 5.29249 8.70103C5.12158 8.53012 5.12158 8.25362 5.29249 8.0827L8.08783 5.28737C8.25874 5.11645 8.53524 5.11645 8.70616 5.28737C8.87708 5.45828 8.87708 5.73478 8.70616 5.9057L5.91083 8.70103C5.82566 8.78678 5.71366 8.82937 5.60166 8.82937Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.39811 8.83131C8.28611 8.83131 8.17411 8.78872 8.08894 8.70297L5.29127 5.90472C5.12036 5.73381 5.12036 5.45731 5.29127 5.28639C5.46277 5.11547 5.73927 5.11547 5.90961 5.28639L8.70727 8.08464C8.87819 8.25556 8.87819 8.53206 8.70727 8.70297C8.62211 8.78872 8.50952 8.83131 8.39811 8.83131Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.47133 2.0415C2.9955 2.0415 2.04175 3.05242 2.04175 4.6175V9.38217C2.04175 10.9473 2.9955 11.9582 4.47133 11.9582H9.52767C11.0041 11.9582 11.9584 10.9473 11.9584 9.38217V4.6175C11.9584 3.05242 11.0041 2.0415 9.52825 2.0415H4.47133ZM9.52766 12.8332H4.47133C2.49441 12.8332 1.16675 11.446 1.16675 9.38217V4.6175C1.16675 2.55367 2.49441 1.1665 4.47133 1.1665H9.52825C11.5052 1.1665 12.8334 2.55367 12.8334 4.6175V9.38217C12.8334 11.446 11.5052 12.8332 9.52766 12.8332Z" fill="white"/>
              </svg>
            </div>
          </button>
        </div>
      {/* </Modal.Body> */}
    </Modal>
  );
};

export default SmsSentSuccess;
