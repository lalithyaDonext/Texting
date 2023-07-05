import React from 'react';
import './SideBar.css';
import { BiSolidDashboard } from 'react-icons/bi';
import { SiGoogleclassroom } from 'react-icons/si';
import { PiStudentFill } from 'react-icons/pi';
import { FiUserPlus, FiPieChart, FiFileText, FiBell, FiMail, FiChevronRight } from 'react-icons/fi';


import logo from '../../images/SideBar/Unik logo - BL 1.png'; // Replace with your actual logo image

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="Customlogo">
        <img src={logo} alt="logo" style={{width:'86px' , height:'87px'}} /> {/* Use the logo image */}
      </div>
      <ul className="navigation">
        <li className="navigation-item">
          <FiPieChart />
          Dashboard
        </li>
        <li className="navigation-item">
          <FiUserPlus />
          My Store Followers
        </li>
        <li className="navigation-item">
          <FiFileText />
          My posts
        </li>
        <li className="navigation-item">
          <FiBell />
          Notifications
        </li>
        <li className="navigation-item">
          <FiMail />
          Chats
        </li>
        <li className="navigation-item">
          <div className='w-[30px] h-[30px] rounded-full bg-[gray] mr-[15px]'></div>
          Seller  Profile
        </li>
        {/* <li className="navigation-item"><BsCash/>Payments</li> */}
      </ul>

      <ul className="navigation1">
        <li className="navigation-item1">
          Popular Topics <FiChevronRight />
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
