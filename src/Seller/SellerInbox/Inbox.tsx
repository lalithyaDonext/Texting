import React from 'react'
import './Inbox.css'
import SellerInbox from './SellerInbox'

const Inbox = () => {
  return (
    <div className='inbox-container'>
        <div className='inbox-container-wrapper'>
            <div className='inbox-left'>
                <div className='input-left-header-container'>
                    <div className='inbox-title'>
                        Chats
                    </div>
                    <div className='inbox-buttons'>
                        <div className='archived-button'>
                            Archived    
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_2415_12751)">
                                    <path d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2415_12751">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                     </div>
                    <div className='sms-button'>
                        Chats On SMS
                    </div>

                    </div>
                    
                </div>
                <SellerInbox/>
                <SellerInbox/>
                <SellerInbox/>
                <SellerInbox/>
                <SellerInbox/>

            </div>
            <div className='inbox-right'>
                <div className='inbox-right-detail'>
                    Select chat to display
                </div>
                
            </div>



        </div>

        </div>    
  )
}

export default Inbox