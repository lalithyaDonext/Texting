import React from 'react';
import './Header.css';
import { AiOutlineSearch, AiOutlineLogout, AiOutlineShoppingCart, AiOutlineEnvironment, AiOutlineMenu } from 'react-icons/ai';
import {FiSearch ,FiLogOut} from 'react-icons/fi';

const Header = ({ userType, username }: any) => {
  return (
    <header className="header">
      <div className="header-left">
        {userType === 'seller' && (
          <>
            <div className="search-wrapper">
              <div className="search-bar">
                <FiSearch className="search-icon" size='30px' color='gray' />
              </div>
              <select className="dropdown-bar">
                <option >All</option>
              </select>
            </div>
          </>
        )}
        {userType === 'buyer' && (
          <>
            <div className="category-selection">
              <AiOutlineMenu className="category-icon" />
              All Categories
            </div>
            <div className="toggle-icon">
              <div className="toggle-bar"></div>
            </div>
          </>
        )}
      </div>
      <div className="header-right">
        {userType === 'seller' && (
          <div className="greeting">
            Hi, {username}!
          </div>
        )}
        {userType === 'buyer' && (
          <>
            <div className="location">
              <AiOutlineEnvironment className="location-icon" />
            </div>
            <div className="cart">
              <AiOutlineShoppingCart className="cart-icon" />
            </div>
          </>
        )}
        <div className="logout">
          <FiLogOut className="logout-icon " />
          
          Logout
        </div>
      </div>
    </header>
  );
};

export default Header;
