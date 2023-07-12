
import React from 'react';
import './UserBackground.css';
import { PiCaretUpDownFill } from 'react-icons/pi';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import Posts from '../../Seller/SellerPostViewProcess/Posts';
import PostStepTwo from '../../Seller/SellerPostViewProcess/postStepTwo';
import SellerFolowers from '../../Seller/SellerFollowers/SellerFolowers';
import Notification from '../../Seller/SellerNotification/Notification';
import SellerInbox from '../../Seller/SellerInbox/SellerInbox';
import Inbox from '../../Seller/SellerInbox/Inbox';



const UserBackground = () => {

  const userType = 'seller'; // Change this value based on the user type
  const username = 'FLAIR'; // Change this value to the actual username

  return (
    <div className="page-container">
      <Header userType={userType} username={username} />
      <div className="content-container">
        <SideBar />
        <div className="page-content">
          <div className="rounded-corner-space">
            <Inbox/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBackground;
