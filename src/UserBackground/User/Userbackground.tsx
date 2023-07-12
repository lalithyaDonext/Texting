
import React from 'react';
import './UserBackground.css';
import { PiCaretUpDownFill } from 'react-icons/pi';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import Posts from '../../Seller/SellerPostViewProcess/Posts';
import PostStepTwo from '../../Seller/SellerPostViewProcess/postStepTwo';
import SellerFolowers from '../../Seller/SellerFollowers/SellerFolowers';
<<<<<<< HEAD
import SellerPostInDetail from '../../Seller/SellerPostInDetail/SellerPostInDetail';


=======
import EditPostStatus from '../../Seller/SellerPostEdit/EditPostStatus';
import AddPostTwo from '../../Seller/SellerPostAdd/AddPostTwo';
import AddpostSuccess from '../../Seller/SellerPostAdd/AddPostSuccess';
>>>>>>> 397a602b09a902f44fc2d821e53b4f53e86dc84f

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
<<<<<<< HEAD
            <SellerPostInDetail/>
=======
            <AddpostSuccess/>
>>>>>>> 397a602b09a902f44fc2d821e53b4f53e86dc84f
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBackground;
