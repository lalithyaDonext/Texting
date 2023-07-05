
import React from 'react';
import './UserBackground.css';
import { PiCaretUpDownFill } from 'react-icons/pi';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';



const UserBackground = () => {
  const userType = 'seller'; // Change this value based on the user type
  const username = 'James Perera'; // Change this value to the actual username

  return (
    <div className="page-container">
      <Header userType={userType} username={username} />
      <div className="content-container">
        <SideBar />
        <div className="page-content">
          <div className="rounded-corner-space">
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBackground;
