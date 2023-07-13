import React from 'react'
import './BuyerProfile.css'
import { ArrowLeft} from 'react-iconly'
import buyerimage from '../../images/Buyer/BuyerProfilePicture.png'
import { Upload} from 'react-iconly'
import { Wallet} from 'react-iconly'
import { Call} from 'react-iconly'
import { Lock} from 'react-iconly'


const BuyerProfile = () => {
  return (
    <div className='buyer-profile-container'>
        <div className='buyer-profile-container-wrapper'>
            <div className='buyer-profile-content'>
                <div className='buyer-profile-title'>
                    <div className='left-arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M5.66667 16.3656L25.6667 16.3656" stroke="#4A037D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.7331 24.3982L5.66641 16.3662L13.7331 8.33289" stroke="#4A037D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='buyer-profile-title-content'>
                        Setup your Profile
                    </div>

                </div>
                <div className='buyer-profile-details'>
                    <div className='buyer-profile-details-leftside'>
                        <div className='buyer-profile-picture-container'>
                            <div className='buyer-profile-picture'>
                                <img src={buyerimage} alt=''/>
                            </div>
                        </div>
                        <div className='buyer-add-profile'>
                            <div className='buyer-add-profile-details'>
                                Add/change Profile picture
                            </div>
                            <div className='upload-image-button'>
                                <div className='upload-icon'>
                                <Upload size={24} primaryColor="#3B8BF1"/>
                                </div>
                                <div className='upload-button-details'>
                                    Upload Image
                                </div>

                            </div>

                        </div>
                        

                    </div>
                    <div className='buyer-profile-details-rightside'>
                        <div className='crypto-wallet'>
                            My Crypto Wallet
                        </div>
                        <div className='usd-balance'>
                            Current USD balance
                        </div>
                        <div className='amount'>
                            $291.00
                        </div>
                        <div className='wallet-button'>
                            <div className='wallet-icon'>
                                <Wallet size={24} />
                            </div>
                            <div className='wallet-button-details'>
                                View My Wallet
                            </div>

                        </div>
                    </div>
                   
                </div>
                <div className='buyer-contact-detail-container'>
                <div className='buyer-contact-number-container'>
                    <div className='buyer-contact-number-details-container'>
                        <div className='phone-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z" stroke="#4A037D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    
                        <div className='buyer-contact-number-detail'>
                            Phone Number 
                        </div>
                        <div className='buyer-contact-number'>
                            +30 0300- -3030 00

                        </div>

                    </div>
                    <div className='lock-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g opacity="0.5">
                                <path d="M21.8979 12.597V9.73432C21.8979 6.38365 19.1806 3.66632 15.8299 3.66632C12.4792 3.65165 9.75124 6.35565 9.73657 9.70765V9.73432V12.597" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.911 28.3326H10.723C7.93099 28.3326 5.66699 26.07 5.66699 23.2766V17.558C5.66699 14.7646 7.93099 12.502 10.723 12.502H20.911C23.703 12.502 25.967 14.7646 25.967 17.558V23.2766C25.967 26.07 23.703 28.3326 20.911 28.3326Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.8173 18.9368V21.8981" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='buyer-location-container'>
                    <div className='buyer-location-details-container'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="#4A037D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="#4A037D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className='location-container'>
                            <div className='buyer-location-detail'>
                                Location 
                            </div>
                            <div className='buyer-location'>
                                Florida, USA

                            </div>

                        </div>
                    


                    </div>
                    <div className='eye-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g opacity="0.5">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2153 16.0707C20.2153 18.3987 18.3273 20.2854 15.9993 20.2854C13.6713 20.2854 11.7847 18.3987 11.7847 16.0707C11.7847 13.7414 13.6713 11.8547 15.9993 11.8547C18.3273 11.8547 20.2153 13.7414 20.2153 16.0707Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9973 25.8065C21.0746 25.8065 25.7186 22.1558 28.3333 16.0705C25.7186 9.98514 21.0746 6.33447 15.9973 6.33447H16.0026C10.9253 6.33447 6.28129 9.98514 3.66663 16.0705C6.28129 22.1558 10.9253 25.8065 16.0026 25.8065H15.9973Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='buyer-interest-container'>
                    <div className='buyer-interest-details-container'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" stroke="#4A037D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    <div className='buyer-interest-detail-wrapper'>
                        <div className='buyer-interest-detail'>
                            Interests
                        </div>
                        <div className='interest-container'>
                            <div className='buyer-interest'>
                                Mens wear, shoes, watches, clothing, Adventure kits

                            </div>
                        </div>

                    </div>


                    </div>
                    <div className='edit-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g opacity="0.5">
                                <path d="M18.3298 27.2572H28" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.04 5.05972C18.0742 3.82372 19.9333 3.64247 21.195 4.65564C21.2647 4.71061 23.506 6.45172 23.506 6.45172C24.892 7.28959 25.3226 9.07081 24.4659 10.4301C24.4204 10.5029 11.7493 26.3526 11.7493 26.3526C11.3277 26.8785 10.6878 27.189 10.0039 27.1964L5.15137 27.2574L4.05804 22.6298C3.90488 21.9791 4.05804 21.2957 4.4796 20.7698L17.04 5.05972Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.6945 8.00122L21.9641 13.5841" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                </div>
                </div>
            </div>

            <div className='save-button'>
                <div className='save-button-content'>
                    Save
                </div>
                <div className='save-button-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.665 3.5C5.135 3.5 3.5 5.233 3.5 7.916V16.084C3.5 18.767 5.135 20.5 7.665 20.5H16.333C18.864 20.5 20.5 18.767 20.5 16.084V7.916C20.5 5.233 18.864 3.5 16.334 3.5H7.665ZM16.333 22H7.665C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2H16.334C19.723 2 22 4.378 22 7.916V16.084C22 19.622 19.723 22 16.333 22V22Z" fill="#E6FCFF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8135 15.1229C10.6225 15.1229 10.4295 15.0499 10.2835 14.9029L7.90951 12.5299C7.61651 12.2369 7.61651 11.7629 7.90951 11.4699C8.20251 11.1769 8.67651 11.1769 8.96951 11.4699L10.8135 13.3119L15.0295 9.09695C15.3225 8.80395 15.7965 8.80395 16.0895 9.09695C16.3825 9.38995 16.3825 9.86395 16.0895 10.1569L11.3435 14.9029C11.1975 15.0499 11.0055 15.1229 10.8135 15.1229" fill="#E6FCFF"/>
                    </svg>
                </div>
            </div>
        </div>


    </div>
  )
}

export default BuyerProfile