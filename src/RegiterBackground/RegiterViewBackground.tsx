import React from 'react'
import './RegiterViewBackground.css'
import Register from '../Register/Register'

const RegiterViewBackground = () => {
  return (
    <div className='reg-background-body'>
        <div className='reg-background-container-left'>
            {/* <div className='reg-background-image'>
                <div className='reg-svg-container'>
                <svg className="my-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 745 982" fill="none">
                <path d="M565.296 327.5C591.393 259.735 831.563 141 623.21 0H0V984H435C512 951 737.049 863.5 744.714 713C754.595 519 504.45 485.5 565.296 327.5Z" fill="url(#paint0_linear_1870_7659)"/>
                <defs>
                    <linearGradient id="paint0_linear_1870_7659" x1="372.5" y1="0" x2="372.5" y2="984" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4A037D"/>
                    <stop offset="1" stopColor="#944FC6"/>
                    </linearGradient>
                </defs>
                </svg>

                </div>
          
            </div> */}
        </div>
        <div className='reg-background-container-right'>
            <div className='reg-background-container-right-card'>
                <Register/>

            </div>

        </div>

    </div>
  )
}

export default RegiterViewBackground