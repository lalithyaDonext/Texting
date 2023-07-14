import React from "react";
import "./searchbar.css";

const Searchbar = ({ placeholder, option }: any) => {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <div className="search-text">Search Following Sellers</div>

        <div>
          <svg
            className="Search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11.7664"
              cy="11.7666"
              r="8.98856"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.0181 18.4851L21.5421 22"
              stroke="#130F26"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
