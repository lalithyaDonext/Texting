import React from "react";
import "./Header.css";
import {
  AiOutlineSearch,
  AiOutlineLogout,
  AiOutlineShoppingCart,
  AiOutlineEnvironment,
  AiOutlineMenu,
} from "react-icons/ai";
import { FiSearch, FiLogOut } from "react-icons/fi";
import searchIcon from "../../Icons/Outlined/Search.svg";
import { Search, Logout, Location } from "react-iconly";

const Header = ({ userType, username }: any) => {
  return (
    <header className="header">
      <div className="header-left">
        {userType === "seller" && (
          <>
            <div className="search-wrapper">
              <div className="search-bar">
                <Search />
                <div className="search-text">Search Orders</div>
              </div>
              <select className="dropdown-bar">
                <option>All</option>
              </select>
            </div>
          </>
        )}
        {userType === "buyer" && (
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
        <div className="seller-Location">
          <Location />
        </div>
        {userType === "seller" && (
          <div className="greeting">Hi, {username}!</div>
        )}
        {userType === "buyer" && (
          <>
            <div className="location">
              <AiOutlineEnvironment className="location-icon" />
            </div>
            <div className="cart">
              <AiOutlineShoppingCart className="cart-icon" />
            </div>
          </>
        )}
        <div></div>
        <div className="logout">
          <div className="logout-icon">
            <Logout size={24} />
          </div>
          Logout
        </div>
      </div>
    </header>
  );
};

export default Header;
